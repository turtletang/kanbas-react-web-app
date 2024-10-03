import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        {/* Modules Column */}

        <Modules />
      </div>
      {/* Course Status Column */}
      <div className="d-none d-md-block ms-5">
        <CourseStatus />
      </div>
    </div>
  );
}
