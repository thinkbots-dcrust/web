import styled from "styled-components";

function Faq() {
  return (
    <MainWrapper>
      <Title>
        Frequently Asked Questions (FAQs)
        <hr />
      </Title>
      <Conatiner>
        <Card>
          <h1>
            Q.&nbsp; <span></span>&nbsp; Where are your items transported from?
          </h1>
        </Card>

        <Content>
          <h1>
            A.&nbsp; <span></span>&nbsp; Assumenda maiores inventore doloribus
            officia commodi a placeat
          </h1>
        </Content>
      </Conatiner>
      <Conatiner>
        <Card>
          <h1>
            Q.&nbsp; <span></span>&nbsp; How might I check the situation with my
            request?
          </h1>
        </Card>
        <Content>
          <h1>
            A.&nbsp; <span></span>&nbsp; Assumenda maiores inventore doloribus
            officia commodi a placeat, illo nostrum. 
          </h1>
        </Content>
      </Conatiner>
      <Conatiner>
        <Card>
          <h1>
            Q.&nbsp; <span></span>&nbsp; Where is Clothing Shop Online based?
          </h1>
        </Card>
        <Content>
          <h1>
            A.&nbsp; <span></span>&nbsp; Assumenda maiores inventore doloribus
            officia commodi a placeat, illo nostrum.
          </h1>
        </Content>
      </Conatiner>
      <Conatiner>
        <Card>
          <h1>
            Q.&nbsp; <span></span>&nbsp; I got some unacceptable products, what
            do I do?
          </h1>
        </Card>
        <Content>
          <h1>
            A.&nbsp; <span></span>&nbsp;  Officia doloremque illum
            eum aliquam perspiciatis odio!
          </h1>
        </Content>
      </Conatiner>
      <Conatiner>
        <Card>
          <h1>
            Q.&nbsp; <span></span>&nbsp; Where are your items transported from?
          </h1>
        </Card>

        <Content>
          <h1>
            A.&nbsp; <span></span>&nbsp; Assumenda maiores inventore doloribus
            officia commodi a placeat
          </h1>
        </Content>
      </Conatiner>
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
  position: relative;
  padding-bottom: 30px;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 150px;
  color: #3d9be9;
  font-size: 64px;
  position: relative;
  hr {
    width: 85%;
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
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 50px;
  backdrop-filter: blur(5px);
  border-radius: 15px;
  width: 80%;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0px 15px rgba(175, 212, 255, 0.2);
  @media (max-width: 950px) {
    margin-top: 35px;
  }
  @media (max-width: 660px) {
    margin-top: 30px;
    width: 85%;
  }
`;
const Card = styled.div`
  color: #3d9be9;
  position: relative;
  height: auto;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  span {
    border-left: 4px solid #999999;
    height: 700px;
  }
  h1 {
    font-size: 20px;
    @media (max-width: 950px) {
      font-size: 20px;
    }
    @media (max-width: 660px) {
      font-size: 18px;
      span {
        border-left: 2px solid #999999;
      }
    }
    @media (max-width: 400px) {
      font-size: 16px;
      span {
        border-left: 2px solid #999999;
      }
    }
  }
  @media (max-width: 950px) {
    padding-bottom: 15px;
  }
  @media (max-width: 660px) {
    padding-bottom: 10px;
  }
  @media (max-width: 400px) {
    padding-bottom: 5px;
  }
`;

const Content = styled.div`
  color: #999999;
  position: relative;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: start;
  width: 100%;
  align-items: center;
  span {
    border-left: 4px solid #3d9be9;
    height: 700px;
  }
  h1 {
    font-size: 20px;
  }
  @media (max-width: 950px) {
    h1 {
      font-size: 20px;
    }
  }
  @media (max-width: 660px) {
    h1 {
      font-size: 18px;
      span {
        border-left: 2px solid #3d9be9;
      }
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 16px;
      span {
        border-left: 2px solid #3d9be9;
      }
    }
  }
  @media (max-width: 950px) {
    padding-top: 15px;
  }
  @media (max-width: 660px) {
    padding-top: 10px;
  }
  @media (max-width: 400px) {
    padding-top: 5px;
  }
`;

export default Faq;
