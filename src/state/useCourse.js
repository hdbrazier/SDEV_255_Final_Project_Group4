import { useContext } from "react";
import { CourseCtx } from "./course-context";

export function useCourse() {
  return useContext(CourseCtx);
}

export default useCourse;
