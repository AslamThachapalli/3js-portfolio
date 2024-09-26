import { Suspense } from 'react'

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    frameloop="demand"
    shadows
    dpr={[1, 2]}
    camera={{ 
      position: [-4, 3, 6], 
      near: 0.1,
      far: 200,
      fov: 45 
    }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas