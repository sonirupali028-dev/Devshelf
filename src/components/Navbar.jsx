import { BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ search, setSearch }) {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <BookOpen size={24} />
        <span>DevShelf</span>
      </Link>

      <label className="search-box">
        <Search size={18} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search your knowledge..."
        />
      </label>

      <Link to="/login" className="text-link">
        Sign in
      </Link>
    </header>
  );
}