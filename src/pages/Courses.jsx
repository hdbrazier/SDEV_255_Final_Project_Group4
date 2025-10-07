import { useCourse } from "../state/useCourse";
import { Link } from "react-router-dom";

export default function Courses() {
  const { courses, schedule, addToSchedule, deleteCourse } = useCourse();
  return (
    <section>
      <h2>All Courses</h2>
      {!courses.length && <p>No courses yet. Add one from the “Add Course” page.</p>}
      <ul className="card-list">
        {courses.map((c) => {
          const inSchedule = schedule.includes(c.id);
          return (
            <li key={c._id} className="card">
              <span>
                <h3>{c.subject} — {c.name} <small>({c.credits} cr)</small></h3>
              </span>
              <p>{c.description}</p>
              <div>
                <button disabled={inSchedule} onClick={() => addToSchedule(c._id)}>
                  {inSchedule ? "Already in My Schedule" : "Add to My Schedule"}
                </button>
                <Link style={{ marginLeft: ".5rem" }} to={`/courses/${c._id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button style={{ marginLeft: ".5rem" }} onClick={() => deleteCourse(c._id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
