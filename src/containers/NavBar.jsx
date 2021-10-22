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
        <NavBtnComponent url="/home" label="HOME" />
        <NavBtnComponent url="/events" label="EVENTS" />
        <NavBtnComponent url="/projects" label="PROJECTS" />
        <NavBtnComponent url="/team" label="TEAM" />
        <NavBtnComponent url="/faqs" label="FAQs" />
        <NavBtnComponent url="/alumni" label="ALUMNI" />
        <NavBtnComponent url="/login" label="LOGIN" />
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
  position: fixed;
  top: 0;
  width: 95%;
  margin-left:20px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  overflow: hidden;
  background-color: #131313;
`;
const NavButtonsWrapper = styled.div`
  @media (max-width: 760px) {
    display: none;
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
