
import styled from 'styled-components';
import About from "components/Homepage/About";
import Featured from "components/Homepage/Featured";
import Top from "components/Homepage/Top";

function Homepage() {
  return (
    <MainWrapper>
      <Top />
      <About />
      <Featured />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
background-color:#28231D;
width:100%;
`

export default Homepage;
