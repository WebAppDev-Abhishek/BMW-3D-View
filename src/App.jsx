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

function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
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
  return (
    <div style={appContainerStyle}>
      
      {/* 1. Top Navigation & Global UI */}
      <Navbar />
      <ModeSelector />
      
      {/* 2. Hero Text Header */}
      <div style={headerInfoStyle}>
        <h1 style={titleStyle}>BMW M4</h1>
        <p style={subtitleStyle}>Performance & Electric Luxury</p>
      </div>

      {/* 3. Right Sidebar AI Panel */}
      <AIAssistant />

      {/* 4. Bottom Dashboard Row */}
      <div style={bottomRowStyle}>
        <LocationCard />
        <DateCard />
        <PaymentCard />
      </div>

      {/* 5. 3D Scene Background */}
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={canvasStyle}>
        <Suspense fallback={null}>
          <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <Stage environment="city" intensity={0.6} shadows={false}>
              <Model scale={0.01} />
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
  backgroundColor: "#E5E5E5", // Lighter background makes glass pop more
  overflow: "hidden",
  fontFamily: "sans-serif"
};

const headerInfoStyle = { 
  position: "absolute", 
  top: "120px", 
  left: "80px", // Aligned with the Navbar padding
  zIndex: 10 
};

const titleStyle = { 
  fontSize: "56px", 
  margin: 0, 
  fontWeight: "900", 
  color: "#111",
  letterSpacing: "-2px"
};

const subtitleStyle = { 
  fontSize: "18px", 
  color: "#444", 
  marginTop: "5px",
  fontWeight: "500" 
};

const bottomRowStyle = {
  position: "absolute",
  bottom: "0px",
  left: "0px",
  width: "100%",
  display: "flex",
  gap: "20px",
  padding: "40px 80px", // Matches Navbar horizontal gap
  zIndex: 10,
  pointerEvents: "none" // Allows clicking the car through the gaps
};

const canvasStyle = { 
  position: "absolute", 
  top: 0, 
  left: 0,
  zIndex: 1 
};

export default App;