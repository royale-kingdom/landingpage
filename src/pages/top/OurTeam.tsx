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
import background from "../../assets/images/landingpage/team_background.png";
// import shootingStar from "../../assets/images/landingpage/our_team_shooting_star.png";
import StarBackground from "../../assets/images/landingpage/stars_background_1.png";
import LongNguyen from "../../assets/images/landingpage/our-team_longnguyen.png";
import NhatNguyen from "../../assets/images/landingpage/our-team_nhatnguyen.png";
import AnNguyen from "../../assets/images/landingpage/our-team_annguyen.png";
import { OUR_TEAM } from "../../constant/landingPageSection";
import GoldenHeader from "../../components/GoldenHeader";

const OurTeam = () => (
  <OurTeamContainer id={OUR_TEAM}>
    <Box paddingTop="100px" sm={{ padding: "120px 0 40px 0" }}>
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

    <Box marginTop="64px" sm={{ margin: "32px 0 0 0" }}>
      <Flex justifyContent="center">
        <Box margin="0 32px">
          <Box>
            <img src={LongNguyen} alt="Long Nguyen" />
          </Box>
          <Box>
            <Text
              justify="center"
              color="rgba(250, 250, 252, 0.52)"
              fontSize="20px"
              lineHeight="32px"
            >
              Chief of Operation
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
        <Box margin="0 32px">
          <Box>
            <img src={NhatNguyen} alt="Nhat Nguyen" />
          </Box>
          <Box>
            <Text
              justify="center"
              color="rgba(250, 250, 252, 0.52)"
              fontSize="20px"
              lineHeight="32px"
            >
              Chief of Tech
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
        <Box margin="0 32px">
          <Box>
            <img src={AnNguyen} alt="An Nguyen" />
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
        {/* <Member
          fullName="Long Nguyen"
          title="CHIEF OF OPERATION"
          avatar={LongNguyen}
        />
        <Member
          fullName="Nhat Nguyen"
          title="CHIEF OF TECH"
          avatar={NhatNguyen}
        />
        <Member fullName="An Nguyen" title="ART DIRECTOR" avatar={AnNguyen} /> */}
      </Flex>
      {/* <Flex justifyContent="center">
        <Member fullName="Hang Nguyen" title="2D ARTIST" />
        <Member fullName="Phuong Lou" title="2D ARTIST" />
        <Member fullName="Hang Ung" title="F.E DEVELOPER" />
        <Member fullName="Louis Do" title="SMC DEVELOPER" />
      </Flex> */}
    </Box>
    {/* <Box
      position="absolute"
      width="500px"
      height="420px"
      right="5%"
      bottom="10%"
      zIndex={-2}
      sm={{ width: "50vw", height: "auto", bottom: "5%", right: "0" }}
    >
      <Img
        src={shootingStar}
        width={"100%"}
        height={"100%"}
        style={{ mixBlendMode: "screen" }}
      />
    </Box> */}
    <BottomImg>
      <Img src={background} width="100%" height="100%" />
    </BottomImg>
  </OurTeamContainer>
);

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
  position: relative;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 115vh;
  }

  /*  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${StarBackground}) no-repeat;
    background-position: center;
    background-size: cover;
    mix-blend-mode: difference;
    opacity: 0.1;
    z-index: -5;
  } */
`;
