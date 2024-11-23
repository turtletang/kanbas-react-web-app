import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  const [module, setModule] = useState({
    id: '1',
    name: 'Module Name',
    description: 'Module description...',
    course: 'Course 1'
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <a
        id="wd-get-module"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Assignment Title
      </a>

      <a
        id="wd-get-module-name"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>

      <hr />

      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Assignment Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />

      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Assignment Score
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value)})
        }
      />
      <hr />

      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Assignment Completed
      </a>
      <label>
      <input
        type = "checkbox"
        id="wd-assignment-title"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        style={{ marginRight: '10px' }}
      />
      Completed
      </label>
      <hr />


      

      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) =>
          setModule({ ...module, name: e.target.value })
        }
      />
      <hr />

      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>
      <input
        className="form-control w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <hr />
    </div>
  );
}
