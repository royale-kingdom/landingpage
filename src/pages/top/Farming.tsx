import { AbsoluteDiv, ContainerWithBG } from "./styled";
import { Text } from "../../components/Typo/Text";
import { ButtonOutline } from "../../components/Button";
import Squircle from "../../components/Squircle";
import { Flex, FlexItem } from "../../components/Grid";
import { Heading } from "../../components/Typo/Heading";
import FramingCover from "../../assets/images/landingpage/3rdCover-min.webp";

const Farming = () => (
  <ContainerWithBG
    imgSrc={FramingCover}
    width={"100vw"}
    height={"1440px"}
    sm={{ backgroundPosition: "75%" }}
  >
    {/* Description */}
    <AbsoluteDiv
      left={"96px"}
      bottom={"128px"}
      width={"572px"}
      sm={{ left: "5vw", top: "2rem", width: "90vw", height: "auto" }}
    >
      <Heading
        font={"Judson"}
        size={"48px"}
        lineHeight={"78px"}
        sm={{ size: "24px", lineHeight: "36px" }}
      >
        FARMING
      </Heading>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
      >
        When you sit down to work, external critics aren’t the enemy. It’s you
        who you must to fight against to do great fucking work. You must
        overcome yourself. Design as if your fucking life depended on it. Never
        let your guard down by thinking you’re fucking good enough.
      </Text>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        margin={"2rem 0"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
      >
        When you design, you have to draw on your own fucking life experiences.
        If it’s not something you would want to read/look at/use then why
        fucking bother? Form follows fucking function.
      </Text>
      <ButtonOutline padding={"12px 24px"} fontSize={"18px"}>
        View more
      </ButtonOutline>
    </AbsoluteDiv>

    {/* Squircle Block */}
    <AbsoluteDiv
      right={"96px"}
      bottom={"192px"}
      sm={{ bottom: "4rem", width: "90vw", left: "5vw" }}
    >
      <Flex
        flexDirection="column"
        sm={{
          flexDirection: "row",
          justifyContent: "space-around",
          alginItem: "center"
        }}
      >
        <FlexItem marginBottom={"2.5rem"}>
          <Squircle size={96} active={true} />
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
  </ContainerWithBG>
);

export default Farming;
