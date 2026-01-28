import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import Navbar from "./components/navbar";
import ModeSelector from "./components/ModeSelector";
import AIAssistant from "./components/AIAssistant";
import GlassCard from "./components/GlassCard";

function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
  const modelRef = useRef();
  const [isPaused, setIsPaused] = useState(false);

  useFrame((state, delta) => {
    if (modelRef.current && !isPaused) {
      modelRef.current.rotation.y += delta * 0.5;
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
    <div style={{ width: "100vw", height: "100vh", position: "relative", backgroundColor: "#666666" }}>
      
      {/* Dashboard UI Overlays */}
      <Navbar />
      <ModeSelector />
      
      <div style={{ position: "absolute", top: "120px", left: "60px", zIndex: 10 }}>
        <h1 style={{ fontSize: "48px", margin: 0, fontWeight: "800", color: "#222" }}>BMW M4</h1>
        <p style={{ fontSize: "18px", color: "#666" }}>Fully electric crossover</p>
      </div>

      <AIAssistant />

      <GlassCard style={{ bottom: "40px", left: "40px", width: "240px" }}>
        <span style={{ fontSize: "12px", opacity: 0.6 }}>My Location</span>
        <p style={{ fontWeight: "bold", margin: "5px 0" }}>Vermont Square, LA</p>
      </GlassCard>

      

      {/* 3D Scene */}
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: "absolute", top: 0, left: 0 }}>
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

export default App;