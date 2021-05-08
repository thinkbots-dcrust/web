import React from "react";
import styled from "styled-components";
import Logo from 'assets/thinkbots_main_logo.svg';

function About(){
    return(
    <Main style={{backgroundImage:`url("https://wallpaperaccess.com/full/2942605.png")`}}>
        <Heading>
            What we are
        </Heading>

        <Details>
            <StyledImg src={Logo} />
            <b>Th!nkbots</b> is the T of <a href="http://dcrustm.ac.in/" style={{color:"white", textDecoration:"none"}}>DCRUST</a>, i.e., the Technical Club.
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

const Heading = styled.p`
    color:#00aba9;
    text-align:center;
    font-size:45px;
    font-family: 'Bangers', cursive;
`

const Details = styled.p`
    color: white;
    float:left;
    padding: 20px 20px 20px 500px;
    text-align: center;
    font-size: 25px;
    font-family: 'Indie Flower' , cursive;
`

const Main = styled.div`
    padding:3%;
    height: 60vh;
    box-size: border-box;
`

const StyledImg = styled.img`
    float:left;
    width:40%;
    height:150px;
    padding:none;
    position:absolute; 
    display:flex;
`

export default About;
