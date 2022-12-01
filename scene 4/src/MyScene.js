/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gltfModem from "./GDSCool teaser2.gltf"
import { editable as e } from '@theatre/r3f'

export default function MyScene(props) {
    let sheet = props.project;
    const { nodes, materials } = useGLTF(gltfModem);
    const [active, setActive] = useState(false);
    return (

        <group {...props} dispose={null}>
            <group
                position={[-1.64, 0.23, -1.66]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.35, 0.4, 0.4]}
            >
                <mesh geometry={nodes.Cube_1.geometry} material={materials.WOOD02} />
                <mesh geometry={nodes.Cube_2.geometry} material={materials.Nplastic} />
            </group>
            <mesh
                geometry={nodes.Plane001.geometry}
                material={materials["WALLs.001"]}
                scale={[1.6, 1, 1]}
            />
            <mesh
                geometry={nodes.Plane002.geometry}
                material={materials.WALLs}
                position={[0, 2.5, -2.5]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[1.6, 1, 1]}
            />
            <mesh
                geometry={nodes.WALL1.geometry}
                material={materials.WALLs}
                position={[-2.96, 2.5, 0]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <group position={[-1.48, 0.41, -0.03]} scale={0.38}>
                <mesh geometry={nodes.Cube025.geometry} material={materials.WOOD02} />
                <mesh
                    geometry={nodes.Cube025_1.geometry}
                    material={materials.Plastica_scura}
                />
            </group>
            <mesh
                geometry={nodes.Cube022.geometry}
                material={materials.WOOD01}
                position={[0.05, 0.18, -1.81]}
                scale={[0.58, 0.41, 0.41]}
            />
            <e.mesh
                onClick={(e) => {
                    console.log(sheet);
                    sheet.sequence.play({ iterationCount: Infinity, direction: 'alternateReverse', range: [2, 9], rate: 1.5 });
                }}
                onPointerOver={(e) => setActive(true)}
                onPointerOut={(e) => setActive(false)}
                theatreKey="hadi li qa3da m3ana ghir ttir"
                geometry={nodes.Plane004.geometry}
                material={!active ? materials.PAPER : materials.Ggreen}
                position={[-2.13, 0.9, 0.89]}
                rotation={[-1.58, 1.3, 1.8]}
                scale={!active ? 0.15 : 0.5}
            />
            <group position={[0.27, 1.62, -2.47]} scale={[0.45, 0.45, 0.43]}>
                <mesh
                    geometry={nodes.Cube043.geometry}
                    material={materials.lavagna_bianca}
                />
                <mesh
                    geometry={nodes.Cube043_1.geometry}
                    material={materials.Alluminio_satinato}
                />
                <mesh
                    geometry={nodes.Cube043_2.geometry}
                    material={materials["WALLs.001"]}
                />
                <mesh
                    geometry={nodes.Cube043_3.geometry}
                    material={materials.Plastica_scura}
                />
                <mesh
                    geometry={nodes.Cube043_4.geometry}
                    material={materials.pennarello}
                />
                <mesh
                    geometry={nodes.Cube043_5.geometry}
                    material={materials.plastica_rossa}
                />
                <mesh
                    geometry={nodes.Cube043_6.geometry}
                    material={materials.plastica_blu}
                />
                <mesh
                    geometry={nodes.Cube043_7.geometry}
                    material={materials.plastica_cancellino}
                />
                <mesh
                    geometry={nodes.Cube043_8.geometry}
                    material={materials.cancellino_feltro}
                />
                <mesh
                    geometry={nodes.Cube043_9.geometry}
                    material={materials.plastica_opaca}
                />
                <mesh
                    geometry={nodes.Cube043_10.geometry}
                    material={materials["Alluminio_satinato.001"]}
                />
            </group>
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials["Wplastic1.001"]}
                position={[1.87, 1.48, -2.48]}
                scale={[1, 1, 0.2]}
            />
            <mesh
                geometry={nodes.Cube019.geometry}
                material={materials.Wplastic1}
                position={[1.87, 1.48, -2.47]}
                rotation={[0.04, 0, 0]}
                scale={[1.09, 1.09, 0.07]}
            />
            <group position={[1.19, 2.48, -2.45]} scale={[0.33, 1.06, 0.57]}>
                <mesh geometry={nodes.Cube007_1.geometry} material={materials.Gmetal} />
                <mesh
                    geometry={nodes.Cube007_2.geometry}
                    material={materials["Alluminio_satinato.002"]}
                />
                <mesh geometry={nodes.Cube007_3.geometry} material={materials.LIGHT} />
            </group>
            <mesh
                geometry={nodes.CadreTab001.geometry}
                material={materials.Alluminio_satinato}
                position={[0.31, 1.6, -2.43]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.81, 1.68, 0.74]}
            />
            <mesh
                geometry={nodes.Cube005.geometry}
                material={materials["Ggreen.001"]}
                position={[2.06, 1.9, -2.48]}
                rotation={[0, 0, -Math.PI / 6]}
                scale={[3.25, 1.13, 0.39]}
            />
            <mesh
                geometry={nodes.Cube006.geometry}
                material={materials["Ggreen.002"]}
                position={[2.06, 2.05, -2.48]}
                rotation={[-Math.PI, 0, -Math.PI / 6]}
                scale={[3.17, 1.1, 0.38]}
            />
            <mesh
                geometry={nodes.Cube007.geometry}
                material={materials.GYellow}
                position={[2.54, 1.9, -2.48]}
                rotation={[Math.PI, 0, 2.62]}
                scale={[3.17, 1.1, 0.38]}
            />
            <mesh
                geometry={nodes.Cube009.geometry}
                material={materials.Ggreen}
                position={[2.54, 2.05, -2.48]}
                rotation={[0, 0, 2.62]}
                scale={[3.25, 1.13, 0.39]}
            />
            <mesh
                geometry={nodes.Plane003.geometry}
                material={materials["Material.004"]}
                position={[-1.57, 1.65, -2.49]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.55, 1, 0.75]}
            />
        </group>
    );
}

useGLTF.preload("/GDSCool teaser2.gltf");