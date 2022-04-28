import styled from "styled-components";

import { Box } from "../Box";
import { Img } from "../Img";
import { Text } from "../Typo/Text";
import { Flex } from "../Grid";

import footerLogo from "../../assets/images/landingpage/footer_logo.png";
import facebook from "../../assets/images/landingpage/icon_fb.png";
import youtube from "../../assets/images/landingpage/icon_youtube.png";
import twitter from "../../assets/images/landingpage/icon_twitter.png";

import {
  BUILD_UNIQUE_WORLD,
  SIMULATION_MODE,
  WAR_MODE,
  TOKENMETRIC,
  TOKEN_UTILITIES,
  ROADMAP,
  OUR_TEAM
} from "../../constant/landingPageSection";

const royaleKingdom = [
  { label: "Home", href: "/" },
  { label: "NFT Assets", href: `#${BUILD_UNIQUE_WORLD}` },
  { label: "Farming", href: `#${SIMULATION_MODE}` },
  { label: "PVE", href: `#${WAR_MODE}` },
  { label: "Tokenomic", href: `#${TOKEN_UTILITIES}` },
  { label: "Tokenmetric", href: `#${TOKENMETRIC}` },
  { label: "Roadmap", href: `#${ROADMAP}` },
  { label: "Team", href: `#${OUR_TEAM}` }
];

export function Footer() {
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
          <Img src={footerLogo} height="32px" width="106px" />
          <Text
            margin="0"
            fontSize="13px"
            lineHeight="21px"
            font="Titillium Web"
          >
            My Kingdom - My Legacy.
          </Text>
          <Text
            margin="40px 0 0 0"
            fontSize="16px"
            lineHeight="26px"
            font="Titillium Web"
            color="#EEE2CC85"
          >
            © 2022 Royale Kingdom. All Rights Reserved.
          </Text>
        </Box>
        <Box
          width="240px"
          sm={{
            width: "100%",
            margin: "24px 0"
          }}
        >
          <Text fontWeight="bold" font="Titillium Web" lineHeight="2rem">
            Royale Kingdom
          </Text>
          <Box width={"100%"} sm={{ width: "240px" }}>
            <Flex justifyContent="space-between">
              {royaleKingdom.map((item, idx) => (
                <a href={item.href} key={idx}>
                  <Text
                    font="Titillium Web"
                    width="120px"
                    fontSize="13px"
                    lineHeight="32px"
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
          sm={{
            width: "100%",
            margin: "24px 0"
          }}
        >
          <Text fontWeight="bold" font="Titillium Web">
            Legal
          </Text>
          <Box>
            <Text
              font="Titillium Web"
              width="75px"
              fontSize="13px"
              lineHeight="32px"
            >
              Terms
            </Text>
            <Text
              font="Titillium Web"
              width="75px"
              fontSize="13px"
              lineHeight="32px"
            >
              Privacy
            </Text>
          </Box>
        </Box>
        <Box
          width="200px"
          sm={{
            width: "100%",
            margin: "24px 0"
          }}
        >
          <Box margin={"0 0 16px 0"}>
            <Text fontWeight="bold" font="Titillium Web" lineHeight="2rem">
              Follow
            </Text>
          </Box>
          <Flex justifyContent="flex-start">
            <Box margin="0 16px 0 0">
              <Img width="16px" height="16px" src={facebook} />
            </Box>
            <Box margin="0 16px 0 0">
              <Img width="16px" height="16px" src={youtube} />
            </Box>
            <Box margin="0 16px 0 0">
              <Img width="16px" height="16px" src={twitter} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background: rgb(11, 8, 8);
  padding: 64px 80px;
  padding-top: 100px;
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
