import MainLogo from "components/MainLogo";
import styled from "styled-components";

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
}
`;
const MainWrapper = styled.div`
	background-color: black;
	height: 100vh;
	width: 100%;
`;

export default Homepage;
