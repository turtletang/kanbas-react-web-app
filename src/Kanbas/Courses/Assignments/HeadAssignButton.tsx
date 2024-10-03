import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";

export default function HeadAssignlButton() {
  return (
    <div className="float-end">
      <BsGripVertical className="me-2 fs-3" />
      <PiNotePencil className="me-2 fs-3" style={{ color: 'green' }} />
    </div>
  );
}