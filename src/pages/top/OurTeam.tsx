// import { AlignCenter } from "./styled";
// import { Heading } from "../../components/Typo/Heading";
// import { Container, Flex, FlexItem } from "../../components/Grid";
// import Squircle from "../../components/Squircle";
import styled from "styled-components";
import { Text } from "../../components/Typo/Text";
import { Box } from "../../components/Box";
import { Flex } from "../../components/Grid";
// import Member from "../../components/Member";
import { Img } from "../../components/Img";
import { useIsMobileView } from "../../hooks/useIsMobileView";

import background from "../../assets/images/landingpage/team_background.png";
import backgroundMobile from "../../assets/images/landingpage/team_background-mobile.png";
import LongNguyen from "../../assets/images/landingpage/our-team_longnguyen.png";
import NhatNguyen from "../../assets/images/landingpage/our-team_nhatnguyen.png";
import AnNguyen from "../../assets/images/landingpage/our-team_annguyen.png";
import { TEAM_MEMBERS } from "../../constant/landingPageSection";
import GoldenHeader from "../../components/GoldenHeader";

const OurTeam = () => {
  const isMobileView = useIsMobileView();
  return (
    <OurTeamContainer>
      <Box
        id={TEAM_MEMBERS}
        position="absolute"
        top="0"
        width="100vw"
        height="2px"
        sm={{ top: "-100px" }}
      />

      <Box paddingTop="100px">
        <GoldenHeader>Our Team</GoldenHeader>
        {/* <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        justify={"center"}
        width={"572px"}
        margin={"0 auto"}
        sm={{ fontSize: "14px", lineHeight: "20px", width: "80vw" }}
      >
        When you design, you have to draw on your own fucking life experiences.
        If it’s not something you would want to read/look at/use then why
        fucking bother? Form follows fucking function.
      </Text> */}
      </Box>

      <Box marginTop="64px" sm={{ margin: "32px 0 72px 0" }}>
        <Flex justifyContent="center" >
          <Box margin="0 16px" sm={{ margin: "24px 0", width: '100%' }}>
            <Box width="262px" sm={{ width: "184px", margin: '0 auto' }}>
              <img src={LongNguyen} alt="Long Nguyen" width="100%" />
            </Box>
            <Box>
              <Text
                justify="center"
                color="rgba(250, 250, 252, 0.52)"
                fontSize="20px"
                lineHeight="32px"
              >
                Chief Executive Officer
              </Text>
              <Text
                font="Red rose"
                fontWeight="400"
                justify="center"
                color="white"
                fontSize="20px"
                lineHeight="32px"
              >
                Long Nguyen
              </Text>
            </Box>
          </Box>
          <Box margin="0 16px" sm={{ margin: "24px 0", width: '100%' }}>
            <Box width="262px" sm={{  width: "184px", margin: '0 auto' }}>
              <img src={NhatNguyen} alt="Nhat Nguyen" width="100%" />
            </Box>
            <Box>
              <Text
                justify="center"
                color="rgba(250, 250, 252, 0.52)"
                fontSize="20px"
                lineHeight="32px"
              >
                Chief Technology Officer
              </Text>
              <Text
                font="Red rose"
                fontWeight="400"
                justify="center"
                color="white"
                fontSize="20px"
                lineHeight="32px"
              >
                Nhat Nguyen
              </Text>
            </Box>
          </Box>
          <Box margin="0 16px" sm={{ margin: "24px 0", width: '100%' }}>
            <Box width="262px" sm={{  width: "184px", margin: '0 auto' }}>
              <img src={AnNguyen} alt="An Nguyen" width="100%" />
            </Box>
            <Box>
              <Text
                justify="center"
                color="rgba(250, 250, 252, 0.52)"
                fontSize="20px"
                lineHeight="32px"
              >
                Art Director
              </Text>
              <Text
                font="Red rose"
                fontWeight="400"
                justify="center"
                color="white"
                fontSize="20px"
                lineHeight="32px"
              >
                An Nguyen
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <BottomImg>
        <Img
          src={isMobileView ? backgroundMobile : background}
          width="100%"
          height="100%"
        />
      </BottomImg>
    </OurTeamContainer>
  );
};

export default OurTeam;

const BottomImg = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-size: contain;
  z-index: -1;
  transform: translate(0, 74px);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: translate(0, 18px);
  }
`;

const OurTeamContainer = styled.div`
  height: 100vh;
  height: 766px;
  position: relative;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: auto;
    padding-bottom: 80px;
  }
`;
