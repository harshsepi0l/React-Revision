import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/list">list</Link>
      <Link to="/api">api</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/counter">Counter</Link>
    </div>
  );
};
