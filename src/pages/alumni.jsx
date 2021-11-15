import React from "react";
import styled from "styled-components";
import { baseColor } from "styles/base";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Alumni() {
  return (
    <AlumniContainer>
      <Header>
        <SocialLink>
          <h1>Alumni netwrok</h1>
          <p>
            Alumni serve many valuable roles, such as helping to build and grow
            an institution's brand through word-of-mouth marketing. For
            instance, positive posts on social media can create buzz and
            increase application rates. Colleges also rely on alumni to provide
            mentoring, internships, and career opportunities to students
          </p>
          <ul>
            <li>
              <a>
                <BsInstagram color="#833AB4" />
              </a>
            </li>
            <li>
              <a>
                <BsLinkedin color="blue" />
              </a>
            </li>
            <li>
              <a>
                <SiGmail color="red" />
              </a>
            </li>
          </ul>
        </SocialLink>
        <BgImage>
          <img src={"images/sol2.jpg"} alt="" />
        </BgImage>
      </Header>

      <Imgbar>
        <h1>Our Gems</h1>
        <Imgsm>
          <img src="/images/profile4.png" />
        </Imgsm>
        <Imgsm>
          <img src="/images/profile4.png" />
        </Imgsm>
        <Imgsm>
          <img src="/images/profile4.png" />
        </Imgsm>
      </Imgbar>

      <TheBody>
        <Topics>
          <h1>Hot Discussions</h1>
          <h2>
            #1.&nbsp; <span></span>&nbsp; How might I check the situation with
            my request?
          </h2>
          <h2>
            #1.&nbsp; <span></span>&nbsp; How might I check the situation with
            my request?
          </h2>
          <h2>
            #1.&nbsp; <span></span>&nbsp; How might I check the situation with
            my request?
          </h2>
          <h2>
            #1.&nbsp; <span></span>&nbsp; How might I check the situation with
            my request?
          </h2>
          <h2>
            #1.&nbsp; <span></span>&nbsp; How might I check the situation with
            my request?
          </h2>
          <h2>
            #1.&nbsp; <span></span>&nbsp; How might I check the situation with
            my request?
          </h2>

          <h1>Ask Question</h1>
          <textarea name="Query?" id="" cols="20" rows="1"></textarea>
        </Topics>
        <Theme>
          <img src="/images/msging1.jpg" />
        </Theme>
      </TheBody>
      <Companies>
        <Main>
          <Imgsm>
            <img src="/images/profile4.png" />
          </Imgsm>
          <Imgsm>
            <img src="/images/profile4.png" />
          </Imgsm>
          <Imgsm>
            <img src="/images/profile4.png" />
          </Imgsm>
        </Main>
      </Companies>
    </AlumniContainer>
  );
}

export default Alumni;

// style

const AlumniContainer = styled.div``;

const Header = styled.section`
  margin: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  color: #3d9be9;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const BgImage = styled.div`
  padding: 10px;
  width: 600px;
  display: block;
  @media (max-width: 870px) {
    display: none;
  }
  img {
    border-radius: 20px;
    width: 100%;
    height: auto;
  }
`;
const SocialLink = styled.div`
  max-width: 500px;
  margin: 10px;
  position: relative;
  padding-bottom: 50px;

  h1 {
    text-align: center;
    margin: 10px;
  }
  p {
    color: #999999;
    font-size: 16px;
  }
  ul {
    position: absolute;
    bottom: 50px;
    display: flex;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    li {
      list-style: none;
      margin: 0 10px;
      opacity: 1;
      a {
        color: white;
        font-size: 20px;
      }
    }
  }
`;
const Imgbar = styled.section`
  margin: 0px;
  border-radius: 0px;
  background: rgba(255, 255, 255, 0.05);
  color: #3d9be9;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    margin: 10px;
  }
`;
const Imgsm = styled.div`
  margin: 10px;
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid rgba(0, 0, 0, 0.25);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
    border: 0px solid rgba(0, 0, 0, 0.25);
  }
`;

const TheBody = styled.section`
  position: relative;
  margin: 20px;
  border-radius: 20px;
  background: #fff;
  color: #3d9be9;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const Topics = styled.section`
  z-index: 2;
  margin: 20px;
  position: absolute;
  top: 8px;
  left: 16px;
  h1 {
    font-size: 30px;
    @media (max-width: 870px) {
      font-size: 25px;
    }
  }
  h2 {
    font-size: 20px;
    color: black;
    @media (max-width: 870px) {
      font-size: 16px;
      
    }
  }
`;

const Theme = styled.section`
  padding: 10px;
  position: relative;
  width: 600px;
  @media (max-width: 1200px) {
    width: 500px;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  img {
    border-radius: 20px;
    width: 100%;
    height: auto;
    @media (max-width: 1000px) {
      opacity: 0.6;
    }
  }
`;
const Companies = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 0px;
  background: white;
  color: #3d9be9;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Main = styled.div`
  margin: 10px;
  border-radius: 0px;
  background: rgba(255, 255, 255, 0.05);
  color: #3d9be9;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
