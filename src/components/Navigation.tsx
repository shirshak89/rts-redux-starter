import { NavLink } from "react-router-dom";

let activeStyle = {
  color: "green",
};

const Navigation = () => {
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>

      <NavLink
        to="about"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        About
      </NavLink>

      <NavLink
        to="admin"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Admin
      </NavLink>
    </>
  );
};

export default Navigation;
