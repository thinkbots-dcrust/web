import styled from "styled-components";
import { baseColor, baseStyle } from "styles/base";
import { Button } from "components";
import { getDeviceType } from "helpers";

const sampleEventImageUrl =
  "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?size=626&ext=jpg";
const sampleDescriptioin =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not onlyfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s witthe release of Letraset sheets containing Lorem Ipsum passages, more recently with desktop publishing software like Aldus Pincluding versions of Lorem Ipsum.";

export default function ProjectCard() {
  return (
    <MainWrapper>
      <EventTitleImage src='/images/sol3.jpg' alt=" "></EventTitleImage>
      <EventContentWrapper>
        <Title>Sample Title</Title>
        <Description>{sampleDescriptioin.substring(0, 240)}...</Description>
      </EventContentWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  margin: 20px 50px 20px 0 ;
  overflow: hidden; 
  box-sizing: border-box;
  min-width: 400px;
  min-height: 300px;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${baseStyle.boxShadowMild};
  ${getDeviceType() === "mobile" &&
  `     margin: 10px;
        margin-bottom: 20px;
        min-width: 200px;
        min-height: 300px;
	`}
`;
const EventContentWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -210px;
  margin: 30px;
  padding: 25px 40px;
  background-image: linear-gradient(
    135deg,
    rgba(255 255 255 / 0.66),
    rgba(255 255 255 / 0.33)
  );
  border-radius: 1rem;
  transition: all 450ms ease-in-out;
  backdrop-filter: blur(5px);
  ${MainWrapper}:hover & {
    bottom: -50px;
  }
  ${getDeviceType() === "mobile" &&
  `     bottom: -190px;
  margin: 10px;
  padding: 20px;
    ${MainWrapper}:hover & {
        bottom: -20px;
    }
	`}
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 1.2;
  ${getDeviceType() === "mobile" &&
  `     font-size: ${baseStyle.smallTextFont};
	`}
`;

const EventTitleImage = styled.img`
  opacity: 0.9;
  object-fit: cover;
  background-position: center;
  /* background-size: cover; */
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transition: all 600ms ease-in-out;
  ${MainWrapper}:hover & {
    transform: scale(1.08);
  }
`;

const Title = styled.h2`
  font-size: 22.4px;
  margin-bottom: 0.55em;
  ${getDeviceType() === "mobile" &&
  `     font-size: ${baseStyle.subTextFont};
	`}
`;
