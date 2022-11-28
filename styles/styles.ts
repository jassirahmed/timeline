import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

// Global style overrides.
const styles = {
  global: (props: GlobalStyleProps) => {
    return {
      html: {
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100%",
      },
      main: {
        flex: "1 0 auto",
      },
      // Scrollbars.
      "*::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
      },
      "*::-webkit-scrollbar-track": {
        background: "#333",
      },
      "::-webkit-scrollbar-thumb": {
        background: "transparent",
      },
      "::-webkit-scrollbar-corner": {
        background: "transparent",
      },
      // input placeholder style
      "::-webkit-input-placeholder": {
        color: "gray.500",
        overflow: "visible",
      },
    };
  },
};

export default styles;
