import styled from "styled-components";

function Homepage() {
  return (
    <MainWrapper>
      <Title>TH!NKBOTS</Title>
    </MainWrapper>
  );
}

const MainWrapper = styled.section``;

const Title = styled.div`
  text-align: center;
  margin-top: 64px;
  height: 100vh;
  position: relative;
  color: white;
  font-size: 96px;
  @media (max-width: 760px) {
    font-size: 38px;
  }
`;

export default Homepage;
