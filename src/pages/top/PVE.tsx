import { AbsoluteDiv, ContainerWithBG } from "./styled";
import { Heading } from "../../components/Typo/Heading";
import { Text } from "../../components/Typo/Text";

// import PVECover from "../../assets/images/landingpage/pve-cover-min.webp";
import PVECover from "../../assets/images/landingpage/RK_pve 3 1.jpg";

const PVE = () => (
  <ContainerWithBG
    imgSrc={PVECover}
    width={"100vw"}
    // height={"1094px"}
    height={"100vh"}
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
        War Mode
      </Heading>

      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        War and conquest were considered to be the divine mission of the kings, whose duty was to allocate more resources and people into their domain. 
      </Text>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        margin={"2rem 0"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        In order to protect kingdoms, you would need to expand and conquer areas of perceived threat. War was also the primary means of economic gain.
      </Text>
      {/* <ButtonOutline padding={"12px 24px"} fontSize={"18px"}>
        View more
      </ButtonOutline> */}
    </AbsoluteDiv>
  </ContainerWithBG>
);

export default PVE;
