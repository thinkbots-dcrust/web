import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

function Featured_skillset(){
    return (
        <Container>
            <Box>
            <Heading>Featured Skillset</Heading>
            <Details>
                <b>TH!NKBOTS</b> value journey more than the destination.
                <div>
                    And for us journey is best defined by the acquired <b>Skillsets</b>.
                </div> 
            </Details>
            <Skill src="https://createdigital.org.au/wp-content/uploads/2018/02/robotics-challenges.jpg" name="Robotics" desc ="The art of dealing with electronics" />
            <Skill src="https://venture-lab.org/wp-content/uploads/2019/11/writing.jpg" name="Technical Writing" desc =" Art of jotting down the points" />
            </Box>
            <Image src="https://img2.goodfon.com/wallpaper/nbig/3/be/tekstura-siniy-cvet-ottenok.jpg" />
        </Container>
    );
}

export default Featured_skillset;

const Heading = styled.p`
    color:#00aba9;
    text-align:center;
    font-size:45px;
    font-family: "Bangers";
`
const Details =styled.p`
    color:white;
    text-align:center;
    font-size:25px;
    font-family:"Indie Flower";
`
const Container = styled.div`
    justify-content:center;
    text-align:center;
    display:flex;
    border-radius:25px; 
    box-shadow:rgba(0,0,0,0.8) 0 8px 5px;
`
const Image = styled.img`
    width: 100%;
	max-height: 120vh;
`
const Box = styled.div`
	position: absolute;
`
