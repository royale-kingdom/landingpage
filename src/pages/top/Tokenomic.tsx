import styled from "styled-components";

import { StyledImage } from "./styled";
import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import { Flex, FlexItem } from "../../components/Grid";

import TokenomicCover from "../../assets/images/landingpage/token-util.png";
// import StarBackground from "../../assets/images/landingpage/stars_background_1.jpeg";
import StarBackground from "../../assets/images/landingpage/stars_background_1.png";
import CloudImage from "../../assets/images/landingpage/cloud_image.svg";

const Tokenomic = () => (
  <TokenomicContainer>
    <Flex alginItem="center" flexDirection="column" justifyContent="center">
      <FlexItem sm={{ padding: "0 20%" }}>
        <StyledImage
          style={{ maxWidth: "540px" }}
          src={TokenomicCover}
          width={"100%"}
          alt="tokenomic"
        />
      </FlexItem>
      <FlexItem textAlign="center">
        <Heading
          font={"Judson"}
          size={"40px"}
          lineHeight={"64px"}
          sm={{ size: "24px", lineHeight: "36px" }}
          fontWeight="700"
          background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
        >
          Token Utilities
        </Heading>
        <Text
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
        </Text>
        <Text
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
          Also, RYK will be used as your rewards for Play2earn features. That's
          right, only 1 token used for everything, no other token.
        </Text>
      </FlexItem>
      {/* <Flex style={{ zIndex: -1, position: "absolute", left: 0, bottom: "10px" }}>
<StyledImage
  src={CloudImage}
  width="100%"
  alt="tokenomic cloud"
></StyledImage>
</Flex> */}
    </Flex>
    <GoldCloud />
  </TokenomicContainer>
);
export default Tokenomic;

const GoldCloud = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 300px;
  }
  &::before {
    content: "";
    position: absolute;
    height: 1000px;
    width: 100%;
    top: -55%;
    z-index: -1;
    left: 0;
    background: url(${CloudImage}) no-repeat;
    background-size: cover;
    mix-blend-mode: difference;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      top: -35%;
      background-size: contain;
    }
  }
`;

const TokenomicContainer = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 800px;
    top: 0;
    z-index: -1;
    background: url(${StarBackground}) no-repeat;
    background-size: cover;
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
