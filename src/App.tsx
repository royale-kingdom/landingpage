import { Route, Routes } from "react-router";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Top from "./pages/top/";
import Market from "./pages/market/";
import Community from "./pages/community/";
import Header from "./components/Header/";
import { px2vw } from "./utils/px2vw";
import { Footer } from "./components/Footer";
import { Box } from "./components/Box";

const GlobalStyle = createGlobalStyle`
:root {
  font-size: ${px2vw(24)};

  @media (min-width: 768px) {
    font-size: ${px2vw(18)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(16)};
  }
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Lato', sans-serif;
  color: white;
  margin:0 auto;
  padding:0;
  box-sizing: border-box;
  position: relative;
  /* background: #1d1d1d;  */
  background: rgb(20, 20, 25); 
  /* max-width: 1440px; */
  overflow-x: hidden;
  /* &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.08;
    /* mix-blend-mode: hard-light; */
    z-index: -2;
  } */
}

a {
  text-decoration: none;
  color: white;
  &:visited{
    color: inherit;
  }
  &:active {
    color: inherit;
  }
}

`;

const theme = {
  mobile: "768px",
  color: {
    primary: {
      900: "#866527",
      800: "#96712C",
      700: "#A97F32",
      600: "#BE8F38",
      500: "#CA9D4B",
      400: "#D1AA63",
      300: "#D9B87D",
      200: "#E2C89A",
      100: "#EBDABA",
      50: "#F5EDDE"
    },
    accent: {
      900: "#333534",
      800: "#3D403F",
      700: "#494D4C",
      600: "#585D5B",
      500: "#6A706E",
      400: "#7C8381",
      300: "#929896",
      200: "#ACB1AF",
      100: "#CBCECC",
      50: "#EFF0EF"
    },
    success: {
      900: "#1A8A53",
      800: "#1E9D5E",
      700: "#22B26B",
      600: "#27CA7A",
      500: "#39D98A",
      400: "#55DE9A",
      300: "#74E4AC",
      200: "#97EBC1",
      100: "#BEF2D8",
      50: "#E9FBF2"
    },
    info: {
      900: "#1557D9",
      800: "#195FE9",
      700: "#2D6DEB",
      600: "#437CED",
      500: "#5B8DEF",
      400: "#739EF1",
      300: "#8DB0F4",
      200: "#A9C3F7",
      100: "#C7D8FA",
      50: "#E8EFFD"
    },
    warning: {
      900: "#E38202",
      800: "#F78D02",
      700: "#FD9712",
      600: "#FDA129",
      500: "#FDAC42",
      400: "#FDB75B",
      300: "#FDC376",
      200: "#FDD093",
      100: "#FEDEB2",
      50: "#FEEDD4"
    },
    danger: {
      900: "#F10000",
      800: "#FF1818",
      700: "#FF2D2D",
      600: "#FF4444",
      500: "#FF5C5C",
      400: "#FF7474",
      300: "#FF8E8E",
      200: "#FFAAAA",
      100: "#FFC8C8",
      50: "#FFE8E8"
    },
    text: {
      black: "#000000",
      white: "#FFFFFF",
      rare: "linear-gradient(90deg, #667EEA 0%, #764BA2 100%)",
      legend: "linear-gradient(90deg, #43E97B 0%, #38F9D7 100%)",
      mythical: "linear-gradient(90deg, #FA709A 0%, #FEE140 100%)",

      dark: {
        pure: "#28293D",
        semi: "rgba(40, 41, 61, 0.82)",
        neutral: "rgba(40, 41, 61, 0.52)",
        light: "rgba(40, 41, 61, 0.24)",
        disabled: "rgba(40, 41, 61, 0.12)"
      },
      light: {
        pure: "#FAFAFC",
        semi: "rgba(250, 250, 252, 0.82)",
        neutral: "rgba(250, 250, 252, 0.52)",
        light: "rgba(250, 250, 252, 0.24)",
        disabled: "rgba(250, 250, 252, 0.12)"
      }
    },
    opacity: {
      light: {
        100: "#FFFFFF",
        90: "rgba(255, 255, 255, 0.9)",
        80: "rgba(255, 255, 255, 0.8)",
        70: "rgba(255, 255, 255, 0.7)",
        60: "rgba(255, 255, 255, 0.6)",
        50: "rgba(255, 255, 255, 0.5)",
        40: "rgba(255, 255, 255, 0.4)",
        30: "rgba(255, 255, 255, 0.3)",
        20: "rgba(255, 255, 255, 0.2)",
        10: "rgba(255, 255, 255, 0.1)"
      },
      dark: {
        100: "#000000",
        90: "rgba(0, 0, 0, 0.9)",
        80: "rgba(0, 0, 0, 0.8)",
        70: "rgba(0, 0, 0, 0.7)",
        60: "rgba(0, 0, 0, 0.6)",
        50: "rgba(0, 0, 0, 0.5)",
        40: "rgba(0, 0, 0, 0.4)",
        30: "rgba(0, 0, 0, 0.3)",
        20: "rgba(0, 0, 0, 0.2)",
        10: "rgba(0, 0, 0, 0.1)"
      }
    },
    background: {
      background: "#1A1B23",
      foreGround: "#2B2D3B",
      modal: "#45485F"
    },
    boxShadow: [
      "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.32)",
      "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.32)",
      "0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.32)",
      "0px 2px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.32)",
      "0px 2px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.32)",
      "0px 2px 8px rgba(0, 0, 0, 0.08), 0px 20px 32px rgba(0, 0, 0, 0.32)"
    ]
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/market" element={<Market />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Box>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
