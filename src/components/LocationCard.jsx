import React from 'react';
import GlassCard from './GlassCard';

const LocationCard = () => (
    
  <GlassCard style={{ bottom: "40px", left: "40px", width: "240px" }}>
    <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#666" }}>
      My Location
    </div>
    <div style={{ fontWeight: "bold", fontSize: "16px", marginTop: "5px" }}>
      Vermont Square, Los Angeles
    </div>
    <div style={{ marginTop: "15px", height: "60px", background: "#ddd", borderRadius: "12px", position: "relative" }}>
       {/* Placeholder for map graphic */}
       <div style={{ position: "absolute", top: "50%", left: "50%", width: "10px", height: "10px", background: "#00a86b", borderRadius: "50%", transform: "translate(-50%, -50%)" }} />
    </div>
  </GlassCard>
);

export default LocationCard;