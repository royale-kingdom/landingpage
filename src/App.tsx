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

body {
  font-family: 'Lato', sans-serif;
  color: white;
  margin:0;
  padding:0;
  box-sizing: border-box;
  background: #1D1D1D;
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
  mobile: "768px"
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
