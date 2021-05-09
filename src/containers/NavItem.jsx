import React from "react";
import styled from "styled-components";

function NavItem (input){
    return(
        <Container>
            <Item href={input.src}> {input.name}</Item>
        </Container>
    )
}
export default NavItem;

const Container= styled.div`
`

const Item = styled.a`
       text-decoration: none;
font-weight: bold;
font-size:20px;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: 100%;
transition: all .2s ease;

&:hover {
    color: #3cb043;
    transform: traslateY(-3rem);
}

    list-style: none;
    color:white;
    font-family: "Indie Flower",cursive;
`