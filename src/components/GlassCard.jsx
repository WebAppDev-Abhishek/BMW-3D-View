import React from 'react';

const GlassCard = ({ children, style }) => (
  <div style={{
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
    position: "absolute",
    zIndex: 10,
    fontFamily: "sans-serif",
    ...style
  }}>
    {children}
  </div>
);

export default GlassCard;