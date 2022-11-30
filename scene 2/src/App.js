import { OrbitControls, Sky, Stats } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "react-three-fiber";
import { MathUtils } from "three";

function StadiumScene({ position }) {
  const [color, setColor] = useState("blue");
  return (
    <group position={position}>
      <mesh
        onPointerEnter={(e) => setColor("red")}
        onPointerLeave={(e) => setColor("blue")} position={[0, 1, 0]} castShadow>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial color={color} emissive={"black"} />
      </mesh>
    </group>
  );
}

export default function App() {
  //create array of 100 objects {x,y,z}  with random values between 0 and 10
  const objects = Array.from({ length: 1500 }, () => ({
    x: MathUtils.randFloatSpread(100),
    y: MathUtils.randFloatSpread(100),
    z: MathUtils.randFloatSpread(100),
  }));
  return (
    <Canvas
      style={{ position: "fixed", top: "0", left: "0", zIndex: "-1" }}
      shadows camera={{ fov: 45, near: 0.1, far: 1500, "position-y": 15 }}>
      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2 - MathUtils.degToRad(1)}
      />
      <Sky />
      <ambientLight intensity={0.1} />

      <directionalLight
        position={[0, 1550, 2]}
        castShadow
        color={0x602376}
        intensity={1.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={1500}
        shadow-camera-left={-1500}
        shadow-camera-right={1500}
        shadow-camera-top={1500}
        shadow-camera-bottom={-1500}
      />
      {objects.map((props, index) => (
        <StadiumScene key={index} position={[props.x, props.y, props.z]} />
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1500, 0]} castShadow receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color={"white"} emissive={"blue"} />
      </mesh>
      <Stats />
    </Canvas>
  );
}
