import styled from "styled-components";

import GoldenHeader from "../../components/GoldenHeader";
import { BaseButton } from "../../components/Button";
import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";

import MaleImg from "../../assets/images/landingpage/hero_male.png";
import HeroDesktopLogo from "../../assets/images/landingpage/hero_logo_desktop.png";
// import HeroDesktopImg from "../../assets/images/landingpage/hero_desktop.png";
import HeroDesktopImg from "../../assets/images/landingpage/hero_desktop_final.png";
import DragonImg from "../../assets/images/landingpage/hero_dragon.png";
import PyramidImg from "../../assets/images/landingpage/hero_pyramid.png";
import SparkImg from "../../assets/images/landingpage/hero_male.png";
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
        bottom="15%"
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
            Go to MarketPlace
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
  height: 55.5vw;
  position: relative;
  z-index: 0;
  /* background: green; */
  background-image: url("${HeroDesktopImg}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Background = styled.div`
  background: green;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Male = styled.div`
  position: absolute;
  z-index: 1;
  background-image: url("${MaleImg}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 45vw;
  height: 100%;
  bottom: 0;
  left: 0;
`;

const Dragon = styled.div`
  position: absolute;
  z-index: 1;
  background-image: url("${DragonImg}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 45vw;
  height: 100%;
  bottom: 0;
  right: 0;
`;

const Pyramid = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  z-index: 2;
  width: 62.5vw;
  height: 100%;
  bottom: 0;
  left: 50%;
  background-image: url("${PyramidImg}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Spark = styled.div`
  position: absolute;
`;

const Logo = styled.div`
  position: absolute;
  z-index: 2;
  width: 43.8vw;
  height: 19.6vw;
  top: 45%;
  left: 50%;
  transform: translate(-50%, 0);
  background-image: url("${HeroDesktopLogo}");
  background-repeat: no-repeat;
  background-size: cover;
`;
