import React from 'react';
import GlassCard from './GlassCard';
import { MdCalendarToday, MdArrowForward } from "react-icons/md";

const DateCard = () => {
  const darkGray = "#333333";

  return (
    <GlassCard style={containerStyle}>
      <div style={shineOverlayStyle} />
      
      <div style={headerStyle}>
        <MdCalendarToday size={14} color={darkGray} />
        <span style={labelStyle}>Rental Period</span>
      </div>

      <div style={dateRowStyle}>
        <div style={dateBlock}>
          <span style={subLabel}>From</span>
          <div style={dateValue}>Oct 12</div>
        </div>
        
        <MdArrowForward size={18} color="rgba(0,0,0,0.2)" />

        <div style={dateBlock}>
          <span style={subLabel}>To</span>
          <div style={dateValue}>Oct 15</div>
        </div>
      </div>
    </GlassCard>
  );
};

// Styles to match the theme
const containerStyle = {
  bottom: "40px",
  left: "380px", // Positioned next to LocationCard
  width: "220px",
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)",
  backdropFilter: "blur(25px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const headerStyle = { display: "flex", alignItems: "center", gap: "8px", position: "relative", zIndex: 1 };
const labelStyle = { fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", color: "#555" };
const dateRowStyle = { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "12px", position: "relative", zIndex: 1 };
const dateBlock = { display: "flex", flexDirection: "column" };
const subLabel = { fontSize: "9px", color: "#666", textTransform: "uppercase" };
const dateValue = { fontSize: "18px", fontWeight: "800", color: "#111" };
const shineOverlayStyle = { position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", pointerEvents: "none" };

export default DateCard;