import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <div
        className="bg-secondary border border-black "
        style={{ 
          borderRadius: '20px',
          padding: '5px 10px',
          fontSize: '0.9em',
          display: 'inline-block',
          marginRight: '10px',
        }}
      >
        40% of Total
      </div>
   
      <BsPlus className="fs-4 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}