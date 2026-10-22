import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="auth-page">
      <form className="note-form" onSubmit={(event) => event.preventDefault()}>
        <h1>Create your account</h1>
        <p>We'll connect registration to Express and MongoDB later.</p>

        <label>
          Name
          <input type="text" placeholder="Your name" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>

        <label>
          Password
          <input type="password" placeholder="Choose a password" required />
        </label>

        <button className="primary-button" type="submit">
          Demo register
        </button>

        <p>
          Already registered? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </main>
  );
}