import { AlignCenter } from "./styled";
import { Heading } from "../../components/Typo/Heading";
// import { Container, Flex, FlexItem } from "../../components/Grid";
// import Squircle from "../../components/Squircle";
import styled from "styled-components";
import { Text } from "../../components/Typo/Text";
import { Box } from "../../components/Box";
import { Flex } from "../../components/Grid";
import Member from "../../components/Member";
import background from "../../assets/images/landingpage/team_background.png";
import { Img } from "../../components/Img";

const OurTeam = () => (
  <OurTeamContainer>
    <Box marginTop="175px">
      <Heading
        font={"Judson"}
        size={"40px"}
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
        <Member fullName="Long Nguyen" title="F.E DEVELOPER" />
        <Member fullName="Long Nguyen" title="SMC DEVELOPER" />
      </Flex>
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
  height: 1000px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 850px;
  }
`;
