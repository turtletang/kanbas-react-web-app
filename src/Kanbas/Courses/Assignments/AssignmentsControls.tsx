import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">

      {/* Add button 'Assignment' */}
      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      

      {/* Add button 'Group' */}
      <button
        id="wd-group"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
     
     {/* Add input box 'Search for Assignments' with icon */}
     <div className="input-group float-end me-3" style={{ width: "250px" }}>
        <span className="input-group-text">
          <CiSearch style={{ fontSize: '1.5em' }}/>
        </span>
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          className="form-control form-control-lg"
        />
      </div>
    </div>
  );
}
