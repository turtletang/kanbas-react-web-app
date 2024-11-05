import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules//LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import HeadAssignButton from "./HeadAssignButton";
import { updateAssignment, deleteAssignment } from "./reducer";
import EachAssignmentControl from "./EachAssignmentControl";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [assignmentToDelete, setAssignmentToDelete] = useState("");
  const confirmDeleteAssignment = () => {
    dispatch(deleteAssignment(assignmentToDelete));
    setAssignmentToDelete("");
  };

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div>
      {isFaculty &&
      <AssignmentsControls />
      }
      <br />
      <br />
      <br />
      <br />

      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            ASSIGNMENTS
            {isFaculty &&<AssignmentControlButtons />}
          </div>

          <ul className="wd-assignments list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center justify-content-between"
                >
                  <HeadAssignButton />
                  <div className="flex-grow-1 ms-4">
                    <p className="wd-assignment-list-item mb-0">
                      <Link
                        className="wd-assignment-link text-black fw-bold text-decoration-none"
                        to={`/Kanbas/courses/${cid}/assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </Link>
                      <br />
                      <div
                        className="mt-1"
                        style={{ fontSize: "0.85em", marginLeft: "0.25rem" }}
                      >
                        <span className="text-danger">{assignment.module}</span>{" "}
                        |<strong>Not available until</strong>{" "}
                        {assignment.notAvailableUntil} |
                        <br />
                        <strong>Due</strong> {assignment.dueDate} |{" "}
                        {assignment.points} pts
                      </div>
                    </p>
                  </div>

                  {isFaculty && (
                  <EachAssignmentControl
                    deleteAssignment={confirmDeleteAssignment}
                    assignmentId={assignment._id}
                    setAssignmentToDelete={setAssignmentToDelete}
                  />
                  )}
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
