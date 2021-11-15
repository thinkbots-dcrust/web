import EventsCards from "containers/EventsCards";
import { getDeviceType } from "helpers";
import styled from "styled-components";
import { baseColor, baseStyle } from "styles/base";
import { useState } from "react";

export default function Events() {
	const [activeBtn, setActiveBtn] = useState("all"); // "all" || "up" || "past"
	return (
		<MainWrapper>
			<TitleBar>
				<Title
					isActive={activeBtn === "all"}
					onClick={() => {
						setActiveBtn("all");
					}}
				>
					All Events
				</Title>
				<Title
					isActive={activeBtn === "up"}
					onClick={() => {
						setActiveBtn("up");
					}}
				>
					Upcoming Events
				</Title>
				<Title
					isActive={activeBtn === "past"}
					onClick={() => {
						setActiveBtn("past");
					}}
				>
					Past Events
				</Title>
			</TitleBar>
			<EventsContainer>
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
			</EventsContainer>
		</MainWrapper>
	);
}

const EventsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

const MainWrapper = styled.div`
	color: ${baseColor.onBackground};
	padding: ${baseStyle.leftMainMargin};
	padding-top: 5%;
	padding-bottom: 5%;
`;
const TitleBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: nowrap;
`;

const Title = styled.div`
	font-size: ${baseStyle.mainHeadingFont};
	margin-left: 50px;
	cursor: pointer;
	padding: 10px 0;

	${(props) =>
		props.isActive &&
		`
		color:${baseColor.primary};
		`}

	${getDeviceType() === "mobile" &&
	`
		font-size:${baseStyle.mainTextFont};
		margin-left:5%;
	`}
`;
