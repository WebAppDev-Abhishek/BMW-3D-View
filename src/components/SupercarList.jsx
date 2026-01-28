import React, { useState, useEffect } from 'react';
import { SiBmw, SiLamborghini, SiFerrari } from "react-icons/si";
import { GiSpeedometer } from "react-icons/gi";

const SupercarList = ({ onSelectCar }) => {
  const [activeId, setActiveId] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const darkGray = "#333333"; 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cars = [
    { id: 1, name: "M4 Coupe", file: "bmw", brand: "BMW", icon: <SiBmw />, topSpeed: "290 km/h" },
    { id: 2, name: "Revuelto", file: "lamborghini", brand: "Lamborghini", icon: <SiLamborghini />, topSpeed: "350+ km/h" },
    { id: 3, name: "SF90 Stradale", file: "ferrari", brand: "Ferrari", icon: <SiFerrari />, topSpeed: "340 km/h" },
  ];

  return (
    <div style={listContainer(isMobile)}>
      <div style={shineOverlayStyle} />
      
      {!isMobile && <h3 style={{ ...titleStyle, color: darkGray }}>Select Model</h3>}
      
      <div style={scrollArea(isMobile)}>
        {cars.map((car) => (
          <div 
            key={car.id} 
            onClick={() => {
              setActiveId(car.id);
              if (onSelectCar) onSelectCar(car.file);
            }}
            style={{
              ...cardStyle(isMobile),
              background: activeId === car.id ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.1)",
              border: activeId === car.id ? "1px solid rgba(255, 255, 255, 0.6)" : "1px solid rgba(255, 255, 255, 0.15)",
              minWidth: isMobile ? "140px" : "auto"
            }}
          >
            <div style={{ ...iconBox(isMobile), color: darkGray }}>{car.icon}</div>
            
            <div style={infoBox}>
              <div style={carName(isMobile)}>{car.name}</div>
              {!isMobile && (
                <div style={statsRow}>
                  <GiSpeedometer size={12} color={darkGray} />
                  <span style={{ ...statText, color: darkGray }}>{car.brand}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Responsive Logic Styles ---

const listContainer = (isMobile) => ({
  width: isMobile ? "100%" : "260px",
  padding: isMobile ? "10px" : "20px",
  borderRadius: isMobile ? "16px" : "24px",
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
  backdropFilter: "blur(2px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  pointerEvents: "auto",
});

const scrollArea = (isMobile) => ({
  display: "flex",
  flexDirection: isMobile ? "row" : "column",
  gap: "10px",
  overflowX: isMobile ? "auto" : "visible",
  paddingBottom: isMobile ? "5px" : "0",
});

const cardStyle = (isMobile) => ({
  display: "flex",
  alignItems: "center",
  gap: isMobile ? "8px" : "12px",
  padding: isMobile ? "8px 12px" : "12px",
  borderRadius: "14px",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

const iconBox = (isMobile) => ({
  fontSize: isMobile ? "18px" : "22px",
  width: isMobile ? "32px" : "42px",
  height: isMobile ? "32px" : "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "8px"
});

const carName = (isMobile) => ({
  fontWeight: "700",
  fontSize: isMobile ? "12px" : "14px",
  color: "#111",
  whiteSpace: "nowrap"
});

// --- Static Styles ---
const titleStyle = { fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "800", marginBottom: "15px", opacity: 0.6 };
const infoBox = { flex: 1 };
const statsRow = { display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" };
const statText = { fontSize: "10px", fontWeight: "600", textTransform: "uppercase" };
const shineOverlayStyle = { position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", pointerEvents: "none" };

export default SupercarList;