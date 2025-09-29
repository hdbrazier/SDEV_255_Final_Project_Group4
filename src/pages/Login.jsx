export default function Login() {
    return (
      <section>
        <h2>Login</h2>
        <p>In Stage 2 we’ll implement real auth and role-based access later.</p>
        <form className="form">
          <label>
            Email
            <input type="email" placeholder="you@example.edu" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </section>
    );
  }
  