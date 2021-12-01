import { RelativeDiv, AbsoluteDiv, StyledImage, Text } from "./styled"
import { Heading } from "../../components/Typo/Heading"
import TokenomicCover from "../../assets/images/landingpage/tokenomic-min.webp";

const Tokenomic = () => (
  <RelativeDiv height={"1000px"}>
    <AbsoluteDiv
      width={"540px"}
      transform={"translate(0%, -50%)"}
      top="50%"
      right={"96px"}
    >
      <StyledImage src={TokenomicCover} alt="tokenomic" />
    </AbsoluteDiv>
    <AbsoluteDiv
      width={"572px"}
      top={"50%"}
      left={"96px"}
      align={"center"}
      transform={"translate(0%, -50%)"}
    >
      <Heading font={"Judson"} size={"48px"} lineHeight={"78px"}>
        Tokenomic
      </Heading>
      <Text fontSize={"18px"} lineHeight={"28px"}>
        When you sit down to work, external critics aren’t the enemy. It’s
        you who you must to fight against to do great fucking work. You
        must overcome yourself. Design as if your fucking life depended on
        it. Never let your guard down by thinking you’re fucking good
        enough.
      </Text>
      <Text fontSize={"18px"} lineHeight={"28px"}>
        When you design, you have to draw on your own fucking life
        experiences. If it’s not something you would want to read/look
        at/use then why fucking bother? Form follows fucking function.
      </Text>
    </AbsoluteDiv>
  </RelativeDiv>
)
export default Tokenomic;