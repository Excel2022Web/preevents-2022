import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Bubble(props) {
  const { nodes, materials } = useGLTF("/bubble .gltf");
  const bRef = useRef();
  const offset = (Math.random() - 0.5) / 80 + 0.005;
  const x = (Math.random() - 0.5) * 10;
  const y = (Math.random() - 0.5) * 10;
  const z = (Math.random() - 0.5) * 10;
  useFrame((state) => {
    if (!!bRef.current) {
      bRef.current.position.x += offset;
      bRef.current.position.y += offset;
      bRef.current.position.z += offset;
    }
  });
  return (
    <group {...props} dispose={null} position={[x, y, z]}>
      <mesh
        ref={bRef}
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
        scale={0.5}
      />
    </group>
  );
}

useGLTF.preload("/bubble .gltf");
