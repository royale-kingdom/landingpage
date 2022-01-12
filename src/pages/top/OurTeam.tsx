import {
  RelativeDiv,
  AlignCenter,
  AbsoluteDiv,
  CoverBackground,
  StyledImage
} from "./styled";
import { Heading } from "../../components/Typo/Heading";
import { Container, Flex, FlexItem } from "../../components/Grid";
import Squircle from "../../components/Squircle";
import { Text } from "../../components/Typo/Text";
import Ourteam from "../../assets/images/landingpage/ourteam-min.webp";

const OurTeam = () => (
  <RelativeDiv>
    <div>
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
        width={"40vw"}
        margin={"0 auto"}
        sm={{ fontSize: "14px", lineHeight: "20px", width: "80vw" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        When you design, you have to draw on your own fucking life experiences.
        If it’s not something you would want to read/look at/use then why
        fucking bother? Form follows fucking function.
      </Text>
    </div>

    <Container width={"450px"} margin={"2rem auto"} sm={{ width: "80vw" }}>
      <Flex
        justifyContent={"space-between"}
        sm={{ justifyContent: "space-around" }}
      >
        <FlexItem>
          <Heading size={"32px"} font={"Judson"} sm={{ size: "16px" }}>
            Leaders
          </Heading>
        </FlexItem>
        <FlexItem>
          <Heading size={"32px"} font={"Judson"} sm={{ size: "16px" }}>
            Artists
          </Heading>
        </FlexItem>
        <FlexItem>
          <Heading size={"32px"} font={"Judson"} sm={{ size: "16px" }}>
            Developers
          </Heading>
        </FlexItem>
      </Flex>
    </Container>
    <Container width={"450px"} margin={"2rem auto"} sm={{ width: "80vw" }}>
      <Flex justifyContent={"space-between"}>
        <FlexItem>
          <Squircle size={80} />
        </FlexItem>
        <FlexItem>
          <Squircle size={80} />
        </FlexItem>
        <FlexItem>
          <Squircle size={80} />
        </FlexItem>
        <FlexItem>
          <Squircle size={80} />
        </FlexItem>
      </Flex>
    </Container>
    {/* <AbsoluteDiv width={"100%"}>
      <CoverBackground>
        <StyledImage src={Ourteam} alt="our team" />
      </CoverBackground>
    </AbsoluteDiv> */}
  </RelativeDiv>
);

export default OurTeam;
