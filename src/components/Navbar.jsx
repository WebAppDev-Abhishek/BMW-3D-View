import React from "react";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>BEAMER<span>WERKS</span></div>
      <ul style={linkListStyle}>
        <li style={linkStyle}>Models</li>
        <li style={linkStyle}>Design</li>
        <li style={linkStyle}>Contact</li>
      </ul>
      <button style={buttonStyle}>Configure</button>
    </nav>
  );
};

// --- Styles ---
const navStyle = {
  position: "fixed", // Keeps it at the top even if you scroll
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 50px",
  zIndex: 100, // Higher than Canvas
  background: "rgba(255, 255, 255, 0.05)", // Glassmorphism effect
  backdropFilter: "blur(10px)", // Blurs the 3D scene behind the bar
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  color: "white",
  fontFamily: "sans-serif",
};

const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  letterSpacing: "2px",
};

const linkListStyle = {
  display: "flex",
  gap: "30px",
  listStyle: "none",
};

const linkStyle = {
  cursor: "pointer",
  textTransform: "uppercase",
  fontSize: "0.8rem",
  opacity: 0.8,
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Navbar;