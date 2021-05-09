import React from "react";
import styled from "styled-components";

function Top(){
    return(
        <Container>
                <Cover>
                <Heading>
                    Th!nkbots
                </Heading>
                <Tag>
                    Meet the T in DCRSUT
                </Tag>
            </Cover>
            <Image src="https://wallpapercave.com/wp/wp4772583.jpg" alt="" />
        </Container>
    );
}

export default Top;

const Container=styled.div`
    justify-content:center;
    align-items:center;
    text-align:center;
    display:flex;
    border-radius:25px; 
    box-shadow:rgba(0,0,0,0.8) 0 8px 5px;
`
const Cover = styled.div`
    position:absolute;
`
const Heading = styled.h1`
    font-family:"Abril Fatface", cursive;
    font-size:80px;
    opacity:0.85;
    color:#151e3d;
`

const Tag=styled.p`
    font-size:25px;
    color:#fef9f3;
    font-family:"time";
`

const Image = styled.img`
    width:100%;
    border-radius:25px;
`