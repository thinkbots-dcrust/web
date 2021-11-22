import React, { Component } from "react";
import styled from "styled-components";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { baseColor, baseStyle } from "styles/base";
import { Parallax } from "react-parallax";
import { CgMouse } from "react-icons/cg";
import { getDeviceType } from "helpers";
// import { Slider } from "components";

function Alumni() {
  return (
    <AlumniContainer>
      <Parallax
        bgImage={"images/alumni3.jpg"}
        strength={200}
        blur={{ min: -10, max: 10 }}
        disabled={
          getDeviceType() === "mobile" &&
          `
		true
	`
        }
      >
        <Fuck>
          <Fuckicon>
            <CgMouse />
          </Fuckicon>
        </Fuck>
      </Parallax>

      <AlumniSec>
        <h1>Our Gems</h1>

        <AlumniBar>
          <AlumniSocial>
            <ul>
              <li>
                <a>
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a>
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a>
                  <SiGmail />
                </a>
              </li>
            </ul>
          </AlumniSocial>
          <AlumniImg>
            <img src="/images/profile3.jpg" alt="img-error" />
          </AlumniImg>
          <AlumniData>
            <h2>Siddharth</h2>
            <p>Web Devloper</p>
          </AlumniData>
        </AlumniBar>

        <AlumniBar>
          <AlumniSocial>
            <ul>
              <li>
                <a>
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a>
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a>
                  <SiGmail />
                </a>
              </li>
            </ul>
          </AlumniSocial>
          <AlumniImg>
            <img src="/images/profile4.png" alt="img-error" />
          </AlumniImg>
          <AlumniData>
            <h2>Alumni Name</h2>
            <p>Alumni Designation</p>
          </AlumniData>
        </AlumniBar>

        <AlumniBar>
          <AlumniSocial>
            <ul>
              <li>
                <a>
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a>
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a>
                  <SiGmail />
                </a>
              </li>
            </ul>
          </AlumniSocial>
          <AlumniImg>
            <img src="/images/profile4.png" alt="img-error" />
          </AlumniImg>
          <AlumniData>
            <h2>Alumni Name</h2>
            <p>Alumni Designation</p>
          </AlumniData>
        </AlumniBar>

        <AlumniBar>
          <AlumniSocial>
            <ul>
              <li>
                <a>
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a>
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a>
                  <SiGmail />
                </a>
              </li>
            </ul>
          </AlumniSocial>
          <AlumniImg>
            <img src="/images/profile4.png" alt="img-error" />
          </AlumniImg>
          <AlumniData>
            <h2>Alumni Name</h2>
            <p>Alumni Designation</p>
          </AlumniData>
        </AlumniBar>
        <AlumniBar>
          <AlumniSocial>
            <ul>
              <li>
                <a>
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a>
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a>
                  <SiGmail />
                </a>
              </li>
            </ul>
          </AlumniSocial>
          <AlumniImg>
            <img src="/images/profile4.png" alt="img-error" />
          </AlumniImg>
          <AlumniData>
            <h2>Alumni Name</h2>
            <p>Alumni Designation</p>
          </AlumniData>
        </AlumniBar>
      </AlumniSec>

      <EndingTag>
        <img src="/images/paid/ending2.png" alt="img-error" />
      </EndingTag>

      <TheBody>
        <BodyHeading>
          <h1>Companies prefer Us</h1>
        </BodyHeading>

        {/* <BodyImg>
          <Slider />
        </BodyImg> */}
        
      </TheBody>
    </AlumniContainer>
  );
}

export default Alumni;

// style

const AlumniContainer = styled.div``;

const Fuck = styled.div`
  height: 100vh;
`;

const Fuckicon = styled.div`
  font-size: 30px;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 80%;
  transform: "translate(-50%, -50%)";
`;

const AlumniSec = styled.section`
  margin: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  background-color: ${baseColor.surface};
  overflow: hidden;
  box-shadow: ${baseStyle.boxShadowMild};
  color: ${baseColor.onBackground};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  h1 {
    padding-top: 100px;
    margin: 10px;
    width: 500px;
    height: 100px;
    text-align: center;
    margin: 30px 40px;
    vertical-align: sub;
  }
  ${getDeviceType() === "mobile" &&
  `
		margin: 10px;
	`}
`;

const AlumniBar = styled.div`
  position: relative;
  background-color: ${baseColor.surface};
  height: 200px;
  width: 500px;
  margin: 30px 40px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: ${baseStyle.boxShadowMild};
  color: ${baseColor.onBackground};
  display: flex;
  opacity: 1;

  ${getDeviceType() === "mobile" &&
  `
		font-size:${baseStyle.mainTextFont};
		width:500px;
        margin: 20px 10px;
        height: 150px;
	`}
`;
const AlumniSocial = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.2s ease;
  background-color: transparent;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-top: 100px;
    ${getDeviceType() === "mobile" &&
    `
		margin-top: 75px;
        margin-left: 20px;
	`}
  }
  li {
    color: white;
    font-size: 25px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  ${AlumniBar}:hover & {
    opacity: 1;
    background-color: rgba(35, 35, 36, 0.95);
  }
`;

const AlumniImg = styled.div`
  img {
    padding: 0px;
    border-radius: 40px 0px 0px 40px;
    border: 2px solid rgba(35, 35, 36, 0.95);
    height: 196px;
    width: 196px;
  }
  ${getDeviceType() === "mobile" &&
  `
	img {
    height: 148px;
    width: 148px;
  }
	`}
`;

const AlumniData = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 50px;
  p {
    padding-top: 10px;
  }
  ${getDeviceType() === "mobile" &&
  `
    width: 100%;
  text-align: center;
  padding-top: 20px;
  h2{
      font-size:${baseStyle.subTextFont};
      padding-top: 20px;
  }
  p {
    font-size: ${baseStyle.smallTextFont};
  }
	`}
`;

const TheBody = styled.section`
  height: 40vh;
  background: rgb(17, 17, 17);
  background: linear-gradient(
    0deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const BodyHeading = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
  h1 {
    color: #3d9be9;
    font-size: ${baseStyle.mainHeadingFont};
    font-weight: 100;
    letter-spacing: 5px;
    ${getDeviceType() === "mobile" &&
    `font-size: ${baseStyle.subHeadingFont};
    letter-spacing: 0px;
	`}
  }
`;
const BodyImg = styled.div`
  margin-top: 20px;
  border-radius: 20px;
  background: transparent;
  width: 50%;
  position: absolute;
  left: 25%;
  font-size: 40px;
  ${getDeviceType() === "mobile" &&
  `width: 90%;;
  position: absolute;
  left: 5%;
  font-size: 20px;
	`}
`;

const EndingTag = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #c1c1c1;
  box-shadow: 0px 10px 40px rgb(255 255 255 / 20%);
  img {
    border-radius: 20px;

    ${getDeviceType() === "mobile" &&
    `height: 80px;
    width:100vw;
	`}
  }
`;
