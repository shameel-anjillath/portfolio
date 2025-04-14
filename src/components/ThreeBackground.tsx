
import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  // Using useMemo for the material to prevent unnecessary recreations
  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#7E69AB',
      roughness: 0.5,
      metalness: 0.1,
    })
  }, [])

  return (
    <>
      {/* Simple sphere with standard material instead of distort material */}
      <Sphere args={[1, 32, 32]} scale={2.2}>
        <primitive object={material} attach="material" />
      </Sphere>
    </>
  )
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        dpr={[1, 2]} // Responsive resolution
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <React.Suspense fallback={null}>
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} />
        </React.Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeBackground
