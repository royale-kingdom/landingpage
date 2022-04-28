import styled from "styled-components";

// import GoldenHeader from "../../components/GoldenHeader";
import { BaseButton } from "../../components/Button";
import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";

// import MaleImg from "../../assets/images/landingpage/hero_male.png";
import HeroDesktopLogo from "../../assets/images/landingpage/hero_logo_desktop.png";
// import HeroDesktopImg from "../../assets/images/landingpage/hero_desktop.png";
import HeroDesktopImg from "../../assets/images/landingpage/hero_desktop_final.png";
// import DragonImg from "../../assets/images/landingpage/hero_dragon.png";
// import PyramidImg from "../../assets/images/landingpage/hero_pyramid.png";
// import SparkImg from "../../assets/images/landingpage/hero_male.png";
import Button2 from "../../assets/images/landingpage/Button2.svg";
// import MaleImg from "../../assets/images/intro_male.png";

const Hero = () => {
  return (
    <Container>
      {/* <GoldenHeader>Prologue</GoldenHeader> */}
      {/* <Male />
      <Dragon />

      <Pyramid /> */}

      <Logo />

      <Box
        position={"absolute"}
        transform="translate(-50%, 50%)"
        left="50%"
        bottom="20%"
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
          sm={{ fontSize: "1.8rem", padding: "2rem 1rem" }}
          color="rgba(245, 237, 222, 1)"
        >
          <Text fontWeight="bold" padding="0 16px" sm={{ fontSize: "10px" }}>
            ENTER MY KINGDOM
          </Text>
        </BaseButton>
        <Box>
          <Text
            fontWeight="bold"
            padding="0 16px"
            justify="center"
            sm={{ fontSize: "10px" }}
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
  position: relative;
  z-index: 0;
  /* background: green; */
  background-image: url("${HeroDesktopImg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 20%;
`;

const Logo = styled.div`
  position: absolute;
  z-index: 2;
  width: 43.8vw;
  height: 19.6vw;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 0);
  background-image: url("${HeroDesktopLogo}");
  background-repeat: no-repeat;
  background-size: cover;
`;
