import styled from "styled-components";

import {
  Box,
  StyledImage,
  AlignCenter,
  AbsoluteDiv,
  ContainerWithBG
} from "./styled";
import { Flex, FlexItem } from "../../components/Grid/index";
import { Text } from "../../components/Typo/Text";

import MaleRYK from "../../assets/images/landingpage/Male RYK-min.webp";
import FemaleRYK1 from "../../assets/images/landingpage/Female-RK-1.webp";
import UniqueCharacter from "../../assets/images/landingpage/unique-character-min.webp";
import UniqueWeapon from "../../assets/images/landingpage/unique-weapon-min.webp";
import UniqueArmor from "../../assets/images/landingpage/unique-armor-min.webp";
// import BG2RoyaleKingdom from "../../assets/images/landingpage/BG2 Royale Kingdom-min.webp";
import BG2RoyaleKingdom from "../../assets/images/landingpage/BG2 Royale Kingdom.jpg";
import { GoldenText } from "../../components/GoldenText";
// import MaleRYK from "../../assets/images/landingpage/Male RYK.png";

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
  width: 1101px;
  height: 1060px;
  left: 0;
  bottom: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    // 1/4 size on mobile
    width: 275px;
    height: 265px;
  } ;
`;

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
      margin={"2rem 0"}
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
  <ContainerWithBG width={"100vw"} height={"1273px"} imgSrc={BG2RoyaleKingdom}>
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
            Unique NFT Asset
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
            Truely own your game.
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
            Your characters, your armors, your weapons
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
            even your land, everything will be NFT.
          </Text>
        </div>
      </AlignCenter>
    </AbsoluteDiv>

    <MaleCharacter>
      <StyledImage width={"100%"} src={MaleRYK} alt="Male RYK" />
    </MaleCharacter>

    <FemaleCharacter>
      <StyledImage width={"100%"} src={FemaleRYK1} alt="Female RYK" />
    </FemaleCharacter>

    <AbsoluteDiv
      width={"470px"}
      top={"560px"}
      right={"10px"}
      sm={{ width: "80vw", top: "240px", left: "10vw" }}
    >
      <UniqueItem
        img={UniqueCharacter}
        title={"Unique Characters"}
        content={"Build kingdom from scratch with unique character under your command."}
      />
      <UniqueItem
        img={UniqueWeapon}
        title={"Unique Equipment"}
        content={"Forge equipment with talent blacksmiths and explore your kingdom."}
      />
      <UniqueItem
        img={UniqueArmor}
        title={"Unique War"}
        content={"Lead kingdom to victory by tactic decision every turn."}
      />
    </AbsoluteDiv>
  </ContainerWithBG>
);

export default UniqueAsset;
