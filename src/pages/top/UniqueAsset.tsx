import styled from "styled-components";

import {
  Box,
  StyledImage,
  AlignCenter,
  AbsoluteDiv
  // ContainerWithBG
} from "./styled";
import { Flex, FlexItem } from "../../components/Grid";
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
          width={"120px"}
          height={"120px"}
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
  <UniqueAssetContainer>
    <AbsoluteDiv
      top={"160px"}
      height={"100%"}
      width={"100%"}
      left={"0"}
      sm={{ top: "50px", width: "80vw", left: "10vw" }}
    >
      <AlignCenter>
        <div>
          <GoldenText
            fontSize={"48px"}
            lineHeight={"78px"}
            justify={"center"}
            sm={{ fontSize: "32px", lineHeight: "48px" }}
          >
            Build unique world
          </GoldenText>
        </div>
        <div>
          <Text
            fontSize={"18px"}
            lineHeight={"28px"}
            justify={"center"}
            sm={{ fontSize: "16px", lineHeight: "24px" }}
            color="rgba(238, 226, 204, 0.82)"
          >
            An immersive, intense turn based strategy game with player driven
            choices.
          </Text>
        </div>
        <div>
          <Text
            fontSize={"18px"}
            lineHeight={"28px"}
            justify={"center"}
            sm={{ fontSize: "16px", lineHeight: "24px" }}
            color="rgba(238, 226, 204, 0.82)"
          >
            Empower by blockchain and NFT technology.
          </Text>
        </div>
        {/* <div>
          <Text
            fontSize={"18px"}
            lineHeight={"28px"}
            justify={"center"}
            sm={{ fontSize: "16px", lineHeight: "24px" }}
            color="rgba(238, 226, 204, 0.82)"
          >
            even your land, everything will be NFT.
          </Text>
        </div> */}
      </AlignCenter>
    </AbsoluteDiv>

    <MaleCharacter>
      <StyledImage width={"100%"} src={MaleRYK} alt="Male RYK" />
    </MaleCharacter>

    {/* <FemaleCharacter>
      <StyledImage width={"100%"} src={FemaleRYK1} alt="Female RYK" />
    </FemaleCharacter> */}

    <AbsoluteDiv
      width={"470px"}
      top={"560px"}
      right={"10px"}
      sm={{ width: "80vw", top: "240px", left: "10vw" }}
    >
      <UniqueItem
        img={UniqueProperty}
        title={"Unique Characters"}
        content={
          "Build kingdom from scratch with unique character under your command."
        }
      />
      <UniqueItem
        img={UniqueWar}
        title={"Unique Equipment"}
        content={
          "Forge equipment with talent blacksmiths and explore your kingdom."
        }
      />
      <UniqueItem
        img={UniqueEquipment}
        title={"Unique War"}
        content={"Lead kingdom to victory by tactic decision every turn."}
      />
    </AbsoluteDiv>
  </UniqueAssetContainer>
);

export default UniqueAsset;

const UniqueAssetContainer = styled.div`
  width: 100vw;
  height: 1439px;
  position: relative;
  /* z-index: 0; */
  /* overflow: hidden; */
  &::before {
    content: "";
    /* max-width: 1440px; */
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;
    transform: translate(0, -38%);
    top: 0;
    left: 0;
    background-image: url("${BG2RoyaleKingdom}");
    background-repeat: no-repeat;
    background-size: cover;
  }
  // TODO:
  &::after {
    content: "";
    /* max-width: 1440px; */
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;
    transform: translate(0, -38%);
    top: 0;
    left: 0;
    mask-image: url("${BG2RoyaleKingdom}");
    /* background-repeat: no-repeat;
    background-size: cover; */
  }
`;

export const FemaleCharacter = styled.div`
  position: absolute;
  width: 1156px;
  height: 1085.29px;
  left: 240px;
  bottom: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    // 1/4 size on mobile
    width: 289px;
    height: 271px;
    right: 0;
    left: unset;
  } ;
`;

export const MaleCharacter = styled.div`
  position: absolute;
  width: 1067px;
  height: 1013px;
  right: -16px;
  top: -250px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    // 1/4 size on mobile
    width: 275px;
    height: 265px;
  } ;
`;
