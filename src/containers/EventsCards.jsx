import styled from "styled-components";
import { baseColor, baseStyle } from "styles/base";
import { Button } from "components";
import { getDeviceType } from "helpers";

const sampleEventImageUrl =
	"https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?size=626&ext=jpg";
const sampleDescriptioin =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not onlyfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s witthe release of Letraset sheets containing Lorem Ipsum passages, more recently with desktop publishing software like Aldus Pincluding versions of Lorem Ipsum.";

export default function EventsCards() {
	return (
		<MainWrapper>
			<EventTitleImage src={sampleEventImageUrl} alt=" "></EventTitleImage>
			<EventContentWrapper>
				<Title>Sample Event Title</Title>
				<Description>{sampleDescriptioin.substring(0, 240)}...</Description>
				<ViewDetailsBtn type="primary">View Details</ViewDetailsBtn>
			</EventContentWrapper>
		</MainWrapper>
	);
}

const MainWrapper = styled.div`
  background-color: ${baseColor.surface};
  height: 500px;
  width: 500px;
  margin: 30px 40px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${baseStyle.boxShadowMild};
  color: ${baseColor.onBackground};
  ${getDeviceType() === "mobile" &&
  `
        margin: 10px;
        width: 500px;
	`}
`;
const ViewDetailsBtn = styled(Button)`
	margin-top: 10px;
`;
const EventContentWrapper = styled.div`
	padding: 10px 30px;
	position: relative;
	height: 100%;
`;

const Description = styled.div`
	color: ${baseColor.onBackgroundLite};
	height: 120px;
	overflow: hidden;
`;

const EventTitleImage = styled.img`
	width: 100%;
	height: 50%;
	object-fit: cover;
`;

const Title = styled.h2``;
