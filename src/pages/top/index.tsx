import Tokenmetric from "./Tokenmetric";
// import BuildUniqueWorld from "./BuildUniqueWorld";
import OurTeam from "./OurTeam";
// import PVP from "./PVP";
import TokenUtilities from "./TokenUtilities";
// import Farming from "./Farming";
// import SimulationMode from "./SimulationMode";
import WarMode from "./WarMode";
import Roadmap from "./Roadmap";
// import Banner from "./Banner";

import { Box } from "../../components/Box";
import Hero from "./Hero";
import Prologue from "./Prologue";
import UniqueNFTAssets from "./UniqueNFTAssets";

// import logoBanner from "../../assets/images/landingpage/logo_banner.png";

const Top = () => {
  return (
    <Box position={"relative"}>
      {/* <Banner /> */}
      <Hero />
      <Prologue />

      <UniqueNFTAssets />
      {/* <BuildUniqueWorld /> */}
      {/* <SimulationMode /> */}
      <WarMode />

      {/* <PVP /> */}

      <TokenUtilities />
      <Tokenmetric />

      <Roadmap />
      <OurTeam />
    </Box>
  );
};

export default Top;
