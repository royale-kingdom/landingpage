import styled from "styled-components";

import { BaseButton } from "../../components/Button";
import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";

import HeroDesktopLogo from "../../assets/images/landingpage/hero_logo_desktop.png";
import HeroDesktopImg from "../../assets/images/landingpage/hero_desktop.png";
import HeroMobileImg from "../../assets/images/landingpage/hero_mobile.png";
import Button2 from "../../assets/images/landingpage/Button2.svg";

const Hero = () => {
  return (
    <Container>
      <Logo />

      <Box
        position={"absolute"}
        transform="translate(-50%, 50%)"
        left="50%"
        bottom="30%"
        sm={{ bottom: "unset", top: "55%" }}
      >
        <BaseButton
          style={{
            backgroundImage: `url(${Button2})`,
            backgroundRepeat: "no-repeat",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundPosition: "center center",
            backgroundSize: "contain"
          }}
          fontSize="24px"
          padding="25px 40px"
          sm={{
            fontSize: "1.8rem",
            padding: "0 1rem",
            width: "236px",
            height: "74px"
          }}
          color="rgba(245, 237, 222, 1)"
        >
          <Text fontWeight="bold" padding="0 16px" sm={{ fontSize: "14px" }}>
            ENTER MY KINGDOM
          </Text>
        </BaseButton>
        <Box>
          <Text
            fontWeight="bold"
            padding="0 16px"
            justify="center"
            sm={{ fontSize: "14px" }}
          >
            <a href="https://marketplace-dev.royalekingdom.com/marketplace">
              Go to Marketplace
            </a>
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;

// Ratio height: 900px; width: 1440px
const Container = styled.div`
  width: 100vw;
  height: 48vw;
  min-height: 820px;
  position: relative;
  z-index: 0;
  /* background: green; */
  background-image: url("${HeroDesktopImg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 70%;
  @media (max-width: 768px) {
    background-image: url("${HeroMobileImg}");
    height: 100vh;
  }
`;

const Logo = styled.div`
  position: absolute;
  z-index: 2;
  width: 43.8vw;
  height: 19.6vw;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  background-image: url("${HeroDesktopLogo}");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    width: 380px;
    height: 172px;
    top: 35%;
  }
`;
