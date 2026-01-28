import React from 'react';
import GlassCard from './GlassCard';
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const PaymentCard = () => {
  const darkGray = "#333333";

  return (
    <GlassCard style={containerStyle}>
      <div style={shineOverlayStyle} />

      <div style={headerStyle}>
        <MdOutlineAccountBalanceWallet size={14} color={darkGray} />
        <span style={labelStyle}>Total Price</span>
      </div>

      <div style={priceContainer}>
        <div style={priceValue}>$450.00</div>
        <div style={badgeStyle}>$150/day</div>
      </div>

      <div style={divider} />
      
      <div style={footerText}>Includes Insurance & Tax</div>
    </GlassCard>
  );
};

const containerStyle = {
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  position: "absolute",
  padding: "20px",
  width: "220px",
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)",
  backdropFilter: "blur(2px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const headerStyle = { display: "flex", alignItems: "center", gap: "8px", position: "relative", zIndex: 1 };
const labelStyle = { fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", color: "#555" };
const priceContainer = { display: "flex", alignItems: "flex-end", gap: "10px", marginTop: "10px", position: "relative", zIndex: 1 };
const priceValue = { fontSize: "22px", fontWeight: "800", color: "#111" };
const badgeStyle = { background: "rgba(255,255,255,0.4)", padding: "2px 8px", borderRadius: "8px", fontSize: "10px", fontWeight: "bold", color: "#444", marginBottom: "4px" };
const divider = { height: "1px", background: "rgba(0,0,0,0.05)", margin: "10px 0", position: "relative", zIndex: 1 };
const footerText = { fontSize: "10px", color: "#777", position: "relative", zIndex: 1 };
const shineOverlayStyle = { position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", pointerEvents: "none" };

export default PaymentCard;