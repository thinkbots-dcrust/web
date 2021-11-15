import React, { useState } from "react";
import { MainLogo } from "components";
import styled from "styled-components";
import { baseColor, baseStyle } from "styles/base";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Open } from "assets/menu-open.svg";
import { ReactComponent as Close } from "assets/menu-close.svg";
import { getDeviceType } from "helpers";

export default function NavBar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<MainWrapper className="header">
			<MainLogo />
			<NavButtonsWrapper active={click}>
				<NavBtnComponent url="/home" label="HOME" onClick={closeMobileMenu} />
				<hr />
				<NavBtnComponent
					url="/events"
					label="EVENTS"
					onClick={closeMobileMenu}
				/>
				<hr />
				<NavBtnComponent
					url="/projects"
					label="PROJECTS"
					onClick={closeMobileMenu}
				/>
				<hr />
				<NavBtnComponent url="/team" label="TEAM" onClick={closeMobileMenu} />
				<hr />
				<NavBtnComponent url="/faqs" label="FAQs" onClick={closeMobileMenu} />
				<hr />
				<NavBtnComponent
					url="/alumni"
					label="ALUMNI"
					onClick={closeMobileMenu}
				/>
				<hr />
				<NavBtnComponent url="/login" label="LOGIN" onClick={closeMobileMenu} />
			</NavButtonsWrapper>
			<Crossbtn onClick={handleClick}>{click ? <Close /> : <Open />}</Crossbtn>
		</MainWrapper>
	);
}

//components

function NavBtnComponent(props) {
	const location = useLocation();
	return (
		<Link to={props.url}>
			<NavBtn onClick={props.onClick} active={location.pathname === props.url}>
				{props.label}
			</NavBtn>
		</Link>
	);
}

//Styles
const MainWrapper = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	z-index: 5;
	display: flex;
	flex-direction: row;
	/* justify-content: space-around; */
	height: 64px;
	overflow: hidden;
	background-color: ${baseColor.background};
	justify-content: space-evenly;
	align-items: center;
	box-sizing: border-box;
	${getDeviceType() === "mobile" &&
	`justify-content:space-between;
    padding:0 ${baseStyle.leftMainMargin};
  `}
`;
const NavButtonsWrapper = styled.div`
  hr {
    width: 30%;
    border: 1px solid ${baseColor.primary};
    display: none;
  }
  @media (max-width: 1025px) {
    align-items: center;
    /* justify-content: space-between; */
    text-align: center;
    display: flex;
    width: 100%;
    height: 310px;
    position: absolute;
    top: 64px;
    left: -100%;
    opacity: 0;
    transition: all 0.1s ease;
    flex-direction: column;
    list-style-type: none;
    grid-gap: 0px;
    ${(props) =>
      props.active &&
      `
    color: ${baseColor.onPrimary};
    background: ${baseColor.background};
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 10;
    align-content: center;
    padding: 0px;
    border-radius: 0 0px 20px 0px;
    border-bottom-style: solid;
	  border-color: ${baseColor.primary};
   `}
  }
`;

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
  letter-spacing: 2px;
  ${(props) => props.active && ` color:${baseColor.primary};`}
  &:hover {
    background-color: ${baseColor.primary};
    color: ${baseColor.onPrimary};
  }
`;

const Crossbtn = styled.div`
  display: none;
  @media (max-width: 1025px) {
    display: block;
    width: 40px;
    height: 40px;
    color: ${baseColor.primary};
  }
`;
