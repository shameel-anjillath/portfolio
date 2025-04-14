
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.2}>
      <MeshDistortMaterial
        color="#7E69AB"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.5}
      />
    </Sphere>
  )
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}

export default ThreeBackground
