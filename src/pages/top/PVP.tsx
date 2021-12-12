import {
  RelativeDiv,
  AbsoluteDiv,
  CoverBackground,
  StyledImage
} from "./styled";
import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import PVPCover from "../../assets/images/landingpage/PVP-cover-min.webp";

const PVP = () => (
  <RelativeDiv>
    <CoverBackground>
      <StyledImage src={PVPCover} alt="PVE cover" />
    </CoverBackground>
    <AbsoluteDiv width="572px" top={"40%"} left={"96px"} align={"center"}>
      <Heading font={"Judson"} size={"48px"} lineHeight={"78px"}>
        PVP
      </Heading>
      <Text fontSize={"18px"} lineHeight={"28px"}>
        When you sit down to work, external critics aren’t the enemy. It’s you
        who you must to fight against to do great fucking work. You must
        overcome yourself. Design as if your fucking life depended on it. Never
        let your guard down by thinking you’re fucking good enough.
      </Text>
      <Text fontSize={"18px"} lineHeight={"28px"}>
        When you design, you have to draw on your own fucking life experiences.
        If it’s not something you would want to read/look at/use then why
        fucking bother? Form follows fucking function.
      </Text>
    </AbsoluteDiv>
  </RelativeDiv>
);
export default PVP;
