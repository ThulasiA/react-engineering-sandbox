import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

function FloatingText() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={0x61dafb} />

      <Html position={[0, 1, 0]} center distanceFactor={8} occlude>
        <div
          style={{
            backdropFilter: "blur(5px)",
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            whiteSpace: "nowrap",
            fontFamily: "sans-serif",
            fontSize: "14px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <strong style={{ color: "#61dafb" }}>Floating Cube</strong>
        </div>
      </Html>
    </mesh>
  );
}

export default function FloatingCube() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#090d16" }}>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <FloatingText />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
