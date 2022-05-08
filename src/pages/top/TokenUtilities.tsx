import styled from "styled-components";

import { StyledImage } from "./styled";
import { Text } from "../../components/Typo/Text";
import { Box } from "../../components/Box";
import GoldenHeader from "../../components/GoldenHeader";

import TokenomicCover from "../../assets/images/landingpage/token-util.png";
// import TokenomicCover from "../../assets/images/landingpage/token-utilities_cloud.png";
// import StarBackground from "../../assets/images/landingpage/stars_background_1.png";
// import CloudImage from "../../assets/images/landingpage/cloud_image.svg";
import CloudImage from "../../assets/images/landingpage/token-utilities_cloud.png";
// import CloudImage from "../../assets/images/landingpage/cloud_image.png";

import { TOKENOMIC } from "../../constant/landingPageSection";

const TokenUtilities = () => {
  return (
    // id scroll của section này đặt cuối warmode section phía trên nó
    <Container>
      <Box
        id={TOKENOMIC}
        position="absolute"
        width="100vw"
        height="2px"
        top="-145px"
      />

      <Box sm={{ padding: "10% 0 0 0" }} zIndex={2}>
        <Box
          height="23vw"
          width="23vw"
          margin="0 auto"
          sm={{ height: "50vw", width: "50vw" }}
        >
          <StyledImage
            src={TokenomicCover}
            width={"100%"}
            height={"100%"}
            alt="tokenomic"
          />
        </Box>
        <Box width="70vw" margin="0 auto" sm={{ width: "100vw" }}>
          <GoldenHeader>Token Utilities</GoldenHeader>
          <Text
            margin="auto"
            fontWeight="500"
            fontSize={"18px"}
            lineHeight={"28px"}
            sm={{
              fontSize: "14px",
              lineHeight: "20px",
              justify: "justify",
              padding: "0 20px"
            }}
            color="rgba(238, 226, 204, 0.82)"
            style={{ textAlign: "center", maxWidth: "600px" }}
          >
            RYK is the main token that will be used on the marketplace. You can
            exchange characters, weapons, armors and lands too. Also, RYK can be
            used to ake part in adjusting the world through DAO.
            <br />
            Also, RYK will be used as your rewards for Play2earn features.
            That's right, only 1 token used for everything, no other token.
          </Text>
        </Box>
      </Box>
      <GoldCloud />
    </Container>
  );
};

export default TokenUtilities;

const GoldCloud = styled.div`
  position: absolute;
  width: 100vw; // 2880 x 2162
  height: 75vw;
  bottom: -10%;
  left: 0;
  z-index: -1;
  background: url(${CloudImage}) no-repeat;
  background-size: cover;
  /* mix-blend-mode: difference; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 200vw;
    height: 100vw;
    bottom: 5%;
    left: -43%%;
    background-position: 0% 60%;
  }
`;

const Container = styled.div`
  width: 100vw; // 1440px
  height: 80vw;
  min-height: 900px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 210vw;
    padding: ;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
    background: rgb(20, 20, 25);
    opacity: 0.08;
  }
  &::after {
    content: "";
    background: black;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* display: none; */
    /* top: -200px; */
  }
`;
