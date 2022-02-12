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
  { label: "Build Unique World", href: `#${BUILD_UNIQUE_WORLD}` },
  { label: "Simulatioin Mode", href: `#${SIMULATION_MODE}` },
  { label: "War Mode", href: `#${WAR_MODE}` },
  { label: "Token Utilities", href: `#${TOKEN_UTILITIES}` },
  { label: "Tokenmetric", href: `#${TOKENMETRIC}` },
  { label: "Roadmap", href: `#${ROADMAP}` },
  { label: "Our Team", href: `#${OUR_TEAM}` }
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
          <Text margin="0" fontSize="13px" lineHeight="21px" font="Lato">
            My Kingdom - My Legacy.
          </Text>
          <Text
            margin="40px 0 0 0"
            fontSize="16px"
            lineHeight="26px"
            font="Lato"
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
          <Text fontWeight="bold" font="Lato" lineHeight="2rem">
            Royale Kingdom
          </Text>
          <Box width={"100%"} sm={{ width: "240px" }}>
            <Flex justifyContent="space-between">
              {royaleKingdom.map((item, idx) => (
                <a href={item.href} key={idx}>
                  <Text
                    font="Lato"
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
          <Text fontWeight="bold" font="Lato">
            Legal
          </Text>
          <Box>
            <Text font="Lato" width="75px" fontSize="13px" lineHeight="32px">
              Terms
            </Text>
            <Text font="Lato" width="75px" fontSize="13px" lineHeight="32px">
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
            <Text fontWeight="bold" font="Lato" lineHeight="2rem">
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
  background: #0b0808;
  padding: 64px 80px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 32px 24px;
    padding-top: 64px;
  }
`;
