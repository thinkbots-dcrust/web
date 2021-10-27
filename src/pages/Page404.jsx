import React from "react";
import image404 from "assets/404.svg";
import styled from "styled-components";

export default function Page404() {
	return (
		<MainWrapper>
			<ImageStyled src={image404} alt=" " />
		</MainWrapper>
	);
}

const ImageStyled = styled.img`
	margin: 10px auto;
	height: 100%;
`;
const MainWrapper = styled.div`
	height: 80vh;
	text-align: center;
`;
