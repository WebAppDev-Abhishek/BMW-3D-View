import React from 'react';
import GlassCard from './GlassCard';

const AIAssistant = () => {
  const badgeStyle = { background: "rgba(255,255,255,0.6)", padding: "12px", borderRadius: "14px", fontSize: "11px", fontWeight: "600", textAlign: "center" };

  return (
    <GlassCard style={{ top: "100px", right: "40px", width: "320px" }}>
      <h4 style={{ margin: 0 }}>AI Assistant</h4>
      <p style={{ fontSize: "12px", opacity: 0.6, marginTop: "4px" }}>How can I help you?</p>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "15px" }}>
        <div style={badgeStyle}>📅 Book a rent</div>
        <div style={badgeStyle}>📊 Analysis</div>
        <div style={badgeStyle}>🛡️ Insurance</div>
        <div style={badgeStyle}>💳 Payment</div>
      </div>

      <div style={{ marginTop: "20px", display: "flex", background: "#fff", borderRadius: "12px", padding: "5px" }}>
        <input placeholder="Arrange to rent..." style={{ flex: 1, border: "none", padding: "10px", outline: "none" }} />
        <button style={{ background: "#00a86b", color: "#fff", border: "none", borderRadius: "8px", padding: "0 15px", fontWeight: "bold", cursor: "pointer" }}>Send</button>
      </div>
    </GlassCard>
  );
};

export default AIAssistant;