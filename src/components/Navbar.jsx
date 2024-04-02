import { NavLink } from "react-router-dom";

const Navbar = ({ openMenu, containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to="/"
        onClick={openMenu}
        className={({ isActive }) =>
          isActive ? "text-slate-600 " : "hover:text-slate-700 font-medium "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/mens"
        onClick={openMenu}
        className={({ isActive }) =>
          isActive ? "text-slate-600 " : "hover:text-slate-700 font-medium"
        }
      >
        Men's
      </NavLink>
      <NavLink
        to="/womens"
        onClick={openMenu}
        className={({ isActive }) =>
          isActive ? "text-slate-600 " : "hover:text-slate-700 font-medium"
        }
      >
        Women's
      </NavLink>
      <NavLink
        to="/kids"
        onClick={openMenu}
        className={({ isActive }) =>
          isActive ? "text-slate-600 " : "hover:text-slate-700 font-medium"
        }
      >
        Kid's
      </NavLink>
    </nav>
  );
};
export default Navbar;
