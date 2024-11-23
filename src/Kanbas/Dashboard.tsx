import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
// import * as db from "./Database";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enrollCourse, unenrollCourse, setEnrollments } from "./enrollmentReducer";
import * as userClient from "./Account/client";
import * as coursesClient from "./Courses/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  //addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments = [] } = useSelector((state: any) => state.enrollmentReducer); // Access enrollments from Redux
  //const [enrollments, setEnrollments] = useState<any[]>([]); // Define enrollments state

  const [showAllCourses, setShowAllCourses] = useState(false); // Toggle between enrolled and all courses
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const navigate = useNavigate();
  


  const fetchEnrolledCourses = async () => {
    console.log("Fetching enrolled courses");
    try {
      const enrolledCourses = await userClient.findMyCourses();
      console.log("Enrolled courses fetched:", enrolledCourses);
      const updatedEnrollments = enrolledCourses.map((course: any) => ({
        _id: course._id,
        user: currentUser._id,
        course: course._id,
      }));
      

      // Update Redux state with the new enrollments
      dispatch({ type: "enrollment/setEnrollments", payload: updatedEnrollments });

      const updatedCourses = enrolledCourses.map((course: any) => ({
        ...course,
        isEnrolled: true,
      }));
      setFilteredCourses(updatedCourses);

    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEnrolledCourses();
  }, [currentUser]);

  
  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourse({ _id: "", name: "", number: "", startDate: "", endDate: "", image: "reactjs.jpg", description: "" });
    } catch (error) {
      console.error(error);
    }
  };
  

  // Role checks
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  // Toggle enrollment view
  const enrollmentViewToggle = () => {
    setShowAllCourses(!showAllCourses);
  };

  const isEnrolled = (courseId: string) =>{
    const enrolled = enrollments.some(
      (enrollment: { user: string; course: string }) =>
        enrollment.course === courseId && enrollment.user === currentUser._id
    );
    console.log(`isEnrolled for course ${courseId}: ${enrolled}`);
    return enrolled;
  };

  // Enroll or Unenroll in a course
  const handleEnroll = async (courseId: string) => {
    console.log(`handleEnroll triggered for courseId: ${courseId}`);
    if (isEnrolled(courseId)) {
      await coursesClient.unenroll(courseId, currentUser._id);
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
      fetchEnrolledCourses();
      console.log("Unenrolled");
    } else {
      console.log("User is not enrolled, attempting to enroll");
      await coursesClient.enroll(courseId, currentUser._id);
      console.log("Enroll API call successful");
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
      console.log("Dispatched enroll action");
      fetchEnrolledCourses();
    }
  };

  // Navigate only if the student is enrolled
  const handleNavigate = (courseId: string) => {
    if (enrollments.includes(courseId)) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You must enroll in this course to access it.");
    }
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"   
              onClick={addNewCourse}
              id="wd-add-new-course-click"
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>{" "}
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      {isStudent && (
        <button
          className="btn btn-primary float-end"
          onClick={enrollmentViewToggle}
        >
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </button>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => isFaculty || showAllCourses || isEnrolled(course._id))

            .map((course) => {
              console.log("Rendering course card for:", course._id);
              return (
              <div key={course._id} className="col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  
                    <img
                      src={course.image}
                      alt={course._id}
                      width="100%"
                      height={160}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>

                      

                      {isFaculty && (
                        <>
                          <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary me-2">
                          Go
                          </Link>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                      {isStudent && (
                        <>
                        <button
                          className={`btn ${
                            isEnrolled(course._id)
                              ? "btn-danger"
                              : "btn-success"
                          } float-end me-2`}
                          onClick={(event) => {
                            console.log("Enroll/Unenroll button clicked for course:", course._id);
                            event.preventDefault();
                            handleEnroll(course._id);
                          }}
                        >
                          {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                        </button>
                        {isEnrolled(course._id) && (
                          <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary me-2">
                            Go
                          </Link>
                        )}
                        </>
                      )}
                    </div>
                
                </div>
              </div>
            )})}
          
        </div>
      </div>
    </div>
  );
}
