import React from "react";
import styled from "styled-components";

function Skill (input){
    return (
        <Container>
            <Image src={input.src} />
            <Box>
                <Heading>
                    {input.name}
                </Heading>
                <Desc>
                    {input.desc}
                </Desc>
            </Box>
        </Container>
    )
}

export default Skill;

const Container = styled.div`
    margin:20px 0;
    justify-content:center;
    flex-direction: column;
    width:15vw;
    box-shadow:rgba(0,0,0,0.3) 2px 3px 2px;
    border-radius:10%;
`

const Image = styled.img`
    margin-top:15px;
    width:200px;
    height:150px;
    border-radius:10%;
    box-shadow:rgba(0,0,0,0.3) 0px 5px 5px;
`

const Box = styled.div`
text-align:center;
    margin: 10px;
`

const Heading = styled.h2`
    font-family:"Bangers";
`

const Desc = styled.p`
    font-family:"Indie flower";
    font-size:20px;
    font-weight:600;
`