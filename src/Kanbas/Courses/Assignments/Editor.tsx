import React, {useState, useEffect} from "react";
import { useNavigate, useParams, useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { assignments } from "../../Database";
import { IoIosArrowDown } from "react-icons/io";
import { addAssignment, updateAssignment, cancelUpdate } from "./reducer";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  notAvailableUntil: string;
  dueDate: string;
  points: number;
  description: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {assignments} = useSelector((state: any) => state.assignmentsReducer);
  

  const [title, setTitle] = useState("New Assignment");
  const [description, setDescription] = useState("New Assignment Description");
  const [points, setPoints] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  useEffect(() => {
    // Find the existing assignment by id if available
    const existingAssignment = assignments.find(
      (assignment: Assignment) => assignment.course === cid && assignment._id === aid
    );

    if (existingAssignment) {
      // Populate state with existing assignment details for editing
      setTitle(existingAssignment.title);
      setDescription(existingAssignment.description);
      setPoints(existingAssignment.points);
      setDueDate(existingAssignment.dueDate);
      setAvailableFrom(existingAssignment.notAvailableUntil);
      setAvailableUntil(""); // Assuming empty for new assignments
    }
  }, [aid, cid, assignments]);


  const handleSave = () => {
    const newAssignment = {
      _id: aid === 'new' ? new Date().getTime().toString() : aid,
      title,
      description,
      points,
      dueDate,
      course: cid!,
      notAvailableUntil: availableFrom,
    };

    console.log("New Assignment:", newAssignment); // degub log the new assignment
    console.log("aid:", aid);
    if (aid === 'new') {
      console.log("Dispatching addAssignment"); // debug log the dispatch action
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(newAssignment));
    }

    navigate(`/Kanbas/courses/${cid}/assignments`);
  };

  const handleCancel = () => {
    dispatch(cancelUpdate(aid));
    navigate(`/Kanbas/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container my-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input id="wd-name" className="form-control" value={title}
         onChange={(e) => setTitle(e.target.value)} />
      </div>

      {/* Description */}
      <div className="mb-3">
        <div className="d-flex flex-column">
          <textarea
            id="wd-description"
            rows={13}
            className="form-control flex-grow-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 row">
        {/* Points */}
        <label htmlFor="wd-points" className="col-form-label col-4 text-end">
          Points
        </label>
        <div className="col-8">
          <input id="wd-points" className="form-control" value={points}
          onChange={(e) => setPoints(Number(e.target.value))} />
        </div>
      </div>

    
      <div className="row mb-5">
        {/* Assign To */}
        <label htmlFor="wd-assign-to" className="col-form-label col-4 text-end">
          Assign
        </label>
        <div className="col-8 border p-3">
          <div className="row">
            <div className="col-md-12 mb-3">
              <label htmlFor="wd-assign-to" className="form-label">
                <strong>Assign to</strong>
              </label>
            <div className="position-relative">
              <input
                id="wd-assign-to"
                className="form-control"
                value="" 
              />
              <div className="position-absolute top-50 start-0 translate-middle-y bg-light px-2 ms-3" style={{ borderRadius: '4px', pointerEvents: 'none' }}>
                  
                </div>
              </div>
            </div>
            

            {/* Due Date */}
            <div className="col-md-12 mb-3">
              <label htmlFor="wd-due-date" className="form-label">
                <strong>Due</strong>
              </label>
              <input
                type="datetime-local"
                id="wd-due-date"
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            {/* Available From and Until */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label">
                <strong>Available from</strong>
                </label>
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  className="form-control"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-until" className="form-label">
                <strong>Until</strong>
                </label>
                <input
                  type="datetime-local"
                  id="wd-until"
                  className="form-control"
                  value={availableUntil}
                  onChange={(e) => setAvailableUntil(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end">
      <button onClick={handleCancel} className="btn btn-secondary me-2">
          Cancel
        </button>

        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}