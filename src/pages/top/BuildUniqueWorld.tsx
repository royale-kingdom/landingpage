import styled from "styled-components";

import { StyledImage } from "./styled";
import { Flex, FlexItem } from "../../components/Grid";
import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";
import { GoldenText } from "../../components/GoldenText";

import MaleRYK from "../../assets/images/landingpage/Male RYK.png";
import UniqueWar from "../../assets/images/landingpage/unique-war.png";
import UniqueProperty from "../../assets/images/landingpage/unique-property.png";
import UniqueEquipment from "../../assets/images/landingpage/unique-equipment.png";
import BG2RoyaleKingdom from "../../assets/images/landingpage/BG2 Royale Kingdom.png";

import { BUILD_UNIQUE_WORLD } from "../../constant/landingPageSection";

const UniqueItem = ({
  img,
  title,
  content
}: {
  img: any;
  title: string;
  content: string;
}) => {
  return (
    <Flex
      justifyContent={"flex-start"}
      alginItem={"center"}
      padding={"2rem 0"}
      height={"100px"}
    >
      <FlexItem>
        <Box
          width={"160px"}
          height={"160px"}
          sm={{ height: "64px", width: "64px" }}
        >
          <StyledImage width={"100%"} src={img} />
        </Box>
      </FlexItem>
      <FlexItem flex={"1"} paddingLeft={"1rem"}>
        <GoldenText
          fontSize={"24px"}
          sm={{ fontSize: "20px", lineHeight: "28px" }}
        >
          {title}
        </GoldenText>
        <Text
          width={"90%"}
          fontSize="16px"
          lineHeight="26px"
          color="rgba(238, 226, 204, 0.82)"
          sm={{ lineHeight: "2.5rem" }}
        >
          {content}
        </Text>
      </FlexItem>
    </Flex>
  );
};

const BuildUniqueWorld = () => (
  <UniqueAssetContainer id={BUILD_UNIQUE_WORLD}>
    {/* relate to 1440px width screen, height:width ratio = 490 : 1440px */}
    <MaskedBox>
      <Box
        position={"absolute"}
        zIndex={2}
        height={"150px"}
        width={"50%"}
        left={"12%"}
        top={"36%"}
        sm={{ width: "80vw", height: "25vh", top: "18%", left: "10vw" }}
      >
        <GoldenText
          fontSize={"40px"}
          lineHeight={"64px"}
          sm={{ fontSize: "28px", lineHeight: "48px", justify: "center" }}
        >
          Build unique world
        </GoldenText>
        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          sm={{ fontSize: "16px", lineHeight: "24px", justify: "center" }}
          color="rgba(238, 226, 204, 0.82)"
        >
          An immersive, intense turn based strategy game with player driven
          choices.
        </Text>
        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          sm={{ fontSize: "16px", lineHeight: "24px", justify: "center" }}
          color="rgba(238, 226, 204, 0.82)"
        >
          Empower by blockchain and NFT technology.
        </Text>
      </Box>

      <MaleCharacter>
        <StyledImage width={"100%"} src={MaleRYK} alt="Male RYK" />
      </MaleCharacter>
    </MaskedBox>

    {/* height = 815px, on 1440px width screen */}
    <Box
      position="absolute"
      width="100vw"
      height="56.5vw"
      bottom={"0"}
      zIndex={2}
      sm={{ top: "35%", height: "70%" }}
    >
      <Box position="relative" height="100%" width="100%">
        <Box
          position="absolute"
          zIndex={2}
          width={"33vw"}
          top={"12.8%"}
          left={"13.3%"}
          sm={{ width: "85vw", top: "0", left: "12.5vw" }}
        >
          <UniqueItem
            img={UniqueProperty}
            title={"Unique Properties"}
            content={
              "Build kingdom from scratch with unique\n people under your command"
            }
          />
        </Box>
        <Box
          position="absolute"
          zIndex={2}
          width={"33vw"}
          top={"38.65%"}
          left={"35.76%"}
          sm={{ width: "85vw", top: "15%", left: "12.5vw" }}
        >
          <UniqueItem
            img={UniqueEquipment}
            title={"Unique Equipment"}
            content={
              "Forge equipment with talent\n blacksmiths and explore your kingdom"
            }
          />
        </Box>
        <Box
          position="absolute"
          zIndex={2}
          width={"33vw"}
          top={"59.38%"}
          left={"58.54%"}
          sm={{ width: "85vw", top: "30%", left: "12.5vw" }}
        >
          <UniqueItem
            img={UniqueWar}
            title={"Unique War"}
            content={"Lead kingdom to victory by tactic\n decision every turn"}
          />
        </Box>
      </Box>
    </Box>
  </UniqueAssetContainer>
);

export default BuildUniqueWorld;

const UniqueAssetContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 97.857vw; // ratio on 1440px width screen
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    height: 250vw;
  }
`;
const MaskedBox = styled.div`
  /* max-width: 1440px; */
  /* height: 1440px; */
  width: 100%;
  height: 100%;
  /* width: 100vw;
  height: 100vw; */
  position: relative;
  mask-image: url("${BG2RoyaleKingdom}");
  mask-repeat: no-repeat;
  mask-size: cover;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* width: 100vw;
    height: 250vw; */
    /* mask-size: auto; */
    mask-position: 100% 0;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    /* max-width: 1440px; */
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 0;
    left: 0;
    background-image: url("${BG2RoyaleKingdom}");
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      background-position: 100% 0;
      /* width: 100vw;
      height: 100; */

      /* background-size: cover; */
      /* background-position: 50%; */
    }
  }

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    height: 180vh;
  } */
`;

const MaleCharacter = styled.div`
  position: absolute;
  height: 65vw; // size base on origin design for 1440px width screen
  width: 66.67vw; // size base on origin design for 1440px width screen
  /* right: 2%; */
  /* top: 27%; */
  /* transform-origin: 50% 50%; */
  bottom: 8%;
  right: 2%;
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    // 1/3 size on mobile
    /* width: 80vw;
    height: 77.7vw; */
    bottom: 4%;
    /* right: 2%; */
  } ;
`;
