import { RelativeDiv, AbsoluteDiv, StyledImage } from "./styled";
import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import TokenomicCover from "../../assets/images/landingpage/token-util.png";

const Tokenomic = () => (
  <RelativeDiv 
    // height={"1000px"} 
    height="100vh"
    sm={{ height: "100vh" }}
  >
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
        size={"40px"}
        lineHeight={"64px"}
        sm={{ size: "24px", lineHeight: "36px" }}
        fontWeight="700"
        background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
      >
        Token Utilities
      </Heading>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        RYK is the main token that will be used on the marketplace. You can exchange characters, weapons, armors and lands too. 
        RYK will also be used as your rewards for Play2earn features.
      </Text>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        margin={"2rem 0"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        Player can use RYK to take part in adjusting the world through DAO.
      </Text>
    </AbsoluteDiv>
  </RelativeDiv>
);
export default Tokenomic;
