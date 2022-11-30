import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export default function RotatingBox(props) {
    const mesh = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        (mesh.current.rotation.x += 0.01);
        (mesh.current.rotation.y += 0.01);
        (mesh.current.rotation.z += 0.01);
    })

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
            <meshStandardMaterial color={hovered ? 'red' : 'blue'} />
        </mesh>
    )
}