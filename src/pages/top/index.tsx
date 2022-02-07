import Tokenmetric from "./Tokenmetric";
import UniqueAsset from "./UniqueAsset";
import OurTeam from "./OurTeam";
// import PVP from "./PVP";
import Tokenomic from "./Tokenomic";
// import Farming from "./Farming";
import ExplorerMode from "./ExplorerMode";
import WarMode from "./WarMode";
import Roadmap from "./Roadmap";
import Banner from "./Banner";

import { Box } from "../../components/Box";

// import logoBanner from "../../assets/images/landingpage/logo_banner.png";

const Top = () => {
  return (
    <Box position={"relative"}>
      <Banner />
      <UniqueAsset />
      <ExplorerMode />
      <WarMode />

      {/* <PVP /> */}

      <Tokenomic />
      <Tokenmetric />

      <Roadmap />
      <OurTeam />
    </Box>
  );
};

export default Top;
