import styled from "styled-components";
import { Box } from "../../components/Box";
import { Flex } from "../../components/Flex";
import GoldenHeader from "../../components/GoldenHeader";
import { Text } from "../../components/Typo/Text";
import { GoldenText } from "../../components/GoldenText";
import UniquePropertiesPC from '../../assets/images/unique-nft-assets/unique-properties.svg'
import UniquePropertiesMobile from '../../assets/images/unique-nft-assets/unique-properties-mobile.svg'
import UniqueEquipmentPC from '../../assets/images/unique-nft-assets/unique-equipment.svg'
import UniqueEquipmentMobile from '../../assets/images/unique-nft-assets/unique-equipment-mobile.svg'
import UniqueWarPC from '../../assets/images/unique-nft-assets/unique-war.svg'
import UniqueWarMobile from '../../assets/images/unique-nft-assets/unique-war-mobile.svg'

const UniqueNFTAssets = () => {
  return (
    <Container>
      <GoldenHeader>Unique NFT Assets</GoldenHeader>
      <Flex justifyContent="center">
        <Box width="524px" paddingBottom="100px">
          <Text justify="center">
            An immersive, intense turn based strategy game with player driven choices. Empower by blockchain and NFT technology.
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <UniqueProperties>
          <GoldenText>Unique Properties</GoldenText>
          <Text justify="center" margin="0 24px">
            Build kingdoms from scratch with unique people under your command
          </Text>
        </UniqueProperties>
        <UniqueEquipment>
          <GoldenText>Unique Equipment</GoldenText>
          <Text justify="center" margin="0 24px">
            Forge equipment with talent blacksmiths and explore your kingdom
          </Text>
        </UniqueEquipment>
        <UniqueWar>
          <GoldenText>Unique War</GoldenText>
          <Text justify="center" margin="0 24px">
            Lead kingdom to victory by tactical decisions in every turn
          </Text>
        </UniqueWar>
      </Flex>
    </Container>
  );
};

export default UniqueNFTAssets;

const Container = styled.div`
  width: 100vw;
  height: 55vw;
  background: green;
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: url(${UniqueWarMobile});
    width: 366px;
    height: 151px;
    align-items: flex-end;
    justify-content: center;
    /* padding-bottom: 19px; */
  }
`;
