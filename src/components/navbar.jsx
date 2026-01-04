import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <nav className="bg-yellow-950 text-white shadow-md">
      <div className="flex justify-between items-center py-2 px-4 md:px-9">

        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="/logo.jpeg"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
        </Link>

        {/* Links */}
        <ul className="flex gap-8">
          <li>
            <Link
              to="/"
              className="hover:font-bold transition-all"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/Your_todos"
              className="hover:font-bold transition-all"
            >
              Your Tasks
            </Link>
          </li>

          <li>
            <Link
              to="/contact_us"
              className="hover:font-bold transition-all"
            >
              Contact Us
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
