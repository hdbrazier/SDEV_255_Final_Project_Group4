import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCourse } from "../state/useCourse";

export default function AddCourse() {
  const { addCourse } = useCourse();
  const nav = useNavigate();
  const [form, setForm] = useState({
    subject: "",
    course: "",
    description: "",
    credits: 3,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === "credits" ? Number(value) : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.subject || !form.course || !form.description || !form.credits) {
      alert("All fields are required.");
      return;
    };
    addCourse(form);
    nav("/courses"); // go to Courses list after adding
  };

  return (
    <section>
      <h2>Add a New Course</h2>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Subject
          <input name="subject" value={form.subject} onChange={onChange} placeholder="e.g., SDEV" required />
        </label>
        <label>
          Course
          <input name="course" value={form.course} onChange={onChange} placeholder="e.g., Website Development" required />
        </label>
        <label>
          Description
          <textarea name="description" value={form.description} onChange={onChange} placeholder="Brief overview…" required />
        </label>
        <label>
          Credits
          <input type="number" name="credits" min="1" max="6" value={form.credits} onChange={onChange} required />
        </label>
        <button type="submit">Save Course</button>
      </form>
    </section>
  );
}
