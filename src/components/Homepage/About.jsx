import React from "react";
import styled from "styled-components";
import Logo from 'assets/thinkbots_main_logo.svg';

function About(){
    return(
    <Main style={{backgroundImage:`url("https://wallpaperaccess.com/full/2942605.png")`}}>
        <Heading>
            What we are
        </Heading>
        <StyledImg src={Logo} />
        <Details>
            <b>Th!nkbots</b> is the Technical Club of<a href="http://dcrustm.ac.in/" style={{color:"white", textDecoration:"none"}}>DCRUST</a>.
            It was established way back in 2007 as the Robotics and Aeromodelling Society. 
            But life is all about change and, the soon you accept, the better it is. 
            So we admitted our fate and changed, becoming the Technical Club. 
            We have been actively working since the beginning under the guidance of esteemed Dr. Pawan Kumar Dahiya. 
            Our motive is to provide everyone with a platform to access their brain's technical area. 
            And use all that technical knowledge to develop a better future for all.
        </Details>
    </Main>
    );
}


export default About;

const Heading = styled.p`
    color:#00aba9;
    text-align:center;
    font-size:45px;
    font-family: 'Bangers', cursive;
`

const Details = styled.p`
    padding-top:20px;
    color: white;
    text-align: center;
    font-size: 25px;
    font-family: 'Indie Flower' , cursive;
    justify-content: space-between;
    padding-left:500px;
`

const Main = styled.div`
    margin-top:3px;
    padding:3%;
    height: 60vh;
    box-size: border-box;
    border-radius:25px;
`

const StyledImg = styled.img`
    padding-left:none;
    height:270px;
    width:350px;
    position:absolute;
    border-radius:40px;
    box-shadow:rgba(0,0,0,0.5) 8px 8px 8px;
`