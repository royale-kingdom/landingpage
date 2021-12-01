import styled from "styled-components";

import {
  Box,
  StyledImage,
  AlignCenter,
  AbsoluteDiv,
  Text,
  GoldenText
} from "./styled";
import { Flex, FlexItem } from "../../components/Grid/index";

import MaleRYK from "../../assets/images/landingpage/Male RYK-min.webp";
import FemaleRYK1 from "../../assets/images/landingpage/Female-RK-1.webp";
import UniqueCharacter from "../../assets/images/landingpage/unique-character-min.webp";
import UniqueWeapon from "../../assets/images/landingpage/unique-weapon-min.webp";
import UniqueArmor from "../../assets/images/landingpage/unique-armor-min.webp";
import BG2RoyaleKingdom from "../../assets/images/landingpage/BG2 Royale Kingdom-min.webp";

// export const Character = styled.div<{ width: string; height: string; left?: string; right?: string; top?: string; bottom?: string }>`
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

const Wrapper = styled.div`
  background-image: url(${`'${BG2RoyaleKingdom}'`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 1273px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    height: 100vh;
  }
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
        <Text width={"90%"}>{content}</Text>
      </FlexItem>
    </Flex>
  );
};

const UniqueAsset = () => (
  <Wrapper>
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
          >
            When you design, you have to draw on your own fucking life
          </Text>
        </div>
        <div>
          <Text
            fontSize={"18px"}
            lineHeight={"28px"}
            justify={"center"}
            sm={{ fontSize: "16px", lineHeight: "24px" }}
          >
            experiences. If it’s not something you would want to read/look
            at/use
          </Text>
        </div>
        <div>
          <Text
            fontSize={"18px"}
            lineHeight={"28px"}
            justify={"center"}
            sm={{ fontSize: "16px", lineHeight: "24px" }}
          >
            then why fucking bother? Form follows fucking function.
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
      zIndex={99}
      sm={{ width: "80vw", top: "240px", left: "10vw", height: "400px" }}
    >
      <UniqueItem
        img={UniqueCharacter}
        title={"Unique Characters"}
        content={"Form follows fucking function. Paul Rand once said,"}
      />
      <UniqueItem
        img={UniqueWeapon}
        title={"Unique Weapons"}
        content={"Form follows fucking function. Paul Rand once said,"}
      />
      <UniqueItem
        img={UniqueArmor}
        title={"Unique Armors"}
        content={"Form follows fucking function. Paul Rand once said,"}
      />
    </AbsoluteDiv>
    {/* </RelativeDiv> */}
  </Wrapper>
);

export default UniqueAsset;