import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import AddCourse from "./pages/AddCourse";
import MySchedule from "./pages/MySchedule";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import EditCourse from "./pages/EditCourse";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/new" element={<AddCourse />} />
          <Route path="/schedule" element={<MySchedule />} />
          <Route path="/courses/:id/edit" element={<EditCourse />}></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
