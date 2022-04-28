import styled from "styled-components";

// import { Heading } from "../../components/Typo/Heading";
import { Text } from "../../components/Typo/Text";
import { Box } from "../../components/Box";
import { Img } from "../../components/Img";

import WarModeDragon from "../../assets/images/landingpage/war_mode_dragon.png";
import WarModeStone from "../../assets/images/landingpage/war_mode_stone.png";
import WarModeFire from "../../assets/images/landingpage/war_mode_fire.png";
import WarModeBG from "../../assets/images/landingpage/war_mode_bg.png";

import { WAR_MODE } from "../../constant/landingPageSection";
import GoldenHeader from "../../components/GoldenHeader";

const WarMode = () => (
  <WarModeContainer>
    {/* dragon */}
    <Box
      id={WAR_MODE}
      position="absolute"
      width="100%"
      height="auto"
      bottom="0%"
    >
      <Img src={WarModeDragon} width="100%" height="auto" />
    </Box>

    {/* stone */}
    <Box
      position="absolute"
      transform="translate(0%, 50%)"
      width="100%"
      bottom="0%"
    >
      <Img
        src={WarModeStone}
        width="100%"
        height="100%"
        style={{ overflow: "hidden" }}
      />
    </Box>

    {/* Fire */}
    <Box
      position="absolute"
      width="100%"
      bottom="-40vw"
      overflow="hidden"
      sm={{ bottom: "-50vw" }}
    >
      <Img src={WarModeFire} width="100%" height="100%" />
    </Box>

    {/* Description */}
    <Box
      position="absolute"
      width="572px"
      top={"45%"}
      right={"90px"}
      sm={{ width: "90vw", left: "5vw", top: "25%" }}
    >
      <GoldenHeader align="left">War Mode</GoldenHeader>

      <Text
        fontSize={"20px"}
        lineHeight={"32px"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        War and conquest were considered to be the divine mission of the kings,
        whose duty was to allocate more resources and people into their domain.
      </Text>
      <Text
        fontSize={"20px"}
        lineHeight={"32px"}
        margin={"2rem 0"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        In order to protect kingdoms, you would need to expand and conquer areas
        of perceived threat. War was also the primary means of economic gain.
      </Text>
      {/* <ButtonOutline padding={"12px 24px"} fontSize={"18px"}>
        View more
      </ButtonOutline> */}
    </Box>
  </WarModeContainer>
);

export default WarMode;

const WarModeContainer = styled.div`
  width: 100vw; // 1440px
  height: 85vw;
  /* height: 900px; */
  z-index: 1;
  position: relative;
  background: rgb(20, 20, 25);
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("${WarModeBG}") no-repeat;
    background-size: cover;
    background-position: center center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 100vh;
      background-size: cover;
      background-position: 0% 0%;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    height: 100vh;
  }
`;
