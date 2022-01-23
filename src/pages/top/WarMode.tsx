import styled from "styled-components";

import { Heading } from "../../components/Typo/Heading";
import { Text } from "../../components/Typo/Text";
import { Box } from "../../components/Box";
import { Img } from "../../components/Img";

import WarModeBG from "../../assets/images/landingpage/war_mode_bg.png";
import WarModeDragon from "../../assets/images/landingpage/war_mode_dragon.png";
import WarModeStone from "../../assets/images/landingpage/war_mode_stone.png";
import WarModeFire from "../../assets/images/landingpage/war_mode_fire.png";

const WarMode = () => (
  <>
    <WarModeContainer>
      <Box
        position="absolute"
        width="100vw"
        height="88vw"
        bottom="-4vw"
        overflow="hidden"
        sm={{ bottom: "-40vh" }}
      >
        <Img src={WarModeDragon} width="100%" height="100%" />
      </Box>

      <Box
        position="absolute"
        width="100vw"
        bottom="-50vw"
        sm={{ bottom: "-70vh" }}
      >
        <Img
          src={WarModeStone}
          width="100%"
          height="100%"
          style={{ overflow: "hidden" }}
        />
      </Box>
      <Box
        position="absolute"
        width="100vw"
        bottom="-30vw"
        overflow="hidden"
        sm={{ bottom: "-50vh" }}
      >
        <Img src={WarModeFire} width="100%" height="100%" />
      </Box>
      <Box
        position="absolute"
        width="572px"
        top={"40%"}
        left={"96px"}
        sm={{ width: "90vw", left: "5vw", top: "1rem" }}
      >
        <Heading
          font={"Judson"}
          size={"40px"}
          lineHeight={"64px"}
          sm={{ size: "24px", lineHeight: "36px" }}
          fontWeight="700"
          background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
        >
          War Mode
        </Heading>

        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          sm={{ fontSize: "14px", lineHeight: "20px" }}
          color="rgba(238, 226, 204, 0.82)"
        >
          War and conquest were considered to be the divine mission of the
          kings, whose duty was to allocate more resources and people into their
          domain.
        </Text>
        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          margin={"2rem 0"}
          sm={{ fontSize: "14px", lineHeight: "20px" }}
          color="rgba(238, 226, 204, 0.82)"
        >
          In order to protect kingdoms, you would need to expand and conquer
          areas of perceived threat. War was also the primary means of economic
          gain.
        </Text>
        {/* <ButtonOutline padding={"12px 24px"} fontSize={"18px"}>
        View more
      </ButtonOutline> */}
      </Box>
    </WarModeContainer>
  </>
);

export default WarMode;

const WarModeContainer = styled.div`
  width: 100vw;
  height: 63vw;
  position: relative;
  top: -600px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 1440px;
    background: url("${WarModeBG}");
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 100vh;
      top: -200px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* top: 0; */
  }
`;
