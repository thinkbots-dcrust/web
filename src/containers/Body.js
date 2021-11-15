import React from "react";
import Drone from "components/Drone";
import { Stars } from "@react-three/drei";

const Body = () => {
  return (
    <>
      <Drone />
      <Stars
        radius={70}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      <pointLight args={[0xffffff, 1, 100]} position={[5, 5, 5]} />
    </>
  );
};

export default Body;
