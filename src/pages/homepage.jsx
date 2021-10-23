import styled from "styled-components";

function Homepage() {
  return (
    <MainWrapper>
      <Title>TH!NKBOTS</Title>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio nobis quam vero ut ab veniam ipsum cumque provident, quibusdam vitae, aspernatur iusto doloremque itaque, quia voluptatum perspiciatis minima cupiditate.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam provident, esse facilis, ipsa quasi quibusdam, culpa architecto quisquam aliquam aliquid blanditiis quis veritatis soluta tenetur rem! Corporis dicta ullam sapiente?
      </p>
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
color: #fff;
margin:20px;
right:0;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 64px;
  height:100%;
  position: relative;
  color: white;
  font-size: 96px;
  @media (max-width: 760px) {
    font-size: 38px;
  }
`;

export default Homepage;
