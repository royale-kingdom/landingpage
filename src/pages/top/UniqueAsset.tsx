import styled from "styled-components";

import {
  StyledImage
  // AlignCenter,
  // AbsoluteDiv
  // ContainerWithBG
} from "./styled";
import { Flex, FlexItem } from "../../components/Grid";
import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";
import { GoldenText } from "../../components/GoldenText";

import MaleRYK from "../../assets/images/landingpage/Male RYK.png";
import UniqueWar from "../../assets/images/landingpage/unique-war.png";
import UniqueProperty from "../../assets/images/landingpage/unique-property.png";
import UniqueEquipment from "../../assets/images/landingpage/unique-equipment.png";
import BG2RoyaleKingdom from "../../assets/images/landingpage/BG2 Royale Kingdom.png";

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
          sm={{ height: "80px", width: "80px" }}
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
        <Text width={"90%"} color="rgba(238, 226, 204, 0.82)">
          {content}
        </Text>
      </FlexItem>
    </Flex>
  );
};

const UniqueAsset = () => (
  <>
    <UniqueAssetContainer>
      {/* <MaskLayer> */}
      <Box
        position={"absolute"}
        zIndex={2}
        height={"100%"}
        width={"50%"}
        left={"12%"}
        top={"35%"}
        sm={{ top: "50px", width: "80vw", left: "10vw" }}
      >
        <GoldenText
          fontSize={"40px"}
          lineHeight={"64px"}
          sm={{ fontSize: "32px", lineHeight: "48px" }}
        >
          Build unique world
        </GoldenText>
        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          sm={{ fontSize: "16px", lineHeight: "24px" }}
          color="rgba(238, 226, 204, 0.82)"
        >
          An immersive, intense turn based strategy game with player driven
          choices.
        </Text>
        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          sm={{ fontSize: "16px", lineHeight: "24px" }}
          color="rgba(238, 226, 204, 0.82)"
        >
          Empower by blockchain and NFT technology.
        </Text>
      </Box>

      <MaleCharacter>
        <StyledImage width={"100%"} src={MaleRYK} alt="Male RYK" />
      </MaleCharacter>
    </UniqueAssetContainer>
    <Box position="relative" height="1px" width="100vw" zIndex={2}>
      <Box
        position="absolute"
        zIndex={2}
        width={"470px"}
        top={"-740px"}
        left={"18%"}
        sm={{ width: "80vw", top: "240px", left: "10vw" }}
      >
        <UniqueItem
          img={UniqueProperty}
          title={"Unique Characters"}
          content={
            "Build kingdom from scratch with unique character under your command."
          }
        />
      </Box>
      <Box
        position="absolute"
        zIndex={2}
        width={"470px"}
        top={"-520px"}
        left={"38%"}
        sm={{ width: "80vw", top: "240px", left: "10vw" }}
      >
        <UniqueItem
          img={UniqueEquipment}
          title={"Unique War"}
          content={"Lead kingdom to victory by tactic decision every turn."}
        />
      </Box>
      <Box
        position="absolute"
        zIndex={2}
        width={"470px"}
        top={"-360px"}
        left={"60%"}
        sm={{ width: "80vw", top: "240px", left: "10vw" }}
      >
        <UniqueItem
          img={UniqueWar}
          title={"Unique Equipment"}
          content={
            "Forge equipment with talent blacksmiths and explore your kingdom."
          }
        />
      </Box>
    </Box>
  </>
);

export default UniqueAsset;

const UniqueAssetContainer = styled.div`
  width: 100vw;
  height: 1440px;
  position: relative;
  mask-image: url("${BG2RoyaleKingdom}");
  mask-repeat: no-repeat;
  mask-size: fit;
  /* mask-position: 0% -50%; */
  /* overflow: hidden; */
  /* transform: translate(0, -8%); */
  z-index: 0;

  &::before {
    content: "";
    width: 100%;
    height: 1439px;
    max-width: 1440px;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 0;
    left: 0;
    background-image: url("${BG2RoyaleKingdom}");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

// const FemaleCharacter = styled.div`
//   position: absolute;
//   width: 1156px;
//   height: 1085.29px;
//   left: 240px;
//   bottom: 0;
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     // 1/4 size on mobile
//     width: 289px;
//     height: 271px;
//     right: 0;
//     left: unset;
//   } ;
// `;

const MaleCharacter = styled.div`
  position: absolute;
  height: 911px;
  width: 960px;
  right: 2%;
  top: 27%;
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    // 1/4 size on mobile
    width: 275px;
    height: 265px;
  } ;
`;
