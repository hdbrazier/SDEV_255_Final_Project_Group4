import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav__brand">
        <Link to="/" className="nav__brand-link" aria-label="Go to homepage">
          <img src={logo} alt="Schedule Builder logo" className="nav__logo" />
        </Link>
      </div>

      <nav className="nav__links" aria-label="Primary">
        <NavLink to="/" end className="nav__link">Home</NavLink>
        <NavLink to="/courses" className="nav__link">Courses</NavLink>
        <NavLink to="/courses/new" className="nav__link">Add Course</NavLink>
        <NavLink to="/schedule" className="nav__link">My Schedule</NavLink>
        <NavLink to="/signup" className="nav__link">Sign Up</NavLink>
        <NavLink to="/login" className="nav__link">Login</NavLink>
      </nav>
    </header>
  );
}
