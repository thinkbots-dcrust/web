import styled from "styled-components";
import { baseColor } from "styles/base";

function Homepage() {
  return (
    <>
      <canvas />
      <MainWrapper>
        <Title>TH!NKBOTS</Title>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          distinctio nobis quam vero ut ab veniam ipsum cumque provident,
          quibusdam vitae, aspernatur iusto doloremque itaque, quia voluptatum
          perspiciatis minima cupiditate. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Ipsam provident, esse facilis, ipsa
          quasi quibusdam, culpa architecto quisquam aliquam aliquid blanditiis
          quis veritatis soluta tenetur rem! Corporis dicta ullam sapiente?
        </Para>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.section`
  color: ${baseColor.onBackground};
  margin: 20px auto;
  left: 0;
  right: 0;
  width: 80%;
  padding: 30vh 0;
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

export default Homepage;
