import React from "react";
import styled from "styled-components";
import Logo from 'assets/thinkbots_main_logo.svg';
import NavItem from "./NavItem";

function Header (){
    return(
        <Container>
            <NavBar>
                <NavLogo src={Logo} />
                <Nav>
                    <NavItem name="Home" src="./Homepage" />
                    <NavItem name="Project" src= "" />
                    <NavItem name= "Team" src="" />
                    <NavItem name= "Event" src= "" />
                    <NavItem name= "Alumni" src= "" />
                    <NavItem name= "Register" src =" "/>
                    
                </Nav>
            </NavBar>
        </Container>
    )
}

export default Header;

const Container = styled.div`
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
background-color: rgba(0, 0, 0, 0.9);
display: flex;
justify-content: center;
align-items: center;
border-radius:20px;
box-shadow:rgba(0,0,0,0.2) 0 10px 10px;

`;
const NavBar = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
${Container};
`;

const NavLogo = styled.img`
    width:120px;
    height:120px;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 800;
    transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
`
const Nav=styled.div`
    padding-left:650px;
    justify-content:space-between;
    display: flex;
    align-items: center;
    text-align: center;
`