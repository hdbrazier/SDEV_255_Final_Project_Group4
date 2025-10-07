import { useNavigate } from "react-router-dom";
import { useCourse } from "../state/useCourse";
import { useEffect } from "react";
import { useState } from "react";

export default function EditCourse() {
    
    const { courses, editCourse } = useCourse();
    const [form, setForm] = useState({});
    const [course, setCourse] = useState({});
    const nav = useNavigate();
    useEffect(() => {
        const id = window.location.hash.split("/")[2];
        const foundCourse = courses.find((c) => c._id == id);
        setCourse(foundCourse);
        setForm({...foundCourse});
    }, [courses]);


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
        editCourse(course?._id, form);
        nav("/courses"); // go to Courses list after adding
    };

    return (
        <section>
            <h2>Edit Course</h2>
            <form className="form" onSubmit={onSubmit}>
                <label>
                    Subject
                    <input type="text" name="subject" value={form.subject} onChange={onChange} />
                </label>
                <label>
                    Course
                    <input type="text" name="course" value={form.course} onChange={onChange} />
                </label>
                <label>
                    Description
                    <input type="text" name="description" value={form.description} onChange={onChange} />
                </label>
                <label>
                    Credits
                    <input type="number" name="credits" min={1} max={6} value={form.credits} onChange={onChange} />
                </label>
                <button type="submit">Save</button>
            </form>
        </section>
    );
}