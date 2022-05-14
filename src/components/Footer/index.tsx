import styled from "styled-components";

import { Box } from "../Box";
import { Img } from "../Img";
import { Text } from "../Typo/Text";
import { Flex, FlexItem } from "../Grid";

import footerLogo from "../../assets/images/landingpage/footer_logo.png";
import facebookIcon from "../../assets/images/icons/fb.png";
import youtubeIcon from "../../assets/images/icons/youtube.png";
import twitterIcon from "../../assets/images/icons/twitter.png";
import telegramIcon from "../../assets/images/icons/telegram.png";

import {
  SIMULATION_MODE,
  WAR_MODE,
  TOKENMETRIC,
  TOKENOMIC,
  ROADMAP,
  TEAM_MEMBERS,
  NFT_ASSETS
} from "../../constant/landingPageSection";
import { useIsMobileView } from "../../hooks/useIsMobileView";

const royaleKingdom = [
  { label: "Home", href: "/" },
  { label: "NFT Assets", href: `#${NFT_ASSETS}` },
  { label: "Simulation mode", href: `#${SIMULATION_MODE}` },
  { label: "War Mode", href: `#${WAR_MODE}` },
  { label: "Tokenomic", href: `#${TOKENOMIC}` },
  { label: "Tokenmetric", href: `#${TOKENMETRIC}` },
  { label: "Roadmap", href: `#${ROADMAP}` },
  { label: "Team", href: `#${TEAM_MEMBERS}` }
];

export function Footer() {
  const isMobileView = useIsMobileView();

  const allRight = (
    <Box>
      <Text
        // margin="40px 0 0 0"
        fontSize="16px"
        lineHeight="26px"
        fontWeight="400"
        font="Titillium Web"
        color="rgba(255, 255, 255, 0.52)"
      >
        © 2022 Royale Kingdom. All Rights Reserved.
      </Text>
    </Box>
  );

  return (
    <FooterContainer>
      <Flex
        justifyContent="space-between"
        sm={{
          flexDirection: "flex-column",
          justifyContent: "flex-start"
        }}
      >
        <Box width="340px">
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alginItem="space-between"
            height="150px"
          >
            <Box>
              <Img src={footerLogo} height="48px" width="113px" />
              <Text
                margin="0"
                fontSize="13px"
                lineHeight="21px"
                fontWeight="400"
                font="Titillium Web"
              >
                My Kingdom - My Legacy
              </Text>
            </Box>
            <FlexItem flex="1" />
            {!isMobileView && allRight}
          </Flex>
        </Box>
        <Box
          width="240px"
          marginTop="24px"
          sm={{
            width: "100%",
            margin: "24px 0"
          }}
        >
          <Text
            fontWeight="600"
            fontSize="13px"
            font="Titillium Web"
            lineHeight="21px"
            color="#FFF"
            margin={"0 0 12px 0"}
          >
            Royale Kingdom
          </Text>
          <Box width={"100%"} sm={{ width: "100%" }}>
            <Flex justifyContent="space-between">
              {royaleKingdom.map((item, idx) => (
                <a href={item.href} key={idx}>
                  <Text
                    margin="0 0 8px 0"
                    font="Titillium Web"
                    width="120px"
                    fontSize="13px"
                    lineHeight="21px"
                    fontWeight="400"
                    color="rgba(255, 255, 255, 0.52)"
                  >
                    {item.label}
                  </Text>
                </a>
              ))}
            </Flex>
          </Box>
        </Box>
        <Box
          width="75px"
          marginTop="24px"
          sm={{
            width: "100%",
            margin: "24px 0"
          }}
        >
          <Text
            margin={"0 0 12px 0"}
            fontWeight="600"
            fontSize="13px"
            font="Titillium Web"
            lineHeight="21px"
            color="#FFF"
          >
            Legal
          </Text>
          <Box>
            <Text
              font="Titillium Web"
              width="120px"
              fontSize="13px"
              lineHeight="21px"
              fontWeight="400"
              color="rgba(255, 255, 255, 0.52)"
            >
              Terms
            </Text>
            <Text
              font="Titillium Web"
              width="120px"
              fontSize="13px"
              lineHeight="21px"
              fontWeight="400"
              color="rgba(255, 255, 255, 0.52)"
            >
              Privacy
            </Text>
          </Box>
        </Box>
        <Box
          width="200px"
          marginTop="24px"
          sm={{
            width: "100%",
            margin: "24px 0"
          }}
        >
          <Box>
            <Text
              margin={"0 0 20px 0"}
              fontWeight="600"
              fontSize="13px"
              font="Titillium Web"
              lineHeight="21px"
              color="#FFF"
            >
              Follow
            </Text>
          </Box>
          <Flex justifyContent="flex-start">
            <Box marginRight="24px" sm={{margin: '0 16px 0 0'}}>
              <Img width="16px" height="16px" src={facebookIcon} />
            </Box>
            <Box marginRight="24px" sm={{margin: '0 16px 0 0'}}>
              <Img width="16px" height="16px" src={youtubeIcon} />
            </Box>
            <Box marginRight="24px" sm={{margin: '0 16px 0 0'}}>
              <Img width="16px" height="16px" src={twitterIcon} />
            </Box>
            <Box>
              <Img width="16px" height="16px" src={telegramIcon} />
            </Box>
          </Flex>
        </Box>
      </Flex>
      {isMobileView && allRight}
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background: rgb(11, 8, 8);
  padding: 64px 80px;
  padding-top: 200px;
  position: relative;
  z-index: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 32px 24px;
    padding-top: 164px;
  }

  /* &::before {
    content: "";
    position: absolute;
    height: 400px;
    width: 100%;
    top: -160px;
    left: 0;
    background: linear-gradient(to top, rgba(0,0,0,0) black rgba(0,0,0,0))
    z-index: 1;
  } */

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 200px;
    transform: translate(0, -50%);
    top: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      black 50%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
  }
`;
