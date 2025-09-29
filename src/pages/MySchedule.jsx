
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCourse } from "../state/useCourse";

export default function MySchedule() {
  const { scheduledCourses, availableToAdd, dropFromSchedule, addToSchedule } = useCourse();
  const [pick, setPick] = useState("");

  const onAdd = (e) => {
    e.preventDefault();
    if (!pick) return;
    addToSchedule(pick);
    setPick("");
  };

  const totalCredits = scheduledCourses.reduce((sum, c) => sum + Number(c.credits || 0), 0);

  return (
    <section>
      <h2>My Schedule</h2>

      {!scheduledCourses.length ? (
        <p>No courses in your schedule yet. <Link to="/courses">Browse Courses</Link></p>
      ) : (
        <>
          <ul className="card-list">
            {scheduledCourses.map((c) => (
              <li key={c.id} className="card">
                <h3>{c.subject} — {c.name} <small>({c.credits} cr)</small></h3>
                <p>{c.description}</p>
                <div>
                  <button onClick={() => dropFromSchedule(c.id)}>Drop Course</button>
                </div>
              </li>
            ))}
          </ul>
          <p><strong>Total Credits:</strong> {totalCredits}</p>
        </>
      )}

      <hr style={{ margin: "1.25rem 0" }} />

      <h3>Add Course</h3>
      <form className="form" onSubmit={onAdd} style={{ maxWidth: 480 }}>
        <label>
          Choose from available courses
          <select value={pick} onChange={(e) => setPick(e.target.value)}>
            <option value="">— Select a course —</option>
            {availableToAdd.map((c) => (
              <option key={c.id} value={c.id}>
                {c.subject} — {c.name} ({c.credits} cr)
              </option>
            ))}
          </select>
        </label>
        <div>
          <button type="submit" disabled={!pick}>Add to My Schedule</button>
          <Link to="/courses" className="cta" style={{ marginLeft: ".5rem" }}>Go to Courses</Link>
        </div>
      </form>
    </section>
  );
}
