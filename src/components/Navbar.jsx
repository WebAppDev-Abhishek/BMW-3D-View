import React from "react";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>BEAMER<span style={{ fontWeight: "300" }}>WERKS</span></div>
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
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between", // Pushes Logo to left, Links/Button to their spaces
  alignItems: "center",           // CRITICAL: Centers everything vertically
  padding: "10px 80px",           // Horizontal "gap" for logo/button
  zIndex: 100,
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  color: "white",
  fontFamily: "sans-serif",
  
  // FIX: Ensures padding doesn't make the navbar wider than 100%
  boxSizing: "border-box", 
};

const logoStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  letterSpacing: "2px",
  margin: 0,
};

const linkListStyle = {
  display: "flex",
  gap: "30px",
  listStyle: "none",
  margin: 0, // Removes default UL margin that ruins alignment
  padding: 0,
};

const linkStyle = {
  cursor: "pointer",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  opacity: 0.8,
  fontWeight: "500",
};

const buttonStyle = {
  padding: "8px 22px",
  backgroundColor: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "20px",
  fontWeight: "bold",
  fontSize: "0.75rem",
  cursor: "pointer",
  // Ensure button height doesn't stretch weirdly
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

export default Navbar;