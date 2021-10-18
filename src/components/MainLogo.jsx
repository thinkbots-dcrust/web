import Logo from 'assets/thinkbots_main_logo.svg'
import styled from 'styled-components'
import { baseStyle } from "styles/base";

export default function MainLogo() {
	return (
		<MainContainer>
			<StyledImg src={Logo} className="main-logo" />
		</MainContainer>
	);
}

const StyledImg = styled.img`
	width: 230px;
	margin: auto;
	height: 280px;
	margin-top: -15px;
`;

const MainContainer = styled.div`
text-align:center;
`
