import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("/FINAL MESH BITY.gltf");
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.BITY.geometry}
                material={materials["Material.001"]}
                position={[0.1, 2.5, -0.2]}
                scale={[0.5, 0.6, 0.8]}
            />
            <group position={[-0.1, 1.4, -0.1]} scale={[0.6, 1.1, 0.9]}>
                <mesh
                    geometry={nodes.Cube006.geometry}
                    material={materials["Material.011"]}
                />
                <mesh
                    geometry={nodes.Cube006_1.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    geometry={nodes.Cube006_2.geometry}
                    material={materials.Material}
                />
                <mesh
                    geometry={nodes.Cube006_3.geometry}
                    material={materials["Material.004"]}
                />
                <mesh
                    geometry={nodes.Cube006_4.geometry}
                    material={materials.schaumst}
                />
                <mesh
                    geometry={nodes.Cube006_5.geometry}
                    material={materials["Material #856"]}
                />
                <mesh
                    geometry={nodes.Cube006_6.geometry}
                    material={materials["Material.003"]}
                />
                <mesh
                    geometry={nodes.Cube006_7.geometry}
                    material={materials["Material #879"]}
                />
                <mesh
                    geometry={nodes.Cube006_8.geometry}
                    material={materials["Material.007"]}
                />
                <mesh
                    geometry={nodes.Cube006_9.geometry}
                    material={materials.rift_CLOTH}
                />
                <mesh
                    geometry={nodes.Cube006_10.geometry}
                    material={materials["Material.017"]}
                />
                <mesh
                    geometry={nodes.Cube006_11.geometry}
                    material={materials["Material.018"]}
                />
                <mesh
                    geometry={nodes.Cube006_12.geometry}
                    material={materials["Material.019"]}
                />
                <mesh
                    geometry={nodes.Cube006_13.geometry}
                    material={materials["Material.020"]}
                />
                <mesh
                    geometry={nodes.Cube006_14.geometry}
                    material={materials["Material.021"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/FINAL MESH BITY.gltf");
