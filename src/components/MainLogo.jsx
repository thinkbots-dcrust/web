import Logo from 'assets/thinkbots_main_logo.svg'
import styled from 'styled-components'

export default function MainLogo() {
  return <MainContainer><StyledImg src={Logo} className="main-logo" /></MainContainer>;
}

const StyledImg = styled.img`
margin:0 auto;
height:150px;
width:150px;
`
const MainContainer = styled.div`

`
