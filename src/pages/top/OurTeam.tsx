import { AlignCenter } from "./styled";
import { Heading } from "../../components/Typo/Heading";
// import { Container, Flex, FlexItem } from "../../components/Grid";
// import Squircle from "../../components/Squircle";
import styled from "styled-components";
import { Text } from "../../components/Typo/Text";
import { Box } from "../../components/Box";
import { Flex } from "../../components/Grid";
import Member from "../../components/Member";
import { Img } from "../../components/Img";
import background from "../../assets/images/landingpage/team_background.png";
import shootingStar from "../../assets/images/landingpage/our_team_shooting_star.png";
import StarBackground from "../../assets/images/landingpage/stars_background_1.png";

const OurTeam = () => (
  <OurTeamContainer>
    <Box paddingTop="250px" sm={{ padding: "120px 0 40px 0" }}>
      <Heading
        font={"Judson"}
        size={"40px"}
        margin={"0"}
        lineHeight={"64px"}
        fontWeight="700"
        sm={{ size: "24px", lineHeight: "36px" }}
        background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
      >
        <AlignCenter>Our team</AlignCenter>
      </Heading>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        justify={"center"}
        width={"572px"}
        margin={"0 auto"}
        sm={{ fontSize: "14px", lineHeight: "20px", width: "80vw" }}
        font={"Lato"}
      >
        When you design, you have to draw on your own fucking life experiences.
        If it’s not something you would want to read/look at/use then why
        fucking bother? Form follows fucking function.
      </Text>
    </Box>

    <Box marginTop="64px" sm={{ margin: "32px 0 0 0" }}>
      <Flex justifyContent="center">
        <Member fullName="Long Nguyen" title="CHIEF OF OPERATION" />
        <Member fullName="Nhat Nguyen" title="CHIEF OF TECH" />
        <Member fullName="An Nguyen" title="ART DIRECTOR" />
      </Flex>
      <Flex justifyContent="center">
        <Member fullName="Hang Nguyen" title="2D ARTIST" />
        <Member fullName="Phuong Lou" title="2D ARTIST" />
        <Member fullName="Hang Ung" title="F.E DEVELOPER" />
        <Member fullName="Louis Do" title="SMC DEVELOPER" />
      </Flex>
    </Box>
    <Box
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
    </Box>
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
  height: 130vh;
  position: relative;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 115vh;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    z-index: -6;
  }
  &::after {
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
  }
`;
