import { useFrame } from "@react-three/fiber";
import gsap from "gsap/all";
import { fragment, vertex } from "helpers/shaders";
import React, { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { baseColor } from "styles/base";
import { Color, ShaderMaterial } from "three";

const Hologram = () => {
  const holoRef = useRef(null);
  useEffect(() => {
    gsap.to(holoRef.current, { opacity: 0, duration: 0.5 });
  }, []);
  const plateMaterial = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColorStart: { value: new Color(baseColor.primary) },
      uColorEnd: { value: new Color(baseColor.background) },
      uOpacity: { value: 0.35 },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
  });
  plateMaterial.transparent = true;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    plateMaterial.uniforms.uTime.value = elapsedTime;
    plateMaterial.uniforms.uOpacity.value =
      plateMaterial.uniforms.uOpacity.value + (Math.random() - 0.5) * 0.01;
    gsap.to(holoRef.current, { opacity: 0, duration: 0.5 });
  });
  return (
    <mesh
      material={plateMaterial}
      ref={holoRef}
      position={[2.5, -0.4, 2.5]}
      rotation={[0, Math.PI / 4, 0]}
    >
      <planeBufferGeometry args={[10, 5]} />
    </mesh>
  );
};

export default Hologram;
