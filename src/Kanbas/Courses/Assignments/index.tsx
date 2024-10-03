import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules//LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import HeadAssignButton from "./HeadAssignButton";

export default function Assignments() {
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
            <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <HeadAssignButton />

              <div className="flex-grow-1 ms-4">
                <p className="wd-assignment-list-item mb-0">
                  <a
                    className="wd-assignment-link text-black fw-bold text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/A1"
                    
                  >
                    A1
                  </a>
                  <br />
                  <div
                    className="mt-1"
                    style={{ fontSize: "0.85em", marginLeft: "0.25rem" }}
                  >
                    <span className="text-danger">Multiple Modules</span> | 
                    <strong>Not available until</strong>
                    May 6 at 12:00am |
                    <br />
                    <strong>Due</strong> May 13 at 11:59pm |
                    100 pts
                  </div>
                </p>
              </div>
              <LessonControlButtons />
            </li>

            <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <HeadAssignButton />
              <div className="flex-grow-1 ms-4">
                <p className="wd-assignment-list-item mb-0">
                  <a
                    className="wd-assignment-link text-black fw-bold text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/A2"
                    
                  >
                    A2
                  </a>
                  <br />

                  <div
                    className="mt-1"
                    style={{ fontSize: "0.85em", marginLeft: "0.25rem" }}
                  >
                    <span className="text-danger">Multiple Modules</span> |
                    <strong> Not Available until </strong>
                    May 13 at 12:00am |
                    <br />
                    <strong>Due</strong> May 20 at 11:59pm |
                    100 pts
                  </div>
                </p>
              </div>
              <LessonControlButtons />
            </li>

            <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <HeadAssignButton />
              <div className="flex-grow-1 ms-4">
                <p className="wd-assignment-list-item mb-0">
                  <a
                    className="wd-assignment-link text-black fw-bold text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/A3"
                    
                  >
                    A3
                  </a>
                  <br />

                  <div
                    className="mt-1"
                    style={{ fontSize: "0.85em", marginLeft: "0.25rem" }}
                  >
                    <span className="text-danger">Multiple Modules</span> |
                    <strong> Not Available until </strong>
                    May 20 at 12:00am |
                    <br />
                    <strong>Due</strong> May 27 at 11:59pm |
                    100 pts
                  </div>
                </p>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

