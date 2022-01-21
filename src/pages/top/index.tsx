import Tokenmetric from "./Tokenmetric";
import UniqueAsset from "./UniqueAsset";
import OurTeam from "./OurTeam";
// import PVP from "./PVP";
import Tokenomic from "./Tokenomic";
// import Farming from "./Farming";
import ExplorerMode from "./ExplorerMode";
import PVE from "./PVE";
import Roadmap from "./Roadmap";

import {
  RelativeDiv,
  CoverBackground,
  StyledImage,
  MainLogo
} from "./styled";
import { Box } from "../../components/Box";

import Cover from "../../assets/images/landingpage/BG1 Royale Kingdom ff 1.png";
import logoBanner from "../../assets/images/landingpage/logo_banner.png";
import { BaseButton } from "../../components/Button";
import Button2 from "../../assets/images/landingpage/Button2.svg";
import { Flex } from "../../components/Grid";

const Top = () => {
  return (
    <>
      <RelativeDiv>
        <CoverBackground>
          <StyledImage width={"100%"} src={Cover} alt="cover" />
        </CoverBackground>

        <MainLogo src={logoBanner} />
        <Flex justifyContent="center" style={{
            position: "absolute",
            left: "50%",
            zIndex: 10,
            transform: "translate(-50%, 50%)"
        }} top="580px" sm = {{top: "158px"}}>
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
              sm={{fontSize: "1.8rem", padding: "2rem 3rem"}}
              color="rgba(245, 237, 222, 1)"
            >ENTER MY KINGDOM</BaseButton>
        </Flex>
      </RelativeDiv>

      <Box>
        <UniqueAsset />
        {/* <Farming /> */}
        <ExplorerMode />
        <PVE />

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
