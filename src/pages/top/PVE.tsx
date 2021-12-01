import {
  RelativeDiv,
  CoverBackground,
  AbsoluteDiv,
  Text,
  StyledImage
} from "./styled";
import { ButtonOutline } from "../../components/Button";
import { Heading } from "../../components/Typo/Heading";

import PVECover from "../../assets/images/landingpage/pve-cover-min.webp";

const PVE = () => (
  <RelativeDiv>
    <CoverBackground>
      <StyledImage src={PVECover} alt="PVE cover" />
    </CoverBackground>
    <AbsoluteDiv width="572px" top={"40%"} left={"96px"} align={"center"}>
      <Heading font={"Judson"} size={"48px"} lineHeight={"78px"}>
        PVE
      </Heading>
      <Text fontSize={"18px"} lineHeight={"28px"} justify={"center"}>
        When you sit down to work, external critics aren’t the enemy. It’s
        you who you must to fight against to do great fucking work. You
        must overcome yourself. Design as if your fucking life depended on
        it. Never let your guard down by thinking you’re fucking good
        enough.
      </Text>
      <Text fontSize={"18px"} lineHeight={"28px"} justify={"center"} margin={'0 0 2rem 0'}>
        When you design, you have to draw on your own fucking life
        experiences. If it’s not something you would want to read/look
        at/use then why fucking bother? Form follows fucking function.
      </Text>
      <ButtonOutline padding={"12px 24px"} fontSize={"18px"}>
        View more
      </ButtonOutline>
    </AbsoluteDiv>
  </RelativeDiv>
);

export default PVE;
