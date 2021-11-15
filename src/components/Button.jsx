import styled from "styled-components";
import { baseColor, baseStyle } from "styles/base";

export default function Button(props) {
	return <MainWrapper type={props.type}>{props.children}</MainWrapper>;
}

const MainWrapper = styled.button`
	background-color: ${(props) =>
		props.type === "primary"
			? baseColor.primary
			: props.type === "sec"
			? baseColor.secondary
			: baseColor.background};
	color: ${baseColor.onPrimary};
	padding: 8px 14px;
	margin-top: 10px;
	width: fit-content;
	border-radius: 5px;
	font-size: ${baseStyle.mainTextFont};
	cursor: pointer;
	border: none;
	box-shadow: ${baseStyle.boxShadowMild};

	&:active {
		box-shadow: 1px 1px 0px black;
	}
`;
