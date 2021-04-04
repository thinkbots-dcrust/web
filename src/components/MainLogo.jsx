import Logo from 'assets/thinkbots_main_logo.svg'
import styled from 'styled-components'

export default function MainLogo() {
  return <MainContainer><StyledImg src={Logo} className="main-logo" /></MainContainer>;
}

const StyledImg = styled.img`
height:400px;
width:400px;
margin:auto;

`
const MainContainer = styled.div`
text-align:center;
`
