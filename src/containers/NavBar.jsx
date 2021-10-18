import React from "react";
import { MainLogo } from "components";
import styled from "styled-components";
import { baseColor, baseStyle } from "styles/base";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
	return (
		<MainWrapper>
			<MainLogo />
			<NavButtonsWrapper>
				<NavBtnComponent url="/home" label="Home" />
				<NavBtnComponent url="/projects" label="Projects" />
				<NavBtnComponent url="/events" label="Events" />
				<NavBtnComponent url="/faqs" label="FAQs" />
				<NavBtnComponent url="/alumni" label="Alumni" />
				<NavBtnComponent url="/login" label="Login" />
			</NavButtonsWrapper>
		</MainWrapper>
	);
}

//components

function NavBtnComponent(props) {
	const location = useLocation();
	return (
		<Link to={props.url}>
			<NavBtn active={location.pathname === props.url}>{props.label}</NavBtn>
		</Link>
	);
}

//Styles
const MainWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	overflow: visible;
	padding: 0 ${baseStyle.leftMainMargin};
`;
const NavButtonsWrapper = styled.div``;

const NavBtn = styled.button`
	background-color: transparent;
	padding: ${baseStyle.btnPadding};
	border: none;
	font-size: ${baseStyle.mainTextFont};
	color: ${baseColor.onBackground};
	cursor: pointer;
	margin-left: 15px;
	border-radius: ${baseStyle.btnBorderRadius};
	text-decoration: none;
	${(props) =>
		props.active &&
		`background-color:${baseColor.primary}; color:${baseColor.onPrimary};`}

	&:hover {
		background-color: ${baseColor.primary};
		color: ${baseColor.onPrimary};
	}
`;
