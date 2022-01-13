import { RelativeDiv, AbsoluteDiv, StyledImage } from "./styled";
import styled from "styled-components";

import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import TokenomicCover from "../../assets/images/landingpage/token-util.png";
import StarBackground from "../../assets/images/landingpage/stars_background_1.jpeg";
import TokenomicBackground from "../../assets/images/landingpage/tokenomic_background.png";

const Tokenomic = () => (
  <TokenomicContainer>
    <AbsoluteDiv
      width={"540px"}
      transform={"translate(0%, -50%)"}
      top="50%"
      right={"96px"}
      sm={{ width: "80vw", top: "12rem", left: "10vw", transform: "unset" }}
    >
      <StyledImage src={TokenomicCover} width={"100%"} alt="tokenomic" />
    </AbsoluteDiv>
    <AbsoluteDiv
      width={"572px"}
      top={"50%"}
      left={"96px"}
      align={"center"}
      transform={"translate(0%, -50%)"}
      sm={{ width: "90vw", bottom: "2rem", left: "5vw", transform: "unset" }}
    >
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
        fontSize={"18px"}
        lineHeight={"28px"}
        sm={{ fontSize: "14px", lineHeight: "20px", justify: "justify" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        RYK is the main token that will be used on the marketplace. You can
        exchange characters, weapons, armors and lands too. RYK will also be
        used as your rewards for Play2earn features.
      </Text>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        margin={"2rem 0"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        Player can use RYK to take part in adjusting the world through DAO.
      </Text>
    </AbsoluteDiv>
  </TokenomicContainer>
);
export default Tokenomic;

const TokenomicContainer = styled.div`
  position: relative;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* display: none; */
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 55%;
    top: 22%;
    left: 0;
    z-index: 0;
    background: url(${TokenomicBackground}) no-repeat;
    background-size: contain;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
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
    opacity: 0.08;
    /* mix-blend-mode: hard-light; */
    z-index: -1;
  }
`;
