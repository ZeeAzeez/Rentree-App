import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const COLORS = {
  // base colors
  primary: "#3F9243", // Dark Blue
  secondary: "#FF615F", // peach

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#F5F7F9",
  lightGray2: "#FAFBFD",
  gray: "#BEC1D2",
  blue: "#42B0FF",
  darkgray: "#898C95",
  lightBlue: "#95A9B8",
  darkgreen: "#008159",
  peach: "#FF615F",
  purple: "#8e44ad",
  red: "#FF0000",
  transparent: "transparent",
};

const SIZES = {
  xsmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 44,
  height,
  width,
};

const TEXTSIZES = {
  xxsmall: 10,
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 21,
  xlarge: 27,
  xxlarge: 35,
};

const FONTS = {
  regular: "Montserrat-Regular",
  bold: "Montserrat-Bold",
  medium: "Montserrat-Medium",
  semiBold: "Montserrat-SemiBold",
  light: "Montserrat-Thin",
  xtrabold: "Montserrat-ExtraBold",
  xtralight: "Montserrat-ExtraLight",
};

const SHADOWS = {
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
};

export { COLORS, SIZES, FONTS, TEXTSIZES };
