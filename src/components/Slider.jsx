import React, { Component } from "react";
import styled from "styled-components";

import JedliSlider, { JedliSlide } from "react-jedlislider";
import "react-jedlislider/dist/index.css";

import {
  SiFacebook,
  SiMicrosoft,
  SiGithub,
  SiTesla,
  SiTwitch,
  SiStarbucks,
  SiApple,
  SiAmazon,
  SiUbisoft,
  SiNvidia,
  SiRazer,
  SiRiotgames,
} from "react-icons/si";

import {
  SiAmazonaws,
  SiAcer,
  SiAsus,
  SiActivision,
  SiAmd,
  SiCoinbase,
  SiJbl,
  SiSamsung,
  SiInfosys,
} from "react-icons/si";


class Slider extends Component {
  render() {
    return (
      <SliderMain>
        <JedliSlider
          speed={45}
          slidesWidth="equal"
          visibleSlides="5"
          direction="rtl"
          pauseOnHover={false}
          style={{ color: "white", padding: "10px" }}
        >
          <JedliSlide>
            <SiFacebook
              onMouseOver={({ target }) => (target.style.color = "#4267B2")}
            />
          </JedliSlide>

          <JedliSlide>
            <SiMicrosoft
              onMouseOver={({ target }) => (target.style.color = "#00A4EF")}
            />
          </JedliSlide>
          <JedliSlide>
            <SiGithub
              onMouseOver={({ target }) => (target.style.color = "#6e5494")}
            />
          </JedliSlide>

          <JedliSlide>
            <SiRiotgames
              onMouseOver={({ target }) => (target.style.color = "d22a36")}
            />
          </JedliSlide>
          <JedliSlide>
            <SiRazer
              onMouseOver={({ target }) => (target.style.color = " #66b933")}
            />
          </JedliSlide>
          <JedliSlide>
            <SiNvidia
              onMouseOver={({ target }) => (target.style.color = "#76b900")}
            />
          </JedliSlide>
          <JedliSlide>
            <SiTesla
              onMouseOver={({ target }) => (target.style.color = "#cc0000")}
            />
          </JedliSlide>
          <JedliSlide>
            <SiTwitch
              onMouseOver={({ target }) => (target.style.color = "#6441a5")}
            />
          </JedliSlide>
          <JedliSlide>
            <SiStarbucks
              onMouseOver={({ target }) => (target.style.color = "#00704A")}
            />
          </JedliSlide>

          <JedliSlide>
            <SiApple
              onMouseOver={({ target }) => (target.style.color = "#A2AAAD")}
            />
          </JedliSlide>

          <JedliSlide>
            <SiAmazon
              onMouseOver={({ target }) => (target.style.color = "#FF9900")}
            />
          </JedliSlide>
        </JedliSlider>
        {/* -------------------------- */}
        <JedliSlider
          speed={30}
          slidesWidth="auto"
          visibleSlides="auto"
          direction="rtl"
          pauseOnHover={false}
          style={{ color: "#c1c1c1" }}
        >
          <JedliSlide style={{ marginLeft: "20px" }}>
            <SiAmazonaws
              style={{ fontSize: "40px", padding: "20px" }}
              onMouseOver={({ target }) => (target.style.color = "#ffffff")}
              onMouseOut={({ target }) => (target.style.color = "#c1c1c1")}
            />
          </JedliSlide>
          <JedliSlide style={{ marginLeft: "20px" }}>
            <SiInfosys
              style={{ fontSize: "70px", padding: "20px" }}
              onMouseOver={({ target }) => (target.style.color = "#ffffff")}
              onMouseOut={({ target }) => (target.style.color = "#c1c1c1")}
            />
          </JedliSlide>

          <JedliSlide style={{ marginLeft: "20px" }}>
            <SiAcer
              style={{ fontSize: "70px", padding: "20px" }}
              onMouseOver={({ target }) => (target.style.color = "#ffffff")}
              onMouseOut={({ target }) => (target.style.color = "#c1c1c1")}
            />
          </JedliSlide>

          <JedliSlide style={{ marginLeft: "20px" }}>
            <SiCoinbase
              style={{ fontSize: "90px", padding: "20px" }}
              onMouseOver={({ target }) => (target.style.color = "#ffffff")}
              onMouseOut={({ target }) => (target.style.color = "#c1c1c1")}
            />
          </JedliSlide>

          <JedliSlide style={{ marginLeft: "20px" }}>
            <SiAsus
              style={{ fontSize: "70px", padding: "20px" }}
              onMouseOver={({ target }) => (target.style.color = "#ffffff")}
              onMouseOut={({ target }) => (target.style.color = "#c1c1c1")}
            />
          </JedliSlide>
          <JedliSlide style={{ marginLeft: "20px" }}>
            <SiAmd
              style={{ fontSize: "70px", padding: "20px" }}
              onMouseOver={({ target }) => (target.style.color = "#ffffff")}
              onMouseOut={({ target }) => (target.style.color = "#c1c1c1")}
            />
          </JedliSlide>
          <JedliSlide style={{ marginLeft: "20px" }}>
            <SiSamsung
              style={{ fontSize: "90px", padding: "20px" }}
              onMouseOver={({ target }) => (target.style.color = "#ffffff")}
              onMouseOut={({ target }) => (target.style.color = "#c1c1c1")}
            />
          </JedliSlide>
          <JedliSlide style={{ marginLeft: "20px" }}>
            <SiActivision
              style={{ fontSize: "80px", padding: "20px" }}
              onMouseOver={({ target }) => (target.style.color = "#ffffff")}
              onMouseOut={({ target }) => (target.style.color = "#c1c1c1")}
            />
          </JedliSlide>
          <JedliSlide style={{ marginLeft: "20px" }}>
            <SiJbl
              style={{ fontSize: "40px", padding: "20px" }}
              onMouseOver={({ target }) => (target.style.color = "#ffffff")}
              onMouseOut={({ target }) => (target.style.color = "#c1c1c1")}
            />
          </JedliSlide>
        </JedliSlider>
      </SliderMain>
    );
  }
}
 export default Slider;

 //styles
const SliderMain = styled.div``;