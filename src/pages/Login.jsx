import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="auth-page">
      <form className="note-form" onSubmit={(event) => event.preventDefault()}>
        <h1>Welcome back</h1>
        <p>Authentication will be connected to the backend in Part 6.</p>

        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>

        <label>
          Password
          <input type="password" placeholder="Your password" required />
        </label>

        <button className="primary-button" type="submit">
          Demo sign in
        </button>

        <p>
          New here? <Link to="/register">Create an account</Link>
        </p>
        <Link to="/">Back to dashboard</Link>
      </form>
    </main>
  );
}