import { createSlice } from "@reduxjs/toolkit";
import { courses as initialCourses, enrollments as initialEnrollments } from "./Database";

const initialState = {
  courses: initialCourses,
  enrollments: initialEnrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments.push({ _id: new Date().getTime().toString(), user: userId, course: courseId });
    },
    unenrollCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        enrollment => enrollment.user !== userId || enrollment.course !== courseId
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
