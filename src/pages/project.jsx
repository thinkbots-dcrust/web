import React from 'react'
import styled from "styled-components";
import EventsCards from "containers/EventsCards";
import { getDeviceType } from "helpers";

function Project() {
    return (
      <MainWrapper>
        <Header>
          <img src="/images/paid/project1.jfif" alt="img-error" />
        </Header>
        <TheBody>
          <EventsCards />
          <EventsCards />
          <EventsCards />
          <EventsCards />
          <EventsCards />
          <EventsCards />
          <EventsCards />
          <EventsCards />
          <EventsCards />
          <EventsCards />
          <EventsCards />
        </TheBody>
        <Header>
          <img src="/images/paid/project3.jfif" alt="img-error" />
        </Header>
      </MainWrapper>
    );
}

//styles
const MainWrapper = styled.div`
`;
const Header = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom:10px;
  img {
    border-radius: 20px;
    filter: brightness(90%);
    width: 70%;
    height: 100%;
    ${getDeviceType() === "mobile" &&
    `
        width: 100%;
	`}
  }
`;
const TheBody = styled.section``;
export default Project
