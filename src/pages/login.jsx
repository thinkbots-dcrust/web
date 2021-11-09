import styled from "styled-components";
import { baseColor } from "styles/base";
import logo from "assets/thinkbots_main_logo.svg";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={logo} />

          <Signup>
            <button>Signup</button>
            <button>Login</button>
          </Signup>

          <Description>Begin your Journey to be a Thinkbotian</Description>
          <CTALogoTwo src="/images/music.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("images/sol1.jpg");
  opacity: 0.5;
  position: absolute;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: 5%;
  margin-left: 0px;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin: 0px;
  max-width: 220px;
  min-height: 1px;
  display: block;
  width: 100%;
  top:0;
  border-radius: 50px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 0px;
  margin-top: 0px;
  max-width: 220px;
  display: block;
  width: 100%;
`;

const Signup = styled.div`
  float: left;
  button {
    color: #f9f9f9;
    background-color: rgba(255, 255, 255, 0.09);
    margin-top: 0;
    margin-bottom: 12px;
    margin-left: 10px;
    margin-right: 10px;
    letter-spacing: 1.5px;
    font-size: 20px;
    padding: 10px 40px;
    border: 1px solid transparent;
    border-radius: 20px;

    &:hover {
      background-color: #3d9be9;
    }
    @media (max-width: 950px) {
      font-size: 20px;
    }
    @media (max-width: 660px) {
      font-size: 18px;
      padding: 10px 30px;
    }

    @media (max-width: 400px) {
      font-size: 16px;
      padding: 8px 20px;
    }
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 14px;
  max-width: 600px;
  width: 100%;
  margin: 0;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;

export default Login;
