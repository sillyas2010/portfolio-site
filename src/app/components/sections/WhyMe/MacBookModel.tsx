import MacBook from '@/app/components/3d-models/MacBook'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

export default function MacBookModel() {
  return (
    <Canvas>
      <Stage
        adjustCamera={1.4}
        preset="rembrandt"
        intensity={1}
        environment="city"
      >
        <MacBook />
      </Stage>
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
