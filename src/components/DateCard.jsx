import React from 'react';
import GlassCard from './GlassCard';

const DateCard = () => (
  <GlassCard style={{ bottom: "40px", left: "300px", width: "300px", height: "160px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <h4 style={{ margin: 0, fontSize: "14px" }}>My Dates</h4>
        <span style={{ fontSize: "11px", opacity: 0.5 }}>20th of July · 10:25 AM</span>
      </div>
      <button style={iconBtnStyle}>⤢</button>
    </div>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginTop: "20px" }}>
      <div style={dateBoxStyle}>
        <span style={{ fontSize: "12px", color: "#00a86b" }}>◀</span>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>20</div>
          <div style={{ fontSize: "12px", opacity: 0.6 }}>Jul</div>
        </div>
        <span style={{ fontSize: "12px", color: "#00a86b" }}>▶</span>
      </div>
      
      <div style={{ height: "40px", width: "1px", background: "rgba(0,0,0,0.1)" }} />

      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "28px", fontWeight: "bold" }}>10:25</div>
        <div style={{ fontSize: "12px", opacity: 0.6 }}>AM</div>
      </div>
    </div>
  </GlassCard>
);

const dateBoxStyle = { display: "flex", alignItems: "center", gap: "15px", background: "rgba(255,255,255,0.4)", padding: "10px 20px", borderRadius: "15px" };
const iconBtnStyle = { border: "none", background: "none", cursor: "pointer", opacity: 0.5 };

export default DateCard;