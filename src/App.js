import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTexture } from '@react-three/drei'

function ImagePlane({ position, clicked }) {
  const meshRef = useRef()

  // Load the texture
  const texture = useTexture('/one.png')

  return (
    <mesh ref={meshRef} position={position} scale={clicked ? [1.5, 1.5, 1.5] : [1, 1, 1]} rotation={[0, 0, 0]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export default function App() {
  const [clicked, setClicked] = useState(false)

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <ImagePlane position={[-1.2, 0, 0]} clicked={clicked} />
      <OrbitControls />
    </Canvas>
  )
}
