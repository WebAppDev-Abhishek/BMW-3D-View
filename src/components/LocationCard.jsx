import React from 'react';
import GlassCard from './GlassCard';
import { ImLocation } from "react-icons/im";

const LocationCard = () => {
  // Variable is now used below in 'color' props
  const darkGray = "#4A4A4A"; 

  return (
    <GlassCard style={containerStyle}>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(3); opacity: 0; }
          }
        `}
      </style>

      <div style={shineOverlayStyle} />

      {/* FIXED: Applied darkGray to the icon and the text label */}
      <div style={headerStyle}>
        <ImLocation size={12} color={darkGray} />
        <span style={{ ...labelStyle, color: darkGray }}>My Location</span>
      </div>
      
      <div style={addressStyle}>
        Vermont Square, LA
      </div>

      <div style={mapContainerStyle}>
        <div style={mapLineStyle} />
        <div style={{ ...mapLineStyle, top: "25px", width: "100%", transform: "rotate(-8deg)" }} />
        
        <div style={pulseContainer}>
          <div style={pulseCircle} />
          <div style={mapPin} />
        </div>
      </div>
    </GlassCard>
  );
};

// --- Styles ---

const containerStyle = {
  position: "absolute", // Ensure it's positioned relative to the App container
  bottom: "40px",
  left: "120px",
  width: "240px",
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)",
  backdropFilter: "blur(2px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  marginBottom: "4px",
  position: "relative",
  zIndex: 2
};

const labelStyle = {
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "1.2px",
  fontWeight: "700",
};

const addressStyle = {
  fontWeight: "bold", 
  fontSize: "15px", 
  color: "#111", 
  position: "relative",
  zIndex: 2
};

const mapContainerStyle = {
  marginTop: "12px",
  height: "70px",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "12px",
  position: "relative",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};

const mapLineStyle = {
  position: "absolute",
  top: "35px",
  left: "-10%",
  width: "120%",
  height: "1px",
  background: "rgba(0,0,0,0.06)",
  transform: "rotate(12deg)"
};

const pulseContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const mapPin = {
  width: "8px",
  height: "8px",
  background: "#00a86b",
  borderRadius: "50%",
  boxShadow: "0 0 8px rgba(0, 168, 107, 0.6)",
  position: "relative",
  zIndex: 2
};

const pulseCircle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "8px",
  height: "8px",
  background: "#00a86b",
  borderRadius: "50%",
  animation: "pulse 2s infinite ease-out",
  zIndex: 1
};

const shineOverlayStyle = {
  position: "absolute",
  top: "-50%",
  left: "-50%",
  width: "200%",
  height: "200%",
  background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
  pointerEvents: "none",
  zIndex: 1
};

export default LocationCard;