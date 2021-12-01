import {
  RelativeDiv,
  CoverBackground,
  AbsoluteDiv,
  Text,
  StyledImage
} from "./styled";
import { ButtonOutline } from "../../components/Button";
import { Squircle } from "../../components/Squircle";
import { Flex, FlexItem } from "../../components/Grid";
import { Heading } from "../../components/Typo/Heading";
import FramingCover from "../../assets/images/landingpage/3rdCover-min.webp";

const Farming = () => (
  <RelativeDiv>
    <CoverBackground>
      <StyledImage src={FramingCover} alt="3rd cover" />
    </CoverBackground>

    <AbsoluteDiv left={"96px"} bottom={"128px"} width={"572px"}>
      <Heading font={"Judson"} size={"48px"} lineHeight={"78px"}>
        FARMING
      </Heading>
      <Text fontSize={"18px"} lineHeight={"28px"}>
        When you sit down to work, external critics aren’t the enemy. It’s you
        who you must to fight against to do great fucking work. You must
        overcome yourself. Design as if your fucking life depended on it. Never
        let your guard down by thinking you’re fucking good enough.
      </Text>
      <Text fontSize={"18px"} lineHeight={"28px"} margin={"0 0 2rem 0"}>
        When you design, you have to draw on your own fucking life experiences.
        If it’s not something you would want to read/look at/use then why
        fucking bother? Form follows fucking function.
      </Text>
      <ButtonOutline padding={"12px 24px"} fontSize={"18px"}>
        View more
      </ButtonOutline>
    </AbsoluteDiv>
    <AbsoluteDiv right={"96px"} bottom={"192px"}>
      <Flex flexDirection="column">
        <FlexItem marginBottom={"2.5rem"}>
          <Squircle size={96} />
        </FlexItem>
        <FlexItem marginBottom={"2.5rem"}>
          <Squircle size={96} />
        </FlexItem>
        <FlexItem marginBottom={"2.5rem"}>
          <Squircle size={96} />
        </FlexItem>
        <FlexItem marginBottom={"2.5rem"}>
          <Squircle size={96} />
        </FlexItem>
      </Flex>
    </AbsoluteDiv>
  </RelativeDiv>
);

export default Farming;
