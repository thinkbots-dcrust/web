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
          <InfoSection>
            {/* need to add info here */}
            <UpperInfoSection>
              {/* 
                   -Name (h2)
                   -current rating
                   -edit icon(h4)
                */}
              <h2>Name Surame</h2>
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
              <h4>username</h4>
              <h4>username</h4>
              <h4>username</h4>
              <h4>username</h4>
              <h4>username</h4>
              <h4>username</h4>
              <h4>username</h4>
              <h4>username</h4>
            </MainInfoSection>
            <LowerInfoSection>
              {/* 
                   -social links
                      -insta
                      -linkedin
                */}
            </LowerInfoSection>
          </InfoSection>
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
  background-color: #643a7a;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const UpperProfile = styled.div`
  display: flex;
  height: 100%;
`;
const FlipcardSection = styled.div``;
const InfoSection = styled.div``;
const PastPerformancesSection = styled.div``;
const UpperInfoSection = styled.div`
  h4 {
    color: whitesmoke;
  }
`;
const MainInfoSection = styled.div``;
const LowerInfoSection = styled.div``;
