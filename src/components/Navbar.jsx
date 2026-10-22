import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-pink-200 border-b border-pink-150 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold tracking-wide text-black">
        Devshelf 
      </Link>
      <div className="flex items-center gap-4 text-sm font-medium">
        <Link to="/" className="hover:text-white transition text-black">Dashboard</Link>
        <Link to="/login" className="hover:text-white transition text-black">Login</Link>
        <Link to="/register" className="bg-black hover:bg-white px-4 py-2 rounded-lg transition text-white  hover:text-black shadow-md">
          Register
        </Link>
      </div>
    </nav>
  );
}