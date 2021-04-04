import MainLogo from "components/MainLogo";
import styled from 'styled-components'

function Homepage() {
  return (
    <MainWrapper>
      <MainLogo />
      <Heading>Coming Soon</Heading>
    </MainWrapper>
  );
}

const Heading = styled.h1`
color:white;
font-size:20px;
text-align:center;
font-family:arial;
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
height:100vh;
width:100%;
`

export default Homepage;
