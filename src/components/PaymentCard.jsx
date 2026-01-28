import React from 'react';
import GlassCard from './GlassCard';

const PaymentCard = () => {
  return (
    <GlassCard style={{ bottom: "40px", right: "40px", width: "320px", height: "160px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4 style={{ margin: 0, fontSize: "14px", color: "#222" }}>Payment Method</h4>
          <span style={{ fontSize: "11px", opacity: 0.5 }}>Credit Card</span>
        </div>
        {/* iconBtnStyle is now defined below */}
        <button style={iconBtnStyle}>⤢</button>
      </div>

      <div style={paymentEntryStyle}>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <div style={{ fontSize: "24px" }}>💳</div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "bold" }}>Credit Card</div>
            <div style={{ fontSize: "11px", opacity: 0.6 }}>3451 **** **** 7896</div>
          </div>
        </div>
        {/* The green radio-button checkmark from the image */}
        <div style={radioCheckedStyle} />
      </div>
    </GlassCard>
  );
};

// --- Styles defined here to solve ESLint "no-undef" errors ---

const iconBtnStyle = { 
  border: "none", 
  background: "none", 
  cursor: "pointer", 
  opacity: 0.5,
  fontSize: "16px"
};

const paymentEntryStyle = { 
  marginTop: "20px", 
  background: "rgba(255,255,255,0.6)", 
  padding: "15px", 
  borderRadius: "18px", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "space-between",
  border: "1px solid rgba(0,168,107, 0.3)" 
};

const radioCheckedStyle = { 
  width: "12px", 
  height: "12px", 
  borderRadius: "50%", 
  background: "#00a86b", 
  border: "3px solid #fff",
  boxShadow: "0 0 0 1px #00a86b"
};

export default PaymentCard;