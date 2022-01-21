import { StyledImage } from "./styled";
import styled from "styled-components";

import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import TokenomicCover from "../../assets/images/landingpage/token-util.png";
import Image77 from "../../assets/images/landingpage/image_77.svg";
import CloudImage from "../../assets/images/landingpage/cloud_image.svg";
import { Flex, FlexItem } from "../../components/Grid";

const Tokenomic = () => (
  <TokenomicContainer>
    <Flex alginItem="center" flexDirection="column" justifyContent="center">
      <FlexItem sm={{padding: "0 20%"}}>
        <StyledImage style={{maxWidth: "540px"}} src={TokenomicCover} width={"100%"} alt="tokenomic" />
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
                sm={{ fontSize: "14px", lineHeight: "20px", justify: "justify", padding: "0 20px" }}
                color="rgba(238, 226, 204, 0.82)" style={{textAlign: "center", maxWidth: "600px"}}>
            When you sit down to work, external critics aren’t the enemy. It’s you who you must to fight against to do great fucking work. You must overcome yourself. 
            Design as if your fucking life depended on it. Never let your guard down by thinking you’re fucking good enough.<br/><br/>
            When you design, you have to draw on your own fucking life experiences. If it’s not something you would want to read/look at/use then why fucking bother? Form follows fucking function.
          </Text>
      </FlexItem>
    </Flex>
    <Flex style={{zIndex: -1, position: "absolute", left: 0, bottom: "10px"}}>
      <StyledImage src = {CloudImage} width="100%" alt = "tokenomic cloud"></StyledImage>
    </Flex>
  </TokenomicContainer>
);
export default Tokenomic;

const TokenomicContainer = styled.div`
  position: relative;
  padding-bottom: 50%;
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
    background: url(${Image77}) no-repeat;
    background-size: cover;
    opacity: 0.08;
    /* mix-blend-mode: hard-light; */
    z-index: -1;
  }
`;
