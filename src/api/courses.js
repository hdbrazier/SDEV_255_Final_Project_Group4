const API_URL = 'http://localhost:8080';

export default function courses() {
    return fetchCourses();
}

export async function fetchCourses() {
    const response = await fetch(`${API_URL}/courses`);
    const data = await response.json();
    return data;
}

export async function fetchCourse(id) {
    const response = await fetch(`${API_URL}/courses/${id}`);
    const data = await response.json();
    return data;
}

export async function createCourse(course) {
    const response = await fetch(`${API_URL}/courses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    });
    const data = await response.json();
    return data;
}

export async function updateCourse(id, course) {
    const response = await fetch(`${API_URL}/courses/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    });
    const data = await response.json();
    return data;
}

export async function deleteCourse(id) {
    const response = await fetch(`${API_URL}/courses/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}