import styled from "styled-components";

import { StyledImage } from "./styled";
import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import { Box } from "../../components/Box";

import TokenomicCover from "../../assets/images/landingpage/token-util.png";
import StarBackground from "../../assets/images/landingpage/stars_background_1.png";
// import CloudImage from "../../assets/images/landingpage/cloud_image.svg";
import CloudImage from "../../assets/images/landingpage/cloud_image.png";

const Tokenomic = () => (
  <TokenomicContainer>
    <Box paddingTop="24vw" sm={{ padding: "50vw 0 0 0" }}>
      <Box
        height="23vw"
        width="23vw"
        margin="0 auto"
        sm={{ height: "50vw", width: "50vw" }}
      >
        <StyledImage
          src={TokenomicCover}
          width={"100%"}
          height={"100%"}
          alt="tokenomic"
        />
      </Box>
      <Box width="70vw" margin="0 auto" sm={{ width: "100vw" }}>
        <Heading
          font={"Judson"}
          size={"40px"}
          lineHeight={"64px"}
          fontWeight="700"
          align="center"
          background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
          sm={{ size: "24px", lineHeight: "36px" }}
        >
          Token Utilities
        </Heading>
        <Text
          margin="auto"
          font="Lato"
          fontWeight="500"
          fontSize={"18px"}
          lineHeight={"28px"}
          sm={{
            fontSize: "14px",
            lineHeight: "20px",
            justify: "justify",
            padding: "0 20px"
          }}
          color="rgba(238, 226, 204, 0.82)"
          style={{ textAlign: "center", maxWidth: "600px" }}
        >
          RYK is the main token that will be used on the marketplace. You can
          exchange characters, weapons, armors and lands too. Also, RYK can be
          used to ake part in adjusting the world through DAO.
          <br />
          Also, RYK will be used as your rewards for Play2earn features. That's
          right, only 1 token used for everything, no other token.
        </Text>
      </Box>
    </Box>
    <GoldCloud />
  </TokenomicContainer>
);
export default Tokenomic;

const GoldCloud = styled.div`
  position: absolute;
  width: 100vw;
  height: 50vw;
  bottom: 0%;
  left: 0;
  z-index: -1;
  background: url(${CloudImage}) no-repeat;
  background-size: contain;
  mix-blend-mode: difference;
`;

const TokenomicContainer = styled.div`
  width: 100vw; // 1440px
  height: 117vw; // 1694px
  position: relative;
  z-index: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 210vw;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
    background: url(${StarBackground}) no-repeat;
    background-size: contain;
    mix-blend-mode: difference;
    opacity: 0.08;
  }
  &::after {
    content: "";
    background: black;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* display: none; */
    /* top: -200px; */
  }
`;
