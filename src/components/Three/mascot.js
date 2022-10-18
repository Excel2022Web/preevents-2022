import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";
export function Mascot(props) {
  const { nodes, materials } = useGLTF("/mascotModel.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-3.4, 0.8, 2]}
        scale={1}
        rotation={[0, -angleToRadians(90), 0]}
        receiveShadow
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["clay white"]}
          position={[-0.06, -0.72, -0.05]}
          scale={0.45}
        >
          <group
            position={[-0.3, 1.97, 0.19]}
            rotation={[0.26, 0, 0]}
            scale={1.13}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_1.geometry}
              material={materials.face}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_2.geometry}
              material={materials["clay white"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_3.geometry}
              material={materials.Sides}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve.geometry}
              material={materials["eye emission"]}
              position={[0.68, -0.12, 0.19]}
              rotation={[1.7, 0, -Math.PI / 2]}
              scale={0.25}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve001.geometry}
              material={materials["eye emission"]}
              position={[0.68, -0.13, -0.27]}
              rotation={[1.7, 0, -Math.PI / 2]}
              scale={0.25}
            />
            <group
              position={[-0.07, 0.8, -0.9]}
              rotation={[-0.41, -0.88, 0.29]}
              scale={1.61}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_1.geometry}
                material={materials["clay white"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_2.geometry}
                material={materials["Clay green"]}
              />
            </group>
            <group
              position={[-0.07, 0.79, 0.88]}
              rotation={[1.08, -0.88, 0.29]}
              scale={1.61}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={materials["clay white"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002_1.geometry}
                material={materials["Clay green"]}
              />
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[0, 1.35, -1.38]}
            rotation={[-0.82, 0.98, 0]}
            scale={[1.35, 3.77, 1.35]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={nodes.Cube003.material}
            position={[0, 0.46, 1.37]}
            rotation={[-0.96, 0.86, Math.PI]}
            scale={[1.35, 3.77, 1.35]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials["Clay green"]}
            position={[0.45, 1.16, 0.03]}
            scale={[0.84, 1.17, 0.73]}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/mascotModel.glb");
