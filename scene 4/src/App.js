import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree } from '@react-three/fiber'
import { useEffect } from 'react'


/*
methode 1:
    use the GLTFLoader to load the model then use the Scene component
methode 2:
      go to this website 'https://gltf.pmnd.rs/' and upload the model, you will get a group of mesh that you can use instead of the Scene component (the model)
      if you are using this methode, go and check 'BITY.js' 
*/

export default function App() {
  return (
    <Canvas shadows style={{ height: "100vh" }}>

      <CameraController />
      <fog attach="fog" args={["white", 0, 40]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 0]} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />

      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>

    </Canvas>
  );
}


function Scene() {
  const gltf = useLoader(GLTFLoader, './FINAL MESH BITY.gltf')
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  )
}

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