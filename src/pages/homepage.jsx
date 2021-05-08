import MainLogo from "components/MainLogo";
import styled from 'styled-components';
import About from "components/About";
import Featured from "components/Featured";

function Homepage() {
  return (
    <MainWrapper>
      <MainLogo />
      <Heading>Meet the T of DCRUST</Heading>
      <About />
      <Featured />
    </MainWrapper>
  );
}

const Heading = styled.p`
color:white;
font-size:20px;
text-align:center;
font-family:'Bangers', cursive;
animation-name:coming;
		animation-timing-function:ease-in-out;
		animation-duration:3s;
		animation-direction:reverse;
		animation-fill-mode:forward;
		animation-iteration-count:infinite;
		transform-origin:60% 52%;
		transition-duration:2s;

@keyframes coming {
  0%{
    opacity:0.8;
  }
  50%{
    opacity:0;
  }
  100%{
    opacity:0.8;
  }
}
`

const MainWrapper = styled.div`
background-color:black;
height:500vh;
width:100%;
`

export default Homepage;
