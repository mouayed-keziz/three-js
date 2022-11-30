import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export default function Sphere(props) {
    const mesh = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [isGoingUp, setIsGoingUp] = useState(true)

    useFrame((state, delta) => {
        //floating up and down
        if (mesh.current.position.y > 1.4) {
            setIsGoingUp(false)
        }
        if (mesh.current.position.y < 0.8) {
            setIsGoingUp(true)
        }
        if (isGoingUp) {
            (mesh.current.position.y += 0.01);
        }
        else {
            (mesh.current.position.y -= 0.01);
        }
    })
    return (
        <mesh
            {...props}
            receiveShadow
            castShadow
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <sphereBufferGeometry args={[1, 25, 25]} />
            <meshStandardMaterial attach="material" color={hovered ? 'red' : "black"} />
        </mesh>
    );
}