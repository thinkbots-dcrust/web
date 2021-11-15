import { getDeviceType } from "helpers";

export const baseColor = {
  primary: "#3D9BE9",
  primaryVariant: "#3700B3",
  secondary: "#c2b0ef",
  background: "#131313",
  surface: "#232324",
  error: "rgb(207, 102, 121)",
  onPrimary: "#ffffff",
  onPrimaryLite: "#d6d6d6",
  onPrimaryVeryLite: "#a1a1a1",
  onSecondary: "#000000",
  onBackground: "#ffffff",
  onBackgroundLite: "#555555",
  onBackgroundVeryLite: "#333333",
  onSurface: "#FFFFFF",
  onError: "#FFFFFF",
  lightPrimary: "#7633fb",
  lightOnBackground: "#999999",
};

export const baseStyle =
	getDeviceType() === "mobile"
		? {
				mainHeadingFont: "38px",
				subHeadingFont: "26px",
				mainTextFont: "18px",
				subTextFont: "16px",
				smallTextFont: "12px",
				btnPadding: "8px 20px",
				leftMainMargin: "10px",
				rightMainMargin: "10px",
				btnBorderRadius: "20px",
				boxShadowMild: "10px 10px 10px rgba(0, 0, 0, 0.2)",
		  }
		: {
				mainHeadingFont: "38px",
				subHeadingFont: "26px",
				mainTextFont: "18px",
				subTextFont: "16px",
				smallTextFont: "12px",
				btnPadding: "8px 20px",
				leftMainMargin: "100px",
				rightMainMargin: "100px",
				btnBorderRadius: "20px",
				boxShadowMild: "10px 10px 10px rgba(0, 0, 0, 0.2)",
		  };
