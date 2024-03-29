/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: zulubo (https://sketchfab.com/zulubo)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/d1cc3802a06a456a9ad87e60e19cd4c5
title: Vertigo: Cleanup Drone
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Model() {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/drone/scene.gltf");

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const start = async () => {
    gsap.fromTo(
      group.current.position,
      { y: group.current.position.y },
      { y: 3, duration: 1.5 }
    );
    gsap.fromTo(
      group.current.position,
      { x: group.current.position.x },
      { x: 0, duration: 1.5 }
    );

    gsap.to(group.current.rotation, { y: Math.PI / 4, duration: 1.5 });

    const hover = gsap.timeline({ repeat: -1 });
    hover.fromTo(group.current.position, { y: 2.9 }, { y: 3.1, duration: 1.5 });
    hover.fromTo(group.current.position, { y: 3.1 }, { y: 2.9, duration: 1.5 });

    const lookAround = gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 5 });
    lookAround.fromTo(
      group.current.rotation,
      { y: Math.PI / 4 },
      { y: Math.PI / 2, duration: 1 }
    );
    lookAround.fromTo(
      group.current.rotation,
      { y: Math.PI / 2 },
      { y: -Math.PI / 4, duration: 1 }
    );
    lookAround.fromTo(
      group.current.rotation,
      { y: -Math.PI / 4 },
      { y: Math.PI / 4, duration: 1 }
    );
  };

  useEffect(() => {
    start();
  }, []);
  return (
    <group ref={group} dispose={null} position={[-10, -10, 0]} scale={2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[1.93, 0, 0]}>
          <mesh
            geometry={nodes.Screen_0.geometry}
            material={materials.Drone_Screen}
          />
        </group>
        <group rotation={[1.93, 0, 0]}>
          <mesh
            geometry={nodes.Drone_light_0.geometry}
            material={nodes.Drone_light_0.material}
          />
          <mesh
            geometry={nodes.Drone_light_1.geometry}
            material={materials.Drone_Headlamp}
          />
        </group>
        <group rotation={[1.93, 0, 0]}>
          <mesh
            geometry={nodes.Drone_Guns_0.geometry}
            material={nodes.Drone_Guns_0.material}
          />
        </group>
        <group rotation={[1.93, 0, 0]}>
          <mesh
            geometry={nodes.Drone_Body_0.geometry}
            material={nodes.Drone_Body_0.material}
          />
          <mesh
            geometry={nodes.Drone_Body_1.geometry}
            material={materials.Drone_Thruster}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/drone/scene.gltf");
