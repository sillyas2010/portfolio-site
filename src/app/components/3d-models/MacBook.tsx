/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 macbook.gltf --transform 
Files: macbook.gltf [103.3KB] > macbook.glb [1.57MB] (-1422%)
Author: akshatmittal (https://sketchfab.com/akshatmittal)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-macbook-air-15-space-gray-2023-e8d82e341c794141a2561c2c9d01d79e
Title: Apple MacBook Air 15 (Space Gray) 2023
*/

import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import React from 'react'

export default function MacBook(props: GroupProps) {
  // @ts-expect-error types wrong
  const { nodes, materials } = useGLTF('/3d-models/macbook.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.xVreGKoBGSZYMij.geometry}
        material={materials.dKLyhhkbEyMrqky}
        scale={0.01}
      />
      <mesh
        geometry={nodes.CTBERffHyoCSDBm_0.geometry}
        material={materials.YjmXmicdBWsFQyD}
        scale={0.01}
      />
      <mesh
        geometry={nodes.hczGzWOWpedUDYd_0.geometry}
        material={materials.pEUnNAGXCoAFoUk}
        scale={0.01}
      />
      <mesh
        geometry={nodes.biHEvGDNnTqamRb.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        geometry={nodes.vrIckaCELZpnnNK.geometry}
        material={materials.dkOmcmuFedorUKC}
        scale={0.01}
      />
      <mesh
        geometry={nodes.SadnAkehSlxIwKv.geometry}
        material={materials.VNZklasZKSWjWUk}
        scale={0.01}
      />
      <mesh
        geometry={nodes.OrhpMXCxeprcNok.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        geometry={nodes.NqUinIWcwSlXpvt.geometry}
        material={materials.rvYnnyqXrbFJXxh}
        scale={0.01}
      />
      <mesh
        geometry={nodes.MaufYfIBnxcfRgH.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        geometry={nodes.HrtjMXqDCcINmDE_0.geometry}
        material={materials.BfIgIOaUEgyoEft}
        scale={0.01}
      />
      <mesh
        geometry={nodes.zWqVyCKpTAuZNiu_0.geometry}
        material={materials.zFJMMvikHFjtmzd}
        scale={0.01}
      />
      <mesh
        geometry={nodes.qEJjkxdFZFWJWzR_0.geometry}
        material={materials.JKvAHnqjqlqshmY}
        scale={0.01}
      />
      <mesh
        geometry={nodes.PgbYkhvRdcmMeGL.geometry}
        material={materials.wOIDWopwzKBeTNU}
        scale={0.01}
      />
      <mesh
        geometry={nodes.HHcJitDCPTdgnFk.geometry}
        material={materials.RMDHOHZakhhXXHT}
        scale={0.01}
      />
      <mesh
        geometry={nodes.KgPDMIRPrxAynTV.geometry}
        material={materials.hZBlDyddxAQhuPm}
        scale={0.01}
      />
      <mesh
        geometry={nodes.uSnVzUkbvcGaVtm.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        geometry={nodes.tIZmzvOOHrlOFci.geometry}
        material={materials.oKQWdLrXUCbYByI}
        scale={0.01}
      />
      <mesh
        geometry={nodes.UmfOhraHkqkMHJr.geometry}
        material={materials.OFvWomWIIUgmKKA}
        scale={0.01}
      />
      <mesh
        geometry={nodes.JoRHkRchuIHZFdI.geometry}
        material={materials.mEMAJQfiigHeUXV}
        scale={0.01}
      />
      <mesh
        geometry={nodes.CkZgGMshUOhytMM.geometry}
        material={materials.AvocVUvikCzzMtu}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/3d-models/macbook.glb')
