import React, { useState } from 'react';

const ModeSelector = () => {
  const [active, setActive] = useState('Rent');
  return (
    <div style={{
      position: "absolute",
      top: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "5px",
      padding: "5px",
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(10px)",
      borderRadius: "30px",
      zIndex: 20
    }}>
      {['Rent', 'Buy', 'Sell'].map((opt) => (
        <button
          key={opt}
          onClick={() => setActive(opt)}
          style={{
            padding: "8px 25px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            background: active === opt ? "#fff" : "transparent",
            transition: "0.3s"
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default ModeSelector;