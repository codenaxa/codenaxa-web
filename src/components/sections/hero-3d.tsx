"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    MeshDistortMaterial,
    Sphere,
    MeshWobbleMaterial,
    OrbitControls,
    PerspectiveCamera
} from "@react-three/drei";

function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#6366f1" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#4f46e5" />

            {/* Floating orbital rings */}
            <group rotation={[Math.PI / 4, 0, 0]}>
                <Float speed={3} rotationIntensity={2}>
                    <mesh>
                        <torusGeometry args={[3.2, 0.02, 16, 100]} />
                        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
                    </mesh>
                </Float>
                <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[3.8, 0.01, 16, 100]} />
                        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={1} />
                    </mesh>
                </Float>
            </group>

            {/* Small floating particles */}
            <Float speed={5} rotationIntensity={5}>
                <Sphere args={[0.05]} position={[2, 2, 2]}>
                    <meshStandardMaterial color="#fff" emissive="#fff" />
                </Sphere>
            </Float>
            <Float speed={4} rotationIntensity={4}>
                <Sphere args={[0.08]} position={[-2, -2, -1]}>
                    <meshStandardMaterial color="#6366f1" emissive="#6366f1" />
                </Sphere>
            </Float>
        </>
    );
}

export default function Hero3D() {
    return (
        <div aria-hidden="true" role="presentation" style={{ width: "100%", height: "100%", position: "relative" }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Scene />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
