import React, { useState } from 'react';

const ModeSelector = () => {
  const [active, setActive] = useState('Rent');
  const darkGray = "#333333";

  return (
    <div style={containerStyle}>
      {/* Subtle shine overlay for the glass container */}
      <div style={shineOverlayStyle} />

      {['Rent', 'Buy', 'Sell', "Test"].map((opt) => (
        <button
          key={opt}
          onClick={() => setActive(opt)}
          style={{
            ...buttonBaseStyle,
            backgroundColor: active === opt ? "#0F0F0F" : "transparent",
            color: active === opt ? "#fff" : darkGray,
            // Only add glass border to inactive buttons to match AIAssistant badges
            border: active === opt ? "0px solid #000" : "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: active === opt ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

// --- Glassmorphism Styles ---

const containerStyle = {
  position: "absolute",
  top: "70px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "8px",
  padding: "6px",
  zIndex: 20,
  overflow: "hidden",
  borderRadius: "40px",
  // Matching AIAssistant's Ultra-Glass Background
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)",
  backdropFilter: "blur(2px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
};

const buttonBaseStyle = {
  padding: "8px 25px",
  borderRadius: "30px",
  border: "none",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "13px",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1, // Keep text above the shine overlay
};

const shineOverlayStyle = {
  position: "absolute",
  top: "-50%",
  left: "-50%",
  width: "200%",
  height: "200%",
  background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
  pointerEvents: "none",
  zIndex: 0
};

export default ModeSelector;