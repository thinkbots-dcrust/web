import React from "react";
import styled from "styled-components";
import ProjectCard from "containers/ProjectCard";
import { getDeviceType } from "helpers";
import { baseColor, baseStyle } from "styles/base";

function Project() {
  return (
    <MainWrapper>
      <Header>
        <img src="/images/paid/welcome1.jfif" alt="" />
        <TextDiv>
          <h1>Project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            ullam eum numquam libero odio voluptatum!{" "}
          </p>
        </TextDiv>
      </Header>
      <IconSection></IconSection>

      <Applecontent>
        <AppleText>
          <p>
            Projects either in <Strong>#Electrical</Strong> or{" "}
            <Strong>#Electronics</Strong> we accept all kinds of projects.
            <Strong> Mechanical</Strong> or <Strong>Mechatronics</Strong> no
            partiality. From <Strong>Computer Science</Strong> to{" "}
            <Strong>BioTech</Strong> if you have a project in mind, just built
            it and we will showcase it here at our <Strong>Thinkbots.</Strong>
          </p>
          {/* <img src="/images/keyb2.png" alt="" /> */}
        </AppleText>
        <AppleImg src="/images/paid/console.png" />
      </Applecontent>
      <RowContent>
        <h1> &nbsp; See Whats Trending</h1>
        <TheBody>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </TheBody>
      </RowContent>
      <RowContent>
        <h1> &nbsp; Electronics</h1>
        <TheBody>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </TheBody>
      </RowContent>
      <Header></Header>
    </MainWrapper>
  );
}

//styles
const MainWrapper = styled.div`
  background-color: #999999;
`;

const Header = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  border-radius: 0 0 40px 40px;
  img {
    border-radius: 0 0 40px 40px;
    width: 100%;
    ${getDeviceType() === "mobile" &&
    `border-radius: 0 0 20px 20px;
        width: 100%;
	`}
  }
`;
const TextDiv = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  width: 500px;
  h1 {
    font-size: 60px;
    color: #3d9be9;
    text-shadow: 5px 3px black;
  }
  p {
    font-size: 20px;
    color: black;
    padding-right: 30px;
  }
  ${getDeviceType() === "mobile" &&
  `
       position: absolute;
        right: 0;
        top: 20%;
        width: 100px;
        h1 {
            font-size: 20px;
            text-shadow: 1px 1px black;
        }
        p {
            font-size: 8px;
            padding-right: 20px;
        }
	`}
`;

const IconSection = styled.section``;

const Applecontent = styled.section`
  margin: 20px;
  padding-bottom: 100px;
  margin-top: 300px;
  padding-top: 100px;
  border-radius: 40px;
  background-color: #141414;
  ${getDeviceType() === "mobile" &&
  `margin: 5px;
        margin-top: 100px;
        padding-top: 100px;
        border-radius: 20px;
	`}
`;

const AppleText = styled.section`
  margin-top: 100px;
  font-size: 70px;
  margin-left: 500px;
  margin-right: 450px;

  p {
    color: #acabab;
    letter-spacing: 1.5px;
    position: relative;
  }
  ${getDeviceType() === "mobile" &&
  `
        margin-top: 100px;
        font-size: 30px;
        margin-left: 50px;
        margin-right: 50px;
	`}
`;

const AppleImg = styled.img`
  filter: brightness(90%);
  width: 60%;
  position: sticky;
  bottom: -40%;
  left: 20%;
  padding: 0;
  z-index: 5;
  ${getDeviceType() === "mobile" &&
  `
        width: 90%;
        bottom: -90px;
        left: 6%;
        padding: 0;
  
	`}
`;

const RowContent = styled.section`
  padding-left: 30px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
  h1 {
    font-size: ${baseStyle.mainHeadingFont};
  }
  ${getDeviceType() === "mobile" &&
  `
        padding-left: 10px;
         h1 { 
             padding-top: 20px;
             text-align: left;
            font-size: ${baseStyle.subHeadingFont};
  }
	`}
`;

const TheBody = styled.section`
  cursor: pointer;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-bottom: 50px;
  /* margin-top: 50px; */
  margin-left: 10px;
  &::-webkit-scrollbar {
    visibility: hidden;
    height: 8px;
    width: 4px;
    /* background: #e5e5e5; */
    overflow: hidden;
  }
  &::-webkit-scrollbar-thumb:horizontal {
    border-radius: 30px;
    background-color: #7e7e7e;
    width: 50%;
    visibility: hidden;
  }
  &:hover {
    &::-webkit-scrollbar-thumb:horizontal {
      visibility: visible;
      ${getDeviceType() === "mobile" &&
      `visibility: hidden;
	`}
    }
  }
`;

const Strong = styled.strong`
  color: #3d9be9;
`;

export default Project;
