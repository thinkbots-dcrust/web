import React from "react";
import styled from "styled-components";
import {
  BsLinkedin,
  BsInstagram,
  BsFillTelephoneForwardFill,
  BsFillSuitHeartFill,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { ImLocation } from "react-icons/im";
import { baseColor } from "styles/base";
import Logo from "assets/thinkbots_main_logo.svg";
export default function Footer() {
	return (
		<Foot>
			<Contain>
				<Col2>
					<h1>Social</h1>
					<ul>
						<li>
							<BsLinkedin />
							<LabelStyled>Linkded</LabelStyled>
						</li>
						<li>
							<BsInstagram />
							<LabelStyled>Instagram</LabelStyled>
						</li>
						<li>
							<SiGmail />
							<LabelStyled>Mail</LabelStyled>
						</li>
					</ul>
				</Col2>
				<Col1>
					<h1>Contact us</h1>
					<ul>
						<li>
							<BsFillTelephoneForwardFill />
							<LabelStyled>9900887766</LabelStyled>
						</li>
						<li>
							<BsFillTelephoneForwardFill />
							<LabelStyled>9900887766</LabelStyled>
						</li>
						<li>
							<ImLocation />
							<LabelStyled>
								{" "}
								50th K.M.Stone, NH1, Murthal, Haryana 131039
							</LabelStyled>
						</li>
					</ul>
				</Col1>
			</Contain>
			<Lines>
				<p>All Rights Reserved | DCRUST 2021 </p>
				<p> Built by <StyledImg src={Logo} /> with <BsFillSuitHeartFill color='red'/></p>
			</Lines>
		</Foot>
	);
}

const StyledImg = styled.img`
  width: 50px;
  margin:0;
  margin-top: -25px;
  vertical-align: -20px;
  padding:0;
`;
const LabelStyled = styled.span`
	margin-left: 8px;
	transform: translateY(-2px);
`;

const Foot = styled.div`
	background-color: black;
	color: white;
	width: 100%;
	padding-top: 10px;
	text-align: center;
	position: absolute;
	border-radius: 20px 20px 0 0;
	border-top-style: solid;
	border-color: #3d9be9;
	left: 0;
	margin-left: 0px;
`;

const Col1 = styled.div`
	display: inline-block;
	width: auto;
	text-align: start;
	padding-left: 100px;
	vertical-align: top;
	@media only screen and (max-width: 950px) {
		width: 50%;
		padding-left: 10px;
	}
	@media only screen and (max-width: 500px) {
		width: 50%;
	}
	@media only screen and (max-width: 340px) {
		padding-left: 10px;
	}
	h1 {
		margin: 0;
		padding: 0;
		font-family: inherit;
		font-size: 20px;
		line-height: 20px;
		color: #3d9be9;
		font-weight: normal;
		text-transform: uppercase;
		letter-spacing: 0.25em;
		padding: 10px;
		@media only screen and (max-width: 950px) {
			font-size: 14px;
		}
		@media only screen and (max-width: 340px) {
			font-size: 12px;
		}
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	li {
		color: #999999;
		font-size: 18px;
		font-family: inherit;
		font-weight: bold;
		padding: 10px 20px;
		border-radius: 20px;
		transition: 0.2s;
		-webkit-transition: 0.2s;
		-moz-transition: 0.2s;
		margin-top: 10px;
		@media only screen and (max-width: 950px) {
			font-size: 12px;
		}
		@media only screen and (max-width: 500px) {
			font-size: 11px;
			margin-top: 5px;
			padding: 8px 16px;
		}
		@media only screen and (max-width: 340px) {
			font-size: 10px;
		}
	}
`;
const Col2 = styled.div`
	display: inline-block;
	width: auto;
	text-align: start;
	padding-left: 100px;
	vertical-align: baseline;
	@media only screen and (max-width: 950px) {
		width: 30%;
		padding-left: 50px;
	}

	@media only screen and (max-width: 340px) {
		padding-left: 0px;
	}
	h1 {
		margin: 0;
		padding: 0;
		font-family: inherit;
		font-size: 20px;
		line-height: 20px;
		color: #3d9be9;
		font-weight: normal;
		text-transform: uppercase;
		letter-spacing: 0.25em;
		padding: 10px;
		@media only screen and (max-width: 950px) {
			font-size: 16px;
		}
		@media only screen and (max-width: 500px) {
			font-size: 14px;
		}
		@media only screen and (max-width: 340px) {
			font-size: 12px;
		}
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	li {
		color: ${baseColor.lightOnBackground};
		font-size: 18px;
		font-family: inherit;
		font-weight: bold;
		padding: 10px 20px;
		border-radius: 20px;
		display: flex;

		transition: 0.2s;
		-webkit-transition: 0.2s;
		-moz-transition: 0.2s;
		margin-top: 10px;
		@media only screen and (max-width: 950px) {
			font-size: 12px;
		}
		@media only screen and (max-width: 500px) {
			font-size: 11px;
			margin-top: 5px;
			padding: 8px 16px;
		}
		@media only screen and (max-width: 340px) {
			font-size: 10px;
		}
	}
	li:hover {
		color: black;
		background-color: #3d9be9;
		transition: 0.1s;
		-webkit-transition: 0.1s;
		-moz-transition: 0.1s;
	}
`;

const Contain = styled.div``;

const Lines = styled.div`
  font-size: 14px;
  padding-top: 20px;
  letter-spacing: 0.2em;
  @media only screen and (max-width: 950px) {
    font-size: 11px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 340px) {
    font-size: 10px;
  }
  p {
    padding-bottom: 5px;
    svg {
      vertical-align: -10%;
    }
  }
`;
