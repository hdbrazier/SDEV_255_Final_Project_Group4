import { useEffect, useMemo, useState } from "react";
import { CourseCtx } from "./course-context";

const LOCAL_KEY = "sb-data-v1";

export default function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [schedule, setSchedule] = useState([]); // array of course ids

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      setCourses(parsed.courses ?? []);
      setSchedule(parsed.schedule ?? []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ courses, schedule }));
  }, [courses, schedule]);

  const addCourse = (course) => {
    const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    const credits = Number(course.credits);
    setCourses((prev) => [...prev, { ...course, id, credits }]);
    return id;
  };
  const editCourse = (id, patch) =>
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  const deleteCourse = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    setSchedule((prev) => prev.filter((cid) => cid !== id));
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
