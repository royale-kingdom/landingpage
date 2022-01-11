import { AbsoluteDiv, ContainerWithBG } from "./styled";
import { Heading } from "../../components/Typo/Heading";
import { Text } from "../../components/Typo/Text";

// import PVECover from "../../assets/images/landingpage/pve-cover-min.webp";
import PVECover from "../../assets/images/landingpage/RK_pve 3 1.jpg";

const PVE = () => (
  <ContainerWithBG
    imgSrc={PVECover}
    width={"100vw"}
    height={"1094px"}
    sm={{ backgroundPosition: "75%" }}
  >
    <AbsoluteDiv
      width="572px"
      top={"40%"}
      left={"96px"}
      sm={{ width: "90vw", left: "5vw", top: "2rem" }}
    >
      <Heading
        font={"Judson"}
        size={"40px"}
        lineHeight={"64px"}
        sm={{ size: "24px", lineHeight: "36px" }}
        fontWeight="700"
        background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
      >
        PVE
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
      {/* <ButtonOutline padding={"12px 24px"} fontSize={"18px"}>
        View more
      </ButtonOutline> */}
    </AbsoluteDiv>
  </ContainerWithBG>
);

export default PVE;
