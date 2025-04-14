
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#7E69AB"
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  )
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 1.5]} // Lower resolution for better performance
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <React.Suspense fallback={null}>
          <AnimatedSphere />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate
            autoRotateSpeed={0.5}
          />
        </React.Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeBackground
