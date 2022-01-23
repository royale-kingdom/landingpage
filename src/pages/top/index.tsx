import styled from "styled-components";
import Tokenmetric from "./Tokenmetric";
import UniqueAsset from "./UniqueAsset";
import OurTeam from "./OurTeam";
// import PVP from "./PVP";
import Tokenomic from "./Tokenomic";
// import Farming from "./Farming";
import ExplorerMode from "./ExplorerMode";
import WarMode from "./WarMode";
import Roadmap from "./Roadmap";

import { CoverBackground, StyledImage } from "./styled";
import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";

import Cover from "../../assets/images/landingpage/BG1 Royale Kingdom ff 1.png";
import logoBanner from "../../assets/images/landingpage/logo_banner.png";
import { BaseButton } from "../../components/Button";
import Button2 from "../../assets/images/landingpage/Button2.svg";

const Top = () => {
  return (
    <>
      <Box height={"35vw"} position={"relative"} zIndex={2}>
        <CoverBackground>
          <StyledImage width={"100%"} src={Cover} alt="cover" />
        </CoverBackground>

        <MainLogo src={logoBanner} />
        <Box
          position={"absolute"}
          transform="translate(-50%, 50%)"
          left="50%"
          top="110%"
          sm={{ top: "90%" }}
        >
          <BaseButton
            style={{
              backgroundImage: `url(${Button2})`,
              backgroundRepeat: "no-repeat",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundPosition: "center center",
              backgroundSize: "contain"
            }}
            fontSize="24px"
            padding="25px 40px"
            sm={{ fontSize: "1.8rem", padding: "2rem 1rem" }}
            color="rgba(245, 237, 222, 1)"
          >
            <Text fontWeight="bold" padding="0 16px" sm={{ fontSize: "10px" }}>
              ENTER MY KINGDOM
            </Text>
          </BaseButton>
        </Box>
        {/* </Flex> */}
      </Box>

      <Box>
        <UniqueAsset />
        <ExplorerMode />
        <WarMode />

        {/* <PVP /> */}

        <Tokenomic />
        <Tokenmetric />

        <Roadmap />
        <OurTeam />
      </Box>
    </>
  );
};

export default Top;

const MainLogo = styled.img`
  position: absolute;
  transform: translate(-50%, 50%);
  width: 50vw;
  height: 416px;
  /* bottom: 80px; */
  top: 0px;
  left: 50%;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 270px;
    height: 145px;
    top: -60px;
  }
`;
