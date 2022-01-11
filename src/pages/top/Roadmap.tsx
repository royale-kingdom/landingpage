import { AlignCenter, CoverBackground, StyledImage } from "./styled";
import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import { Container } from "../../components/Grid";
import RoadmapCover from "../../assets/images/landingpage/roadmap-min.webp";

const Roadmap = () => (
  <Container margin={"8rem 0"}>
    <Heading
      font={"Judson"}
      size={"40px"}
      lineHeight={"64px"}
      fontWeight="700"
      sm={{ size: "24px", lineHeight: "36px" }}
      background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
    >
      <AlignCenter>
        Roadmap
      </AlignCenter>
    </Heading>
    <Container margin={"2rem 0"}>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        justify={"center"}
        width={"40vw"}
        margin={"0 auto"}
        sm={{ fontSize: "14px", lineHeight: "20px", width: "80vw" }}
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
