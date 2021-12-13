import Tokenmetric from "./Tokenmetric";
import UniqueAsset from "./UniqueAsset";
import OurTeam from "./OurTeam";
import PVP from "./PVP";
import Tokenomic from "./Tokenomic";
import Farming from "./Farming";
import PVE from "./PVE";
import Roadmap from "./Roadmap";

import { RelativeDiv, CoverFlag, CoverBackground, StyledImage } from "./styled";

import Cover from "../../assets/images/landingpage/BG1 Royale Kingdom ff 1.jpg";
// import Cover from "../../assets/images/landingpage/BG1-Royale-Kingdom-cl2-1.webp";
import Cover1 from "../../assets/images/landingpage/cover-1-min.webp";

const Top = () => {
  return (
    <>
      <RelativeDiv>
        <CoverBackground>
          <StyledImage width={"100%"} src={Cover} alt="cover" />
        </CoverBackground>
        <CoverFlag>
          <img src={Cover1} alt="flag" />
        </CoverFlag>
      </RelativeDiv>

      <UniqueAsset />
      <Farming />
      <PVE />

      {/* <PVP /> */}

      <Tokenomic />
      <Tokenmetric />

      <Roadmap />
      <OurTeam />
    </>
  );
};

export default Top;
