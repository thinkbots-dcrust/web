import styled from "styled-components";
import { MainLogo } from "components";

function Homepage() {
	return (
		<MainWrapper>
			<MainLogo />
		</MainWrapper>
	);
}

const MainWrapper = styled.div`
	background-color: black;
	height: 100vh;
	width: 100%;
`;

export default Homepage;
