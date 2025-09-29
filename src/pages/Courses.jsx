import { useCourse } from "../state/useCourse";

export default function Courses() {
  const { courses, schedule, addToSchedule } = useCourse();

  return (
    <section>
      <h2>All Courses</h2>
      {!courses.length && <p>No courses yet. Add one from the “Add Course” page.</p>}
      <ul className="card-list">
        {courses.map((c) => {
          const inSchedule = schedule.includes(c.id);
          return (
            <li key={c.id} className="card">
              <h3>{c.subject} — {c.name} <small>({c.credits} cr)</small></h3>
              <p>{c.description}</p>
              <div>
                <button disabled={inSchedule} onClick={() => addToSchedule(c.id)}>
                  {inSchedule ? "Already in My Schedule" : "Add to My Schedule"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
