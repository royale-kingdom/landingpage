import styled from "styled-components";

import { StyledImage } from "./styled";
import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import { Flex, FlexItem } from "../../components/Grid";

import TokenomicCover from "../../assets/images/landingpage/token-util.png";
import StarBackground from "../../assets/images/landingpage/stars_background_1.jpeg";
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
          When you sit down to work, external critics aren’t the enemy. It’s you
          who you must to fight against to do great fucking work. You must
          overcome yourself. Design as if your fucking life depended on it.
          Never let your guard down by thinking you’re fucking good enough.
          <br />
          <br />
          When you design, you have to draw on your own fucking life
          experiences. If it’s not something you would want to read/look at/use
          then why fucking bother? Form follows fucking function.
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
  width: 100vw;
  height: 800px;
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
  }
`;

const TokenomicContainer = styled.div`
  position: relative;
  /* padding-bottom: 50%; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* display: none; */
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${StarBackground}) no-repeat;
    background-size: cover;
    /* mix-blend-mode: lighten; */
    mix-blend-mode: hard-light;
    /* opacity: 0.08; */
    z-index: -1;
  }
`;
