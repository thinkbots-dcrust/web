import Footer from "containers/Footer";
import NavBar from "containers/NavBar";

import styled from "styled-components";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import FlipCard from "components/FlipCard/Flipcard";
// props to be received from the backend...... props include info regarding the person
function ProfilePage() {
  return (
    <ProfileOuter>
      <ProfileContainer>
        <UpperProfile>
          <FlipcardSection>
            {/* need to add fliping card */}
            {/* the flip card needs to have 40% of the space */}
            <FlipCard />
          </FlipcardSection>
          {/*  */}
          <RightProfileSection>
            <InfoSection>
              {/* need to add info here */}
              <UpperInfoSection>
                {/* 
                   -Name (h2)
                   -current rating
                   -edit icon(h3)
                */}
                <h2>Leo Messi</h2>
              </UpperInfoSection>
              <MainInfoSection>
                {/* 
                  -username
                  -country
                  -state
                  -city
                  -Institution
                  -branch
                  -year
                  -gender
                */}

                <h3>username : </h3>
                <h3>country : </h3>
                <h3>state : </h3>
                <h3>city : </h3>
                <h3>Institution : </h3>
                <h3>branch : </h3>
                <h3>year : </h3>
                <h3>gender : </h3>
              </MainInfoSection>
              <LowerInfoSection>
                {/* 
                   -social links
                      -insta
                      -linkedin
                */}
              </LowerInfoSection>
            </InfoSection>
          </RightProfileSection>
        </UpperProfile>
        {/*  */}
        <PastPerformancesSection>
          {/* need to add past performances here */}
          {/* just show the contests cards */}
        </PastPerformancesSection>
        {/*  */}
      </ProfileContainer>
    </ProfileOuter>
  );
}

export default ProfilePage;

const ProfileOuter = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 70%;
  padding: 1em;
  background-color: #643a7a;
  border-radius: 1rem;
  margin-top: -4em;
  box-shadow: 0.5rem 1rem 1rem rgba(100, 58, 122, 0.5);
`;

const RightProfileSection = styled.div`
  padding: 1em;
`;

const UpperProfile = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-self: center;
  align-content: center;
`;
const FlipcardSection = styled.div`
  margin-top: 1.8em;
  min-width: 50%;
  min-height: 100%;
`;

const InfoSection = styled.div`
  display: flex;
  min-width: 60%;
  min-height: 100%;
  flex-direction: column;
  justify-content: start;
  margin: 4.5em 3em;
`;
const PastPerformancesSection = styled.div``;
const UpperInfoSection = styled.div`
  h2 {
    font-size: 1.8rem;
  }
`;
const MainInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    padding: 0.1em;
    color: whitesmoke;
  }
`;
const LowerInfoSection = styled.div``;
