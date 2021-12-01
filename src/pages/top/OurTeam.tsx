import {
  RelativeDiv,
  AlignCenter,
  AbsoluteDiv,
  CoverBackground,
  StyledImage
} from "./styled";
import { Heading } from "../../components/Typo/Heading";
import { Container, Flex, FlexItem } from "../../components/Grid";
import { Squircle } from "../../components/Squircle";
import { Text } from "./styled";
import Ourteam from "../../assets/images/landingpage/ourteam-min.webp";

const OurTeam = () => (
  <RelativeDiv>
    <div>
      <Heading font={"Judson"} size={"48px"} lineHeight={"78px"}>
        <AlignCenter>Our team</AlignCenter>
      </Heading>
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
    </div>

    <Container width={"450px"} margin={"2rem auto"}>
      <Flex justifyContent={"space-between"}>
        <FlexItem>
          <Heading size={"32px"} font={"Judson"}>
            Leaders
          </Heading>
        </FlexItem>
        <FlexItem>
          <Heading size={"32px"} font={"Judson"}>
            Artists
          </Heading>
        </FlexItem>
        <FlexItem>
          <Heading size={"32px"} font={"Judson"}>
            Developers
          </Heading>
        </FlexItem>
      </Flex>
    </Container>
    <Container width={"450px"} margin={"0 auto"}>
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
    <AbsoluteDiv width={"100%"}>
      <CoverBackground>
        <StyledImage src={Ourteam} alt="our team" />
      </CoverBackground>
    </AbsoluteDiv>
  </RelativeDiv>
);

export default OurTeam;
