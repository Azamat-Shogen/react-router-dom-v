import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const navlinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal"
    };
  };

  const auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink style={navlinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navlinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navlinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navlinkStyles} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navlinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
