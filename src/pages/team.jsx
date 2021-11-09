import styled from "styled-components";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";


function Team() {
  return (
    <MainWrapper>
      <Title>
        Meet Our Team <hr />
      </Title>
      <Conatiner>
        <Card>
          <Content>
            <ImgBox>
              <img src="/images/profile4.png" alt='fuck server'/>
            </ImgBox>
            <ContentBox>
              <h2>
                Siddharth
                <br />
                <span>Web Devloper</span>
              </h2>
            </ContentBox>
          </Content>
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
        </Card>
        <Card>
          <Content>
            <ImgBox>
              <img src="/images/profile4.png" />
            </ImgBox>
            <ContentBox>
              <h2>
                Siddharth
                <br />
                <span>Web Devloper</span>
              </h2>
            </ContentBox>
          </Content>
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
        </Card>
        <Card>
          <Content>
            <ImgBox>
              <img src="/images/profile4.png" />
            </ImgBox>
            <ContentBox>
              <h2>
                Siddharth
                <br />
                <span>Web Devloper</span>
              </h2>
            </ContentBox>
          </Content>
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
        </Card>
        <Card>
          <Content>
            <ImgBox>
              <img src="/images/profile4.png" />
            </ImgBox>
            <ContentBox>
              <h2>
                Siddharth
                <br />
                <span>Web Devloper</span>
              </h2>
            </ContentBox>
          </Content>
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
        </Card>
      </Conatiner>
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 254, 1) 50%,
      rgba(61, 155, 233, 1) 100%
    );
    clip-path: circle(10% at 70% 80%);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.7) 0%,
      rgba(255, 0, 254, 1) 20%
    );
    clip-path: circle(10% at 10% 50%);

  }
`;

const Title = styled.div`
  text-align: center;
  margin-top: 150px;
  color: #3d9be9;
  font-size: 64px;
  position: relative;
  
  hr {
    width: 50%;
    margin: auto;
    border: 1px solid #3d9be9;
    margin-bottom: 20px;
  }
  @media (max-width: 950px) {
    font-size: 50px;
  }
  @media (max-width: 660px) {
    font-size: 30px;
    margin-top: 100px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const Conatiner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
  padding-bottom: 100px;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 950px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (max-width: 660px) {
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 70px;
  }
  @media (max-width: 400px) {
    padding-bottom: 50px;
  }
`;
const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  margin: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  ul {
    position: absolute;
    bottom: 50px;
    display: flex;
    li {
      list-style: none;
      margin: 0 10px;
      transform: translateY(40px);
      transition: 0.5s;
      opacity: 0;
      transition-delay: calc(li);
      a {
        color: white;
        font-size: 20px;
      }
      a {
        @media (max-width: 500px) {
          font-size: 15px;
        }
      }
    }
  }
  &:hover {
    backdrop-filter: blur(5px);
    li {
      transform: translateY(10px);
      opacity: 1;
    }
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 300px;
    margin: 5px;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.7;
  transition: 0.5s;

  ${Card}:hover & {
    opacity: 1;
  }
`;
const ImgBox = styled.div`
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
    width: 100px;
    height: 100px;
  }
`;
const ContentBox = styled.div`
  h2 {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 10px;
    line-height: 1.1em;
    span {
      font-size: 12px;
      font-weight: 300;
      text-transform: initial;
    }
    @media (max-width: 500px) {
        font-size: 12px;
    }
}
`;
export default Team;
