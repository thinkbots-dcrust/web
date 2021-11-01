import React, { useState } from "react";
import { MainLogo } from "components";
import styled from "styled-components";
import { baseColor, baseStyle } from "styles/base";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { ReactComponent as Open } from "assets/menu-open.svg";
import { ReactComponent as Close } from "assets/menu-close.svg";

export default function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <MainWrapper className='header'>
      <MainLogo />
      <NavButtonsWrapper className={click ? "nav-options active" : "nav-options"}>
        <NavBtnComponent url="/home" label="HOME" className="option" onClick={closeMobileMenu}/><hr />
        <NavBtnComponent url="/events" label="EVENTS" className="option" onClick={closeMobileMenu}/><hr />
        <NavBtnComponent url="/projects" label="PROJECTS" className="option" onClick={closeMobileMenu}/><hr />
        <NavBtnComponent url="/team" label="TEAM" className="option" onClick={closeMobileMenu}/><hr />
        <NavBtnComponent url="/faqs" label="FAQs" className="option" onClick={closeMobileMenu}/><hr />
        <NavBtnComponent url="/alumni" label="ALUMNI" className="option" onClick={closeMobileMenu}/><hr />
        <NavBtnComponent url="/login" label="LOGIN" className="option" onClick={closeMobileMenu}/>
      </NavButtonsWrapper>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <Close className="menu-icon" />
        ) : (
          <Open className="menu-icon" />
        )}
      </div>
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
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  height: 64px;
  overflow: hidden;
  background-color: #131313;
`;
const NavButtonsWrapper = styled.div`
hr{
    width:30%;
    border:1px solid #3d9be9;
    display: none;
    @media (max-width: 1025px) {
        
    }
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
  a{

      &:hover {
          background-color: ${baseColor.primary};
          color: ${baseColor.onPrimary};
        }
    }
`;
