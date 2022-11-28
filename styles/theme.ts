import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const breakpoints = {
  sm: "32em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};
const theme = extendTheme({
  config,
  breakpoints,
});

export default theme;
