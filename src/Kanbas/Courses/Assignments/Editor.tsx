import { IoIosArrowDown } from "react-icons/io";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container my-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input id="wd-name" className="form-control" value="A1" />
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

      <div className="mb-3 row">
        {/* Assignment Group */}
        <label htmlFor="wd-group" className="col-form-label col-4 text-end">
          Assignment Group
        </label>
        <div className="col-8">
          <select id="wd-group" className="form-control form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        {/* Display Grade as */}
        <label
          htmlFor="wd-display-grade-as"
          className="col-form-label col-4 text-end"
        >
          Display Grade as
        </label>
        <div className="col-8">
          <select id="wd-display-grade-as" className="form-control form-select">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="mb-3 row">
        <label
          htmlFor="wd-submission-type"
          className="col-form-label col-4 text-end"
        >
          Submission Type
        </label>

        <div className="col-8 border p-3">
          <select
            id="wd-submission-type"
            className="form-control form-select mb-3"
          >
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
          </select>

          {/* Online Entry Options */}
          <label className="form-label mb-3">
            <strong>Online Entry Options</strong>
          </label>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-text-entry"
              className="form-check-input"
            />
            <label htmlFor="wd-text-entry" className="form-check-label">
              Text Entry
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-website-url"
              className="form-check-input"
              checked
            />
            <label htmlFor="wd-website-url" className="form-check-label">
              Website URL
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-media-recordings"
              className="form-check-input"
            />
            <label htmlFor="wd-media-recordings" className="form-check-label">
              Media Recording
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-student-annotation"
              className="form-check-input"
            />
            <label htmlFor="wd-student-annotation" className="form-check-label">
              Student Annotation
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-file-upload"
              className="form-check-input"
            />
            <label htmlFor="wd-file-upload" className="form-check-label">
              File Upload
            </label>
          </div>
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
                  <span>Everyone</span>
                  <span className="ms-2 text-muted" style={{ cursor: 'pointer', pointerEvents: 'auto' }}>
                    &times;
                  </span>
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
                value="2024-05-13T23:59"
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
                  value="2024-05-06T12:00"
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
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
