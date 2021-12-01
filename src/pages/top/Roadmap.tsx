import { AlignCenter, CoverBackground, StyledImage, Text } from "./styled";
import { Heading } from "../../components/Typo/Heading";
import { Container } from "../../components/Grid";
import RoadmapCover from "../../assets/images/landingpage/roadmap-min.webp";

const Roadmap = () => (
  <Container margin={"4rem 0"}>
    <Heading font={"Judson"} size={"48px"} lineHeight={"78px"}>
      <AlignCenter>Roadmap</AlignCenter>
    </Heading>
    <Container margin={"2rem 0"}>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        justify={"center"}
        width={"40vw"}
        margin={"0 auto"}
      >
        When you design, you have to draw on your own fucking life experiences.
        If it’s not something you would want to read/look at/use then why
        fucking bother? Form follows fucking function.
      </Text>
    </Container>
    <CoverBackground>
      <StyledImage src={RoadmapCover} alt="roadmap" />
    </CoverBackground>
  </Container>
);

export default Roadmap;
