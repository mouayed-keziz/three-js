export default function Plane({ position }) {
    return (
        <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={position}
        >
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial attach="material" color="green" />
        </mesh>
    );
}