import React from "react";
import DeleteAssignment from "./DeleteAssignment";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function EachAssignmentsControl({
  deleteAssignment,
  assignmentId,
  setAssignmentToDelete,
}: {
  deleteAssignment: (title: string) => void;
  assignmentId: string;
  setAssignmentToDelete: (title: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-assignments-controls" className="text-nowrap d-flex align-items-center">
      {/* currentUser?.role === "FACULTY" && ( */}
        <>
          <FaTrash className="text-danger me-4 fs-4" data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog"
            onClick={() => setAssignmentToDelete(assignmentId)} />
          <DeleteAssignment
            dialogTitle="Delete Assignment"
            deleteAssignment={deleteAssignment}
            assignmentId={assignmentId} />
        </>
      
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-3" />
    </div>
  );
}
