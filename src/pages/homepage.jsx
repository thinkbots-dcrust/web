import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import styled from "styled-components";
import { baseColor } from "styles/base";
import Drone from "components/Drone";
import { Stars } from "@react-three/drei";

function Homepage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Canvas
        style={{ height: "90vh", width: "100%" }}
        camera={{ fov: 60, near: 0.1, far: 1000, position: [7, 0, 7] }}
      >
        <Suspense fallback={null}>
          <Drone setShow={setShow} />
          <Stars
            radius={70}
            depth={20}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <pointLight args={[0xffffff, 1, 100]} position={[5, 5, 5]} />
        </Suspense>
      </Canvas>
      {show && (
        <MainWrapper>
          <Plate>
            <Title>TH!NKBOTS</Title>
            <Para>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              distinctio nobis quam vero ut ab veniam ipsum cumque provident,
              quibusdam vitae, aspernatur iusto doloremque itaque, quia
              voluptatum perspiciatis minima cupiditate. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Ipsam provident, esse facilis,
              ipsa quasi quibusdam, culpa architecto quisquam aliquam aliquid
              blanditiis quis veritatis soluta tenetur rem! Corporis dicta ullam
              sapiente?
            </Para>
          </Plate>
        </MainWrapper>
      )}
    </>
  );
}

const MainWrapper = styled.section`
  color: ${baseColor.onBackground};
  left: 0;
  right: 0;
  width: 80%;
  top: 0;
  margin: auto;
  margin-top: 30vh;
  position: absolute;
`;
const Para = styled.p`
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 64px;
  padding: 2rem 0;
  position: relative;
  color: white;
  font-size: 96px;
  @media (max-width: 760px) {
    font-size: 38px;
  }
`;

const Plate = styled.div`
  padding-top: 30px;
`;
export default Homepage;
