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
  MainLogo,
  LogoBadge
} from "./styled";
import { Box } from "../../components/Box";

import Cover from "../../assets/images/landingpage/BG1 Royale Kingdom ff 1.png";
import logoBanner from "../../assets/images/landingpage/logo_banner.png";
import logoBadge from "../../assets/images/landingpage/logo_badgepng.png";
const Top = () => {
  return (
    <>
      <RelativeDiv>
        <CoverBackground>
          <StyledImage width={"100%"} src={Cover} alt="cover" />
        </CoverBackground>

        <MainLogo src={logoBanner} />
        <LogoBadge src={logoBadge} />
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
