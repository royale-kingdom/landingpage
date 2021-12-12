import { RelativeDiv, AbsoluteDiv, StyledImage } from "./styled";
import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import TokenomicCover from "../../assets/images/landingpage/tokenomic-min.webp";

const Tokenomic = () => (
  <RelativeDiv height={"1000px"} sm={{ height: "100vh" }}>
    <AbsoluteDiv
      width={"540px"}
      transform={"translate(0%, -50%)"}
      top="50%"
      right={"96px"}
      sm={{ width: "80vw", bottom: "2rem", left: "10vw", transform: "unset" }}
    >
      <StyledImage src={TokenomicCover} width={"100%"} alt="tokenomic" />
    </AbsoluteDiv>
    <AbsoluteDiv
      width={"572px"}
      top={"50%"}
      left={"96px"}
      align={"center"}
      transform={"translate(0%, -50%)"}
      sm={{ width: "90vw", top: "2rem", left: "5vw", transform: "unset" }}
    >
      <Heading
        font={"Judson"}
        size={"48px"}
        lineHeight={"78px"}
        sm={{ size: "24px", lineHeight: "36px" }}
      >
        Tokenomic
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
    </AbsoluteDiv>
  </RelativeDiv>
);
export default Tokenomic;
