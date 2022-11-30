import { Canvas, useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import RotatingBox from './components/RotatingBox';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Plane from './components/Plane';
import Sphere from './components/Sphere';

function MainScene() {
  return (
    <Canvas shadows style={{ height: "100vh" }}>
      <CameraController />
      <fog attach="fog" args={["white", 0, 40]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 0]} castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      // 2048 for the shadow resolution
      />
      <RotatingBox position={[0, 1, 0]} />
      <Sphere position={[4, 1, 4]} />
      <Plane position={[0, -0.5, 0]} />
    </Canvas>
  );
}

export default MainScene;





const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};