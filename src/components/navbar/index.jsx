import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle =
    "text-lg font-light hover:text-[#5f5da6] transition";

  const activeStyle = "text-[#5f5da6]";

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-[#262626] shadow-sm">

      <div className="flex justify-between items-center h-20 px-6 md:px-12">

        {/* Logo */}
        <Link to="/">
          <h2 className="text-xl font-normal hover:text-[#8E37F0] transition">
            Giovana
          </h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">


          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Projects
          </NavLink>

      
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <HiMenu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 bg-white dark:bg-[#262626]">

          <NavLink to="/skills" onClick={() => setOpen(false)} className={linkStyle}>
            Skills
          </NavLink>

          <NavLink to="/projects" onClick={() => setOpen(false)} className={linkStyle}>
            Projects
          </NavLink>

        </div>
      )}
    </header>
  );
}

export default Navbar;