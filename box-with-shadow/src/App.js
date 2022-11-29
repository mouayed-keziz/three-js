import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { DoubleSide, Plane } from "three";

function MainScene() {
  return (
    <Canvas
      colorManagement
      shadowMap
      style={{ height: "100vh" }}
    >
      <fog attach="fog" args={["white", 0, 40]} />
      <ambientLight intensity={0.2} />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <pointLight position={[10, 10, 10]} castShadow />
      <Box position={[0, 0, 0]} />
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[1000, 1000]}
      >
        <meshStandardMaterial attach="material" color="white" />
      </Plane>
    </Canvas>
  );
}

export default MainScene;



function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    (mesh.current.rotation.x += 0.01);
    (mesh.current.rotation.y += 0.01);
    (mesh.current.rotation.z += 0.01);
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      castShadow
      receiveShadow
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'blue'} />
    </mesh>
  )
}

