import React from 'react';
import { HiHome } from "react-icons/hi";
import { RiSteering2Fill } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";

const Sidebar = () => {
  const darkGray = "#333333";

  return (
    <div style={sidebarContainer}>
      {/* Shine reflection */}
      <div style={shineOverlayStyle} />

      <div style={iconGroup}>
        <div style={iconWrapper} title="Dashboard">
          <HiHome size={22} color={darkGray} />
        </div>
        <div style={iconWrapper} title="Drive Mode">
          <RiSteering2Fill size={22} color={darkGray} />
        </div>
        <div style={iconWrapper} title="Vehicle Stats">
          <IoMdStats size={22} color={darkGray} />
        </div>
      </div>
    </div>
  );
};

// --- Styles ---

const sidebarContainer = {
  position: "absolute",
  left: "20px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "60px",
  padding: "20px 0",
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 100,
  // Ultra-Glass Theme
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)",
  backdropFilter: "blur(2px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden"
};

const iconGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  position: "relative",
  zIndex: 2
};

const iconWrapper = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  background: "rgba(255, 255, 255, 0.1)",
};

const shineOverlayStyle = {
  position: "absolute",
  top: "-50%",
  left: "-50%",
  width: "200%",
  height: "200%",
  background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
  pointerEvents: "none",
};

export default Sidebar;