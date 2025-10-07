import { Link } from "react-router-dom";

export default function Home() {
    return (
      <section>
        <h1>Welcome to Schedule Builder</h1>
        <p>
          Use the navigation above to view courses or add
          a new course. Separate this into student/teacher in Stage 2.
        </p>
        <Link className="cta" to="/courses">Browse Courses</Link>
      </section>
    );
  }
  