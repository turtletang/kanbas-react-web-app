import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import * as db from "./Database";
import Session from "./Account/Session";

import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";

import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Courses", number: "New Number", startDate: "2024-1-1", endDate: "2024-12-31", image: "reactjs.jpg", description: "New Description", enrolled: false
  });

  const findCoursesForUser = async () => {
    try {
      console.log("currentUser:", currentUser); // Log currentUser to debug
      if (!currentUser || !currentUser._id) throw new Error("Invalid user ID");
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error("Error fetching courses for user:", error);
    }
  };

  
  const fetchCourses = async () => {
    try {
      console.log("Fetching all courses...");
      const allCourses = await courseClient.fetchAllCourses();
      console.log("All courses fetched:", allCourses);

      if (!currentUser || !currentUser._id) throw new Error("Invalid user ID");
      console.log("Fetching enrolled courses for user:", currentUser._id);
      const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
      
      const filteredEnrolledCourses = enrolledCourses.filter((course: any) => course !== null);
      console.log("Enrolled courses fetched:", enrolledCourses);

      const courses = allCourses.map((course: any) => {
        if (filteredEnrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (currentUser && currentUser._id) {
      if (enrolled) {
        await userClient.enrollIntoCourse(currentUser._id, courseId);
      } else {
        await userClient.unenrollFromCourse(currentUser._id, courseId);
      }
      // Refresh the courses list after enrollment update
      findCoursesForUser();
    } else {
      console.error("currentUser is null or _id is undefined");
    }
  };

  

  const addNewCourse = async () => {
    try {
      const newCourse = await courseClient.createCourse(course);
      console.log("New course added:", newCourse); // debug
      setCourses([...courses, ...newCourse]);
    } catch (error) {
      console.error("Error adding new course:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas">
          <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route
                path="/Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                      enrolling={enrolling}
                      setEnrolling={setEnrolling}
                      updateEnrollment={updateEnrollment}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/Courses/:cid/*"
                element={
                  <ProtectedRoute>
                    <Courses courses={courses} />
                  </ProtectedRoute>
                }
              />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
              <Route path="/Labs" element={<h1>Labs</h1>} />
            </Routes>
          </div>
        </div>
      </Session>
    </Provider>
  );
}
