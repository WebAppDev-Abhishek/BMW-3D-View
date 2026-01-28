import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

// Components
import Navbar from "./components/navbar";
import ModeSelector from "./components/ModeSelector";
import AIAssistant from "./components/AIAssistant";
import LocationCard from "./components/LocationCard";
import DateCard from "./components/DateCard";
import PaymentCard from "./components/PaymentCard";
import Sidebar from "./components/Sidebar";
import SupercarList from "./components/SupercarList";

function Model({ name, ...props }) {
  const { scene } = useGLTF(`/${name}.glb`);
  const modelRef = useRef();
  const [isPaused, setIsPaused] = useState(false);

  useFrame((state, delta) => {
    if (modelRef.current && !isPaused) {
      modelRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      {...props} 
      onClick={(e) => {
        e.stopPropagation();
        setIsPaused(!isPaused);
      }}
    />
  );
}

function App() {
  const [currentCar, setCurrentCar] = useState("bmw");

  return (
    <div style={appContainerStyle}>
      <Navbar />
      <Sidebar />
      <ModeSelector />
      
      {/* 1. Hero Text Header */}
      <div style={headerInfoStyle}>
        <div style={accentLineStyle} />
        <div style={textGroupStyle}>
          <div style={badgeStyle}>
            <span style={dotStyle} /> Performance Edition
          </div>
          <h1 style={titleStyle}>
            BMW <span style={{ fontWeight: "300", opacity: 0.8 }}>M4</span>
          </h1>
          <p style={subtitleStyle}>Fully Electric Crossover · 523 HP</p>
          <div style={statsContainerStyle}>
            <div style={miniStatStyle}>
              <span style={statLabelStyle}>0-100</span>
              <span style={statValueStyle}>3.8s</span>
            </div>
            <div style={dividerStyle} />
            <div style={miniStatStyle}>
              <span style={statLabelStyle}>Range</span>
              <span style={statValueStyle}>510km</span>
            </div>
          </div>
        </div>
      </div>

      <AIAssistant />

      <div style={listPositionStyle}>
        <SupercarList onSelectCar={(file) => setCurrentCar(file)} />
      </div>

      {/* 2. Bottom Dashboard Row with Standardized Gaps */}
      <div style={bottomRowStyle}>
        <div style={gridContainerStyle}>
          <LocationCard />
          <DateCard />
          <PaymentCard />
        </div>
      </div>

      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={canvasStyle}>
        <Suspense fallback={null}>
          <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <Stage environment="city" intensity={0.6} shadows={false}>
              <Model name={currentCar} scale={0.01} />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}

// --- App Layout Styles ---

const appContainerStyle = { 
  width: "100vw", 
  height: "100vh",
  position: "relative", 
  backgroundColor: "#f0f0f0", 
  overflow: "hidden",
  fontFamily: "sans-serif"
};

const headerInfoStyle = { 
  position: "absolute", 
  top: "140px", 
  left: "80px", 
  zIndex: 10,
  display: "flex",
  gap: "20px"
};

const accentLineStyle = {
  width: "4px",
  height: "80px",
  background: "linear-gradient(to bottom, #111, transparent)",
  borderRadius: "2px",
  marginTop: "10px"
};

const textGroupStyle = { display: "flex", flexDirection: "column" };
const badgeStyle = { fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#555", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" };
const dotStyle = { width: "6px", height: "6px", background: "#00a86b", borderRadius: "50%" };
const titleStyle = { fontSize: "64px", margin: 0, fontWeight: "900", color: "#111", letterSpacing: "-3px", lineHeight: "0.9" };
const subtitleStyle = { fontSize: "14px", color: "#666", marginTop: "8px", fontWeight: "500" };

const statsContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginTop: "20px",
  padding: "10px 15px",
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  width: "fit-content"
};

const miniStatStyle = { display: "flex", flexDirection: "column" };
const statLabelStyle = { fontSize: "9px", textTransform: "uppercase", color: "#888", fontWeight: "bold" };
const statValueStyle = { fontSize: "16px", fontWeight: "800", color: "#111" };
const dividerStyle = { width: "1px", height: "20px", background: "rgba(0,0,0,0.1)" };

const bottomRowStyle = {
  position: "absolute",
  bottom: "0px",
  left: "0px",
  width: "100%",
  padding: "40px 80px", 
  zIndex: 10,
  pointerEvents: "none" 
};

// --- GRID FIX FOR EQUAL GAPS ---
const gridContainerStyle = {
  display: "grid",
  // Creates 3 columns of exactly equal width
  gridTemplateColumns: "repeat(3, 1fr)", 
  // This ensures the gap is identical between all cards
  gap: "30px", 
  width: "100%",
  pointerEvents: "auto" // Re-enables clicking on the cards
};

const canvasStyle = { position: "absolute", top: 0, left: 0, zIndex: 1 };
const listPositionStyle = { position: "absolute", bottom: "160px", right: "80px", zIndex: 20 };

export default App;