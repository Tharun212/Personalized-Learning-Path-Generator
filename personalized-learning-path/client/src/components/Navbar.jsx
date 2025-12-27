import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={navOuter}>
      <div style={navInner}>
        <div style={brand}>LearnPath</div>

        <div style={links}>
          <Link to="/" style={link}>
            Home
          </Link>
          <Link to="/dashboard" style={link}>
            Dashboard
          </Link>
          <Link to="/assessment" style={link}>
            Assessment
          </Link>
          <Link to="/roadmap" style={link}>
            Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* ---------- styles ---------- */

const navOuter = {
  width: "100%",
  background: "#0f172a",
  borderBottom: "1px solid #1e293b",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  margin: 0, 
};


const navInner = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "14px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const brand = {
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
};

const links = {
  display: "flex",
  gap: "24px",
};

const link = {
  color: "white",
  textDecoration: "none",
};
