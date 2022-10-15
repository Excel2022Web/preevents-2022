import { Environment, PerspectiveCamera } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import React from "react";
// import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import * as THREE from "three";
import { Text } from "@react-three/drei";
// import gsap from "gsap";
import { Logo } from "../Three/logo";
import { Bubble } from "../Three/bubble";
// import { useScrollPosition } from "../../hooks/useScrollPosition";
// function Caption({ children }) {

//   return (
//     <Text
//       position={[0, 1, 4.5]}
//       lineHeight={1}
//       font="/LeagueSpartan-Bold.ttf"
//       fontSize={width / 32}
//       material-toneMapped={false}
//       anchorX="center"
//       anchorY="middle"
//     >
//       {children}
//     </Text>
//   );
// }

export default function Header({ setBody }) {
  const { width } = useThree((state) => state.viewport);
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

  // const orbitControlRef = useRef(null);
  // console.log(useScrollPosition());
  // useFrame((state)=>{
  //   if(!!orbitControlRef.current){
  //     const {x,y}  =state.mouse;
  //     orbitControlRef.current.setAzimuthalAngle(-x)
  //     orbitControlRef.current.setPolarAngle(-y)
  //     orbitControlRef.current.update()

  //   }

  // })
  // useEffect(() => {
  //   if (!!orbitControlRef.current) {
  //     // orbitControlRef.current.enableDamping = false;
  //     // orbitControlRef.current.enablePan = false;
  //     // orbitControlRef.current.enableRotate = false;
  //     // orbitControlRef.current.enableZoom = false;
  //     // orbitControlRef.current.enabled = false;
  //     console.log(orbitControlRef.current);
  //   }
  // }, [orbitControlRef.current]);

  const camRef = useRef(null);

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
      {/* <mesh position={[-2, 3, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[1, 50, 50]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} />
      </mesh> */}
      {/* car */}
      <Logo />

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
        position={[0, 0, 4.5]}
        lineHeight={1}
        font="/LeagueSpartan-Bold.ttf"
        fontSize={width / 100}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle"
      >
        Scroll Down
      </Text>
      {/* <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[21, 21]} />
        <meshStandardMaterial color="#217991" />
      </mesh> */}
      <ambientLight args={["#ffffff", 1]} />
      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-2, 5, 4]}
        castShadow
      />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#217994" />
        </mesh>
      </Environment>
    </>
  );
}
