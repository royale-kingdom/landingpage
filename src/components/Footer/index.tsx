import styled from "styled-components";

import { Box } from "../Box";
import { Img } from "../Img";
import { Text } from "../Typo/Text";
import { Flex } from "../Grid";

import footerLogo from "../../assets/images/landingpage/footer_logo.png";
import facebook from "../../assets/images/landingpage/icon_fb.png";
import youtube from "../../assets/images/landingpage/icon_youtube.png";
import twitter from "../../assets/images/landingpage/icon_twitter.png";

const royaleKingdom = [
  "Home",
  "Tokenomic",
  "NFT Assets",
  "Tokenmetric",
  "Farming",
  "Roadmap",
  "PVE",
  "Team"
];

export function Footer() {
  return (
    <FooterContainer>
      <Img src={footerLogo} height="32px" width="106px" />
      <Flex
        justifyContent="space-between"
        sm={{
          flexDirection: "flex-column",
          justifyContent: "flex-start"
        }}
      >
        <Box width="340px">
          <Text margin="20px 0" fontSize="13px" lineHeight="21px" font="Lato">
            Design as if your fucking life depended on it. Whatever can be
            captured in words can be conquered with understanding.
          </Text>
          <Text
            margin="40px 0 0 0"
            fontSize="16px"
            lineHeight="26px"
            font="Lato"
          >
            © 2022 RoyaleKingdom. All Rights Reserved.
          </Text>
        </Box>
        <Box
          width="180px"
          sm={{
            width: "100%",
            margin: "24px 0"
          }}
        >
          <Text fontWeight="bold" font="Lato">
            RoyaleKingdom
          </Text>
          <Box width={"100%"} sm={{ width: "180px" }}>
            <Flex justifyContent="space-between">
              {royaleKingdom.map((item, idx) => (
                <Text
                  key={idx}
                  font="Lato"
                  width="75px"
                  fontSize="13px"
                  lineHeight="21px"
                >
                  {item}
                </Text>
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
            <Text font="Lato" width="75px" fontSize="13px" lineHeight="21px">
              Terms
            </Text>
            <Text font="Lato" width="75px" fontSize="13px" lineHeight="21px">
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
            {" "}
            <Text>Follow</Text>
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
