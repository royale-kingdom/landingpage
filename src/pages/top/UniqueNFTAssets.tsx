import styled from "styled-components";
import { Box } from "../../components/Box";
import { Flex } from "../../components/Flex";
import GoldenHeader from "../../components/GoldenHeader";
import { Text } from "../../components/Typo/Text";
import { GoldenText } from "../../components/GoldenText";

import UniquePropertiesPC from "../../assets/images/unique-nft-assets/unique-properties.png";
import UniquePropertiesMobile from "../../assets/images/unique-nft-assets/unique-properties-mobile.png";
import UniqueEquipmentPC from "../../assets/images/unique-nft-assets/unique-equipment.png";
import UniqueEquipmentMobile from "../../assets/images/unique-nft-assets/unique-equipment-mobile.png";
import UniqueWarPC from "../../assets/images/unique-nft-assets/unique-war.png";
import UniqueWarMobile from "../../assets/images/unique-nft-assets/unique-war-mobile.png";

import background from "../../assets/images/landingpage/unique-nft-assets_background.jpeg";
import { NFT_ASSETS } from "../../constant/landingPageSection";
import { useIsMobileView } from "../../hooks/useIsMobileView";

interface AssetProps {
  title: string;
  content: string;
  PCBackground: any;
  MobileBackground: any;
}

const assetData: AssetProps[] = [
  {
    title: "Unique Properties",
    content:
      "Build kingdoms from scratch with unique people under your command",
      PCBackground: UniquePropertiesPC,
      MobileBackground: UniquePropertiesMobile
  },
  {
    title: "Unique Equipment",
    content: "Forge equipment with talent blacksmiths and explore your kingdom",
    PCBackground: UniqueEquipmentPC,
    MobileBackground: UniqueEquipmentMobile
  },
  {
    title: "Unique War",
    content: "Lead kingdom to victory by tactical decisions in every turn",
    PCBackground: UniqueWarPC,
    MobileBackground: UniqueWarMobile
  }
];

const Asset = ({
  title,
  content,
  PCBackground,
  MobileBackground
}: AssetProps) => {
  const isMobileView = useIsMobileView();
  return (
    <BaseUniqueCard imgSrc={isMobileView ? MobileBackground : PCBackground}>
      <GoldenText
        fontSize="20px"
        lineHeight="26px"
        sm={{ margin: "0 0 0 143px" }}
      >
        {title}
      </GoldenText>
      <Text
        justify="center"
        fontSize="16px"
        lineHeight="26px"
        margin="0 12px"
        sm={{ margin: "0 0 0 143px", justify: "left" }}
      >
        {content}
      </Text>
    </BaseUniqueCard>
  );
};

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
      {assetData.map((item, idx) => (
        <Asset key={`uniq asset item - ${idx}`} {...item} />
      ))}
    </Flex>
  );

  return (
    <Container>
      <Box
        id={NFT_ASSETS}
        position="absolute"
        top="0"
        width="100vw"
        height="2px"
        sm={{ top: "-100px" }}
      />
      <Box paddingTop="180px" position="relative" zIndex={1}>
        <GoldenHeader margin="12px auto">Unique NFT Assets</GoldenHeader>
        <Flex justifyContent="center">
          <Box
            width="524px"
            paddingBottom="80px"
            sm={{ width: "100%", padding: "0 24px" }}
          >
            <Text
              justify="center"
              fontSize="20px"
              lineHeight="32px"
              fontWeight="400"
              sm={{
                fontSize: "16px",
                lineHeight: "26px",
                margin: "0 0 86px 0",
                fontWeight: "600"
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
  /* &::after {
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
  } */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 100vh;
    min-height: 820px; // 900px trừ cho 84px của header
  }
`;

const BaseUniqueCard = styled(Flex)<{ imgSrc?: any }>`
  width: 333px;
  height: 423px;
  margin: 0 24px;
  padding: 52px 24px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 45px;
  z-index: 1;
  background-size: cover;
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 366px;
    height: 151px;
    align-items: flex-start;
    margin-bottom: 32px;
    padding-bottom: 24px;
  }
`;
