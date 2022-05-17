import styled from "styled-components";

import { BaseButton } from "../../components/Button";
import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";

import HeroDesktopLogo from "../../assets/images/landingpage/hero_logo_desktop.png";
import HeroDesktopImg from "../../assets/images/landingpage/hero_desktop.png";
import HeroMobileImg from "../../assets/images/landingpage/hero_mobile.png";
import HeroButton from "../../assets/images/landingpage/hero_button.png";
import HeroGoToMarket from "../../assets/images/landingpage/hero_go-to-market.png";
import { useIsMobileView } from "../../hooks/useIsMobileView";
import { MY_KINGDOM } from "../../constant/landingPageSection";

const Hero = () => {
  const isMobileView = useIsMobileView();
  console.log(isMobileView)

  return (
    <Container id={MY_KINGDOM}>
      <Logo />

      <Box
        position={"absolute"}
        transform="translate(-50%, 50%)"
        left="50%"
        top="58%"
        sm={{ bottom: "unset", top: "53%" }}
      >
        <BaseButton
          style={{
            backgroundImage: `url(${HeroButton})`,
            backgroundRepeat: "no-repeat",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundPosition: "center center",
            backgroundSize: "contain"
          }}
          fontSize="24px"
          // padding="25px 40px"
          width="315px"
          height="100px"
          sm={{
            fontSize: "1.8rem",
            padding: "0 1rem",
            width: "236px",
            height: "74px"
          }}
          color="rgba(245, 237, 222, 1)"
        />
        <Box margin="16px auto">
          <Text padding="0 16px" justify="center">
            <a href="https://marketplace-dev.royalekingdom.com/marketplace">
              <img
                src={HeroGoToMarket}
                alt="go to marketplace"
                style={{ display: "inline-block" }}
                width={isMobileView ? "138px" : "141px"}
                height={isMobileView ? "20px" : "22px"}
              />
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
  height: 55vw;
  /* min-height: 820px; */
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
