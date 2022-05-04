import styled from "styled-components";
import { Box } from "../../components/Box";
import { Flex } from "../../components/Flex";
import GoldenHeader from "../../components/GoldenHeader";
import { Text } from "../../components/Typo/Text";
import { GoldenText } from "../../components/GoldenText";

import UniquePropertiesPC from "../../assets/images/unique-nft-assets/unique-properties.svg";
import UniquePropertiesMobile from "../../assets/images/unique-nft-assets/unique-properties-mobile.svg";
import UniqueEquipmentPC from "../../assets/images/unique-nft-assets/unique-equipment.svg";
import UniqueEquipmentMobile from "../../assets/images/unique-nft-assets/unique-equipment-mobile.svg";
import UniqueWarPC from "../../assets/images/unique-nft-assets/unique-war.svg";
import UniqueWarMobile from "../../assets/images/unique-nft-assets/unique-war-mobile.svg";

import background from "../../assets/images/landingpage/unique-nft-assets_background.jpeg";

const UniqueNFTAssets = () => {
  const uniqueAssets = (
    <Flex
      justifyContent="center"
      sm={{
        direction: "column",
        alignItem: "center",
        justifyContent: "center"
      }}
    >
      <UniqueProperties>
        <GoldenText
          fontSize="20px"
          lineHeight="26px"
          sm={{ margin: "0 0 0 143px" }}
        >
          Unique Properties
        </GoldenText>
        <Text
          justify="center"
          fontSize="16px"
          lineHeight="26px"
          margin="0 12px"
          sm={{ margin: "0 0 0 143px", justify: "left" }}
        >
          Build kingdoms from scratch with unique people under your command
        </Text>
      </UniqueProperties>
      <UniqueEquipment>
        <GoldenText
          fontSize="20px"
          lineHeight="26px"
          sm={{ margin: "0 0 0 143px" }}
        >
          Unique Equipment
        </GoldenText>
        <Text
          justify="center"
          fontSize="16px"
          lineHeight="26px"
          margin="0 12px"
          sm={{ margin: "0 0 0 143px", justify: "left" }}
        >
          Forge equipment with talent blacksmiths and explore your kingdom
        </Text>
      </UniqueEquipment>
      <UniqueWar>
        <GoldenText
          fontSize="20px"
          lineHeight="26px"
          sm={{ margin: "0 0 0 143px" }}
        >
          Unique War
        </GoldenText>
        <Text
          justify="center"
          fontSize="16px"
          lineHeight="26px"
          margin="0 12px"
          sm={{ margin: "0 0 0 143px", justify: "left" }}
        >
          Lead kingdom to victory by tactical decisions in every turn
        </Text>
      </UniqueWar>
    </Flex>
  );

  return (
    <Container>
      <Box paddingTop="180px" position="relative" zIndex={1}>
        <GoldenHeader>Unique NFT Assets</GoldenHeader>
        <Flex justifyContent="center">
          <Box
            width="524px"
            paddingBottom="80px"
            sm={{ width: "100%", padding: "0 24px" }}
          >
            <Text
              justify="center"
              sm={{
                fontSize: "16px",
                lineHeight: "26px",
                margin: "0 0 86px 0"
              }}
            >
              An immersive, intense turn based strategy game with player driven
              choices. Empower by blockchain and NFT technology.
            </Text>
          </Box>
        </Flex>
        {/* {isMobileView ? null : uniqueAssets} */}
        {uniqueAssets}
      </Box>
    </Container>
  );
};

export default UniqueNFTAssets;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 70vw;
  background: url("${background}") no-repeat;
  background-size: cover;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 200px;
    transform: translate(0, -30%);
    background: linear-gradient(
      to bottom,
      black 0%,
      black 30%,
      rgba(0, 0, 0, 0) 100%
    );
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 100px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 100vh;
  }
`;

const BaseUniqueCard = styled(Flex)`
  width: 333px;
  height: 423px;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 45px;
  z-index: 1;
  background-size: cover;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 366px;
    height: 151px;
    align-items: flex-start;
    margin-bottom: 32px;
    padding-bottom: 24px;
  }
`;

const UniqueProperties = styled(BaseUniqueCard)`
  background-image: url(${UniquePropertiesPC});
  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: url(${UniquePropertiesMobile});
  }
`;

const UniqueEquipment = styled(BaseUniqueCard)`
  background-image: url(${UniqueEquipmentPC});
  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: url(${UniqueEquipmentMobile});
  }
`;

const UniqueWar = styled(BaseUniqueCard)`
  background-image: url(${UniqueWarPC});
  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: url(${UniqueWarMobile});
  }
`;
