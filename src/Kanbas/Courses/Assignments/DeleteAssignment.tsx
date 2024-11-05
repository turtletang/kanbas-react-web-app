export default function deleteEachAssign({
  dialogTitle,
  deleteAssignment,
  assignmentId
}: {
  dialogTitle: string;
  deleteAssignment: (assignmentId: string) => void;
  assignmentId: string;
}) {
  return (
    <div id="wd-add-assignment-dialog" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{dialogTitle}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to remove the assignment?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => deleteAssignment(assignmentId)}
            >
              Delete Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}