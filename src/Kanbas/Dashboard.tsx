import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course1">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course2"> 
          <img src="/images/5004.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5004/Home">
              CS5004 Java
            </Link>
            <p className="wd-dashboard-course-title">
              Object Oriented Design
            </p>
            <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course3">
          <img src="/images/5008.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5008/Home">
              CS5008 C
            </Link>
            <p className="wd-dashboard-course-title">
              Data Structures
            </p>
            <Link to="/Kanbas/Courses/5008/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course4">
          <img src="/images/5001.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5001/Home">
              CS5001 Aligned 1
            </Link>
            <p className="wd-dashboard-course-title">
              Python
            </p>
            <Link to="/Kanbas/Courses/5001/Home"> Go </Link>
          </div>
        </div> 

        <div className="wd-dashboard-course5">
          <img src="/images/5002.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5002/Home">
              CS5002 Aligned 2
            </Link>
            <p className="wd-dashboard-course-title">
              Discrete Maths
            </p>
            <Link to="/Kanbas/Courses/5002/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course6">
          <img src="/images/6666.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/6666/Home">
              AH6666 Art Theory
            </Link>
            <p className="wd-dashboard-course-title">
              Historiography
            </p>
            <Link to="/Kanbas/Courses/6666/Home"> Go </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course7">
          <img src="/images/7777.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/7777/Home">
              AH7777 European Art
            </Link>
            <p className="wd-dashboard-course-title">
              Renaissance
            </p>
            <Link to="/Kanbas/Courses/7777/Home"> Go </Link>
          </div> 
        </div>     
      </div>
    </div>
  );
}