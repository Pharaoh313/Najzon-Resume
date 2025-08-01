import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
}

function Particles({ count = 2000 }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * 10;
      temp[i3 + 1] = (Math.random() - 0.5) * 10;
      temp[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

// CSS-only fallback component
function CSSParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({ className = "" }: ParticleBackgroundProps) {
  const [useCSS, setUseCSS] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        console.log('WebGL not supported, using CSS fallback');
        setUseCSS(true);
      }
    } catch (error) {
      console.log('Error checking WebGL support, using CSS fallback');
      setUseCSS(true);
    }
  }, []);

  // Error boundary for Three.js
  if (hasError || useCSS) {
    return <CSSParticleBackground />;
  }

  try {
    return (
      <div className={`fixed inset-0 -z-10 ${className}`}>
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{ background: 'transparent' }}
          onError={(error) => {
            console.error('Three.js Canvas error:', error);
            setHasError(true);
          }}
          fallback={<CSSParticleBackground />}
        >
          <Particles />
        </Canvas>
      </div>
    );
  } catch (error) {
    console.error('ParticleBackground error:', error);
    return <CSSParticleBackground />;
  }
}