export default function SignUp() {
    return (
      <section>
        <h2>Sign Up</h2>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.edu" required />
          </label>
          <label>
            Password
            <input type="password" name="password" required />
          </label>
          <label>
            Role
            <select name="role" defaultValue="student" required>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </label>
          <button type="submit">Create Account</button>
        </form>
        <p>
          (Stage 2 - link to backend and store roles for authorization.)
        </p>
      </section>
    );
  }
  