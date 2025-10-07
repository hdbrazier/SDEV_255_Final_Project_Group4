import { useEffect, useMemo, useState } from "react";
import { CourseCtx } from "./course-context";
import * as api from "../api/courses";

const LOCAL_KEY = "sb-data-v1";

export default function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [schedule, setSchedule] = useState([]); // array of course ids

  // useEffect(() => {
  //   const raw = localStorage.getItem(LOCAL_KEY);
  //   if (raw) {
  //     const parsed = JSON.parse(raw);
  //     setCourses(parsed.courses ?? []);
  //     setSchedule(parsed.schedule ?? []);
  //   }
  // }, []);

  useEffect(() => {
    fetchCourses();
  }, [courses, schedule]);

  const fetchCourses = () => api.fetchCourses().then(setCourses);

  const addCourse = (course) => {
    console.log(course);
    api.createCourse(course).then((saved) => setCourses((prev) => [...prev, saved]));
  };
  const editCourse = (id, patch) =>
    api
      .updateCourse(id, patch)
      .then((saved) => setCourses((prev) => prev.map((c) => (c.id === id ? saved : c))));
  const deleteCourse = (id) => {
    api.deleteCourse(id)
    fetchCourses();
  };

  const addToSchedule = (id) =>
    setSchedule((prev) => (prev.includes(id) ? prev : [...prev, id]));
  const dropFromSchedule = (id) =>
    setSchedule((prev) => prev.filter((cid) => cid !== id));

  const availableToAdd = useMemo(
    () => courses.filter((c) => !schedule.includes(c.id)),
    [courses, schedule]
  );
  const scheduledCourses = useMemo(
    () => courses.filter((c) => schedule.includes(c.id)),
    [courses, schedule]
  );

  const value = {
    courses,
    schedule,
    addCourse,
    editCourse,
    deleteCourse,
    addToSchedule,
    dropFromSchedule,
    availableToAdd,
    scheduledCourses,
  };

  return <CourseCtx.Provider value={value}>{children}</CourseCtx.Provider>;
}
