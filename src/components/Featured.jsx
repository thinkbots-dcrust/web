import React from "react";
import styled from "styled-components";

function Featured_skillset(){
    return (
        <div>
            <Heading>Featured Skillset</Heading>
            <Details>
                <b>TH!NKBOTS</b> value journey more than the destination.
                <div>
                    And for us journey is best defined by the acquired <b>Skillsets</b>.
                </div> 
            </Details>
        </div>
    );
}

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
export default Featured_skillset;