import React from 'react';
import GlassCard from './GlassCard';
import { IoMdSettings } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";

const AIAssistant = () => {
  const darkGray = "#333333";

  // Reflection style for the small buttons
  const badgeStyle = { 
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)", 
    padding: "12px", 
    borderRadius: "14px", 
    fontSize: "11px", 
    fontWeight: "600", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: darkGray,
    border: "1px solid rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(8px)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)"
  };

  return (
    <GlassCard style={{ 
      top: "100px", 
      right: "40px", 
      width: "320px",
      // THE REFLECTION: A gradient from bright top-left to transparent bottom-right
      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)",
      backdropFilter: "blur(2px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      overflow: "hidden"
    }}>
      {/* Subtle shine overlay */}
      <div style={shineOverlayStyle} />

      <h4 style={{ margin: 0, color: "#111", position: "relative" }}>AI Assistant</h4>
      <p style={{ fontSize: "12px", opacity: 0.7, marginTop: "4px", color: darkGray, position: "relative" }}>
        How can I help you?
      </p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: "10px", 
        marginTop: "15px",
        position: "relative"
      }}>
        <div style={badgeStyle} className="glass-btn">
          <IoMdSettings size={14} color={darkGray} /> Book a rent
        </div>
        <div style={badgeStyle} className="glass-btn">
          <BiSolidReport size={14} color={darkGray} /> Analysis
        </div>
        <div style={badgeStyle} className="glass-btn">
          <FaHeart size={14} color={darkGray} /> Favorite
        </div>
        <div style={badgeStyle} className="glass-btn">
          <MdOutlinePayment size={14} color={darkGray} /> Payment
        </div>
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "8px", position: "relative" }}>
        <input 
          placeholder="Arrange to rent..." 
          style={inputGlassStyle} 
        />
        <button style={sendButtonStyle}>
          Send
        </button>
      </div>
    </GlassCard>
  );
};

// --- Additional Glass Reflection Styles ---

const shineOverlayStyle = {
  position: "absolute",
  top: "-50%",
  left: "-50%",
  width: "200%",
  height: "200%",
  background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
  pointerEvents: "none",
  zIndex: 0
};

const inputGlassStyle = {
  flex: 1, 
  borderRadius: "12px", 
  padding: "12px", 
  outline: "none",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  background: "rgba(255, 255, 255, 0.1)",
  color: "#333",
  backdropFilter: "blur(10px)",
  fontSize: "13px"
};

const sendButtonStyle = { 
  background: "#111", 
  color: "#fff", 
  border: "none", 
  borderRadius: "10px", 
  padding: "0 18px", 
  fontWeight: "600", 
  cursor: "pointer",
  transition: "transform 0.2s ease"
};

export default AIAssistant;