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
  return (
    <Container>
      <Box paddingTop="180px">
        <GoldenHeader>Unique NFT Assets</GoldenHeader>
        <Flex justifyContent="center">
          <Box width="524px" paddingBottom="80px">
            <Text justify="center">
              An immersive, intense turn based strategy game with player driven
              choices. Empower by blockchain and NFT technology.
            </Text>
          </Box>
        </Flex>
        {/* <Flex justifyContent="center">
          <UniqueProperties>
            <GoldenText fontSize="20px">Unique Properties</GoldenText>
            <Text
              justify="center"
              fontSize="16px"
              lineHeight="26px"
              margin="0 12px"
            >
              Build kingdoms from scratch with unique people under your command
            </Text>
          </UniqueProperties>
          <UniqueEquipment>
            <GoldenText fontSize="20px">Unique Equipment</GoldenText>
            <Text
              justify="center"
              fontSize="16px"
              lineHeight="26px"
              margin="0 12px"
            >
              Forge equipment with talent blacksmiths and explore your kingdom
            </Text>
          </UniqueEquipment>
          <UniqueWar>
            <GoldenText fontSize="20px" font="Titillium Web">
              Unique War
            </GoldenText>
            <Text
              justify="center"
              fontSize="16px"
              lineHeight="26px"
              margin="0 12px"
            >
              Lead kingdom to victory by tactical decisions in every turn
            </Text>
          </UniqueWar>
        </Flex> */}
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
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 100vh;
  }
`;

const UniqueProperties = styled(Flex)`
  background-image: url(${UniquePropertiesPC});
  background-size: cover;
  width: 333px;
  height: 423px;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 45px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: url(${UniquePropertiesMobile});
    width: 366px;
    height: 151px;
    align-items: flex-end;
    justify-content: center;
    /* padding-bottom: 19px; */
  }
`;

const UniqueEquipment = styled(Flex)`
  background-image: url(${UniqueEquipmentPC});
  background-size: cover;
  width: 333px;
  height: 423px;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 45px;
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: url(${UniqueEquipmentMobile});
    width: 366px;
    height: 151px;
    align-items: flex-end;
    justify-content: center;
    /* padding-bottom: 19px; */
  }
`;

const UniqueWar = styled(Flex)`
  background-image: url(${UniqueWarPC});
  background-size: cover;
  width: 333px;
  height: 423px;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 45px;
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: url(${UniqueWarMobile});
    width: 366px;
    height: 151px;
    align-items: flex-end;
    justify-content: center;
    /* padding-bottom: 19px; */
  }
`;
