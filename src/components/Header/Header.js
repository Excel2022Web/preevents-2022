import { Environment, PerspectiveCamera } from "@react-three/drei";
import React, { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import * as THREE from "three";
import { Text } from "@react-three/drei";
// import gsap from "gsap";
import { Logo } from "../Three/logo";
import { Bubble } from "../Three/bubble";
import { Mascot } from "../Three/mascot";

export default function Header({ setBody }) {
  const { width } = useThree((state) => state.viewport);
  const dArrowRef = useRef();

  window.addEventListener("mousewheel", (e) => {
    if (!!camRef.current) {
      if (camRef.current.position.z <= 8) {
        camRef.current.position.z -= e.deltaY / 1000;
      } else {
        camRef.current.position.z = 8;
      }
      console.log(camRef.current.position.z);
      if (camRef.current.position.z <= 3.4) {
        setBody(true);
      } else {
        setBody(false);
      }
    }
  });

  const camRef = useRef(null);
  const masRef = useRef();
  // useEffect(() => {
  //   if (!!ballRef.current) {
  //     gsap.to(ballRef.current.position, {
  //       x: 1,
  //       duration: 2,
  //     });
  //   }

  //   gsap.to(ballRef.current.position, {
  //     y: 1,
  //     duration: 1,
  //     ease: "bounce.out",
  //   });
  // }, [ballRef.current]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 8]} ref={camRef} />
      {/* <OrbitControls ref={orbitControlRef} /> */}

      <Logo />
      <Mascot ref={masRef} />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />

      <Text
        position={[0, 1, 4.5]}
        lineHeight={1}
        font="/LeagueSpartan-Bold.ttf"
        fontSize={width / 32}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle"
      >
        EXCEL 2022
      </Text>
      <Text
        ref={dArrowRef}
        rotation={[0, 0, angleToRadians(180)]}
        position={[0, 0.5, 4.5]}
        lineHeight={1}
        font="/LeagueSpartan-Bold.ttf"
        fontSize={width / 50}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle"
      >
        ^
      </Text>
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color="#09375d" />
      </mesh>
      <ambientLight args={["#ffffff", 1]} />
      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-2, 5, 4]}
        castShadow
      />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#09375d" />
        </mesh>
      </Environment>
    </>
  );
}
