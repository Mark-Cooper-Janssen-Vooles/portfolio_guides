import React, { useRef, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'

const Lights = () => {
  return (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <directionalLight position={[0, 10, 0]} intensity={1.5} />
    <spotLight intensity={1} position={[1000, 0, 0]} />
  </>
  )
}

const Model = () => {
  const gltf = useGLTF('/scene.gltf', true)
  return <primitive object={gltf.scene} dispose={null} />
}

const RenderedObject = () => {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.y += 0.001
  })

  return <mesh ref={ref} position={[0, -63, 0]}>
    <Model />
  </mesh>
}

const AnimationArea = () => {
  return (
  <Canvas
    colorManagement
    camera={{position:[0, 0, 150], fov: 70}}
  >
    <Lights />
    <Suspense fallback={null}>
      <RenderedObject />
    
    </Suspense>
  </Canvas>
  )
}

export default AnimationArea;

