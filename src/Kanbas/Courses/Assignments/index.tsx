import React from "react";
import { useParams, Link } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules//LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import HeadAssignButton from "./HeadAssignButton";
import { assignments } from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div>
      <AssignmentsControls />
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
            <AssignmentControlButtons />
          </div>

          <ul className="wd-assignments list-group rounded-0">
            {courseAssignments.map((assignment) => (
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
                      <span className="text-danger">{assignment.module}</span> |
                      <strong>Not available until</strong> {assignment.notAvailableUntil} |
                      <br />
                      <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                    </div>
                  </p>
                </div>
                <LessonControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}