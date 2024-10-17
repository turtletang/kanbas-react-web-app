import React from "react";
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";
import { IoIosArrowDown } from "react-icons/io";

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
  const { cid, aid } = useParams<{ cid: string; aid: string }>();

  const assignment = assignments.find((assignment) => assignment.course === cid && assignment._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container my-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input id="wd-name" className="form-control" value={assignment.title} readOnly />
      </div>

      {/* Description */}
      <div className="mb-3">
        <div className="d-flex flex-column">
          <textarea
            id="wd-description"
            rows={13}
            className="form-control flex-grow-1"
            value={`\n The assignment is available online. \n\n Submit a link to the landing page of your Web application running on Netlify.\n\n The landing page should include the following: \n\n   •  Your full name and section \n   •  Links to each of the lab assignments \n   •  Link to the Kanas application \n   •  Links to all relevant source code repositories \n\n The Kanas application should include a link to navigate back to the landing page.`}
            readOnly
          />
        </div>
      </div>

      <div className="mb-3 row">
        {/* Points */}
        <label htmlFor="wd-points" className="col-form-label col-4 text-end">
          Points
        </label>
        <div className="col-8">
          <input id="wd-points" className="form-control" value={100} />
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
                value={assignment.formattedDueDate}
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
                  value={assignment.formattedNotAvailableUntil}
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
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end">
      <Link to={`/Kanbas/courses/${cid}/assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <Link to={`/Kanbas/courses/${cid}/assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}
