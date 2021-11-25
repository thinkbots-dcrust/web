import Footer from "containers/Footer";
import NavBar from "containers/NavBar";

import styled from "styled-components";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
// props to be received from the backend...... props include info regarding the person
function ProfilePage() {
  return (
    <ProfileOuter>
      <ProfileContainer>
        <FlipcardSection>
          {/* need to add fliping card */}
          {/* the flip card needs to have 40% of the space */}
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
          </MainInfoSection>
          <LowerInfoSection>
            {/* 
                   -social links
                      -insta
                      -linkedin
                */}
          </LowerInfoSection>
        </InfoSection>
        {/*  */}
        <PastPerformancesSection>
          {/* need to add past performances here */}
          {/* just show the contests cards */}
        </PastPerformancesSection>
        {/*  */}
      </ProfileContainer>
      <Footer />
    </ProfileOuter>
  );
}

export default ProfilePage;

const ProfileOuter = styled.div``;
const ProfileContainer = styled.div``;

const FlipcardSection = styled.div``;
const InfoSection = styled.div``;
const PastPerformancesSection = styled.div``;
const UpperInfoSection = styled.div``;
const MainInfoSection = styled.div``;
const LowerInfoSection = styled.div``;
