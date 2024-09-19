export default function Modules() {
  return (
    <div>
      <ul id="wd-buttons">
        <button>Collapse All</button> <button>View Progress</button> <select id="wd-modules-select">
          <option>Publish All</option>
          <option>Week 1</option>
          <option>Week 2</option>
          <option>Week 3</option>
          <option>Week 4</option>
        </select> <button>+ Module</button>
      </ul>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus Agenda</div>
          <ul className="wd-lessons">

            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Appliction</li>
              </ul> 
            </li>
            
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
            </li> 
          </ul>
        </li> 
      </ul>
    </div> 
);}