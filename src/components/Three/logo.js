import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Logo(props) {
  useFrame((state) => {
    if (!!group.current) {
      group.current.rotation.y += 0.01;
    }
  });
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/excellogo.gltf");
  // const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position={[0, 4.5, 4]}>
      <group name="Scene">
        <mesh
          name="excel2022"
          castShadow
          receiveShadow
          geometry={nodes.excel2022.geometry}
          material={materials["Material.012"]}
          position={[0, -3.33, 0]}
          scale={0.46}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/excellogo.gltf");
