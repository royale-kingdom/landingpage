import styled from "styled-components";
import GoldenHeader from "../../components/GoldenHeader";
import { Text } from "../../components/Typo/Text";
import { GoldenLine } from "../../components/GoldlenLine";
import { Box } from "../../components/Box";

import SparkImg from "../../assets/images/landingpage/prologue_spark.png";
import SparkMobile from "../../assets/images/landingpage/prologue_spark-mobile.png";
// import PrologueText from "../../assets/images/landingpage/Prologue.svg";
// import PrologueTextMobile from "../../assets/images/landingpage/Prologue_mobile.svg";
// import { useIsMobileView } from "../../hooks/useIsMobileView";

const Prologue = () => {
  // const isMobileView = useIsMobileView();
  return (
    <Container>
      <Content>
        <Box margin="0 auto">
          {/* <img
            src={PrologueText}
            alt="prologue"
            height="84px"
            width={"auto"}
            style={{ display: "block", margin: "0 auto" }}
          /> */}
          <GoldenHeader align="center">Prologue</GoldenHeader>
        </Box>
        <Box marginBottom="48px" sm={{ margin: "0 0 32px 0" }}>
          <GoldenLine />
        </Box>
        <Box>
          <Text
            color="rgba(250, 250, 252, 0.82)"
            fontSize="20px"
            lineHeight="32px"
            fontWeight="400"
            justify="center"
            margin="0 0 40px 0"
            sm={{ fontSize: "16px", lineHeight: "26px" }}
          >
            A new king had to swear an oath to fulfill the responsibilities of a
            monarch.
          </Text>
          <Text
            color="rgba(250, 250, 252, 0.82)"
            fontSize="20px"
            lineHeight="32px"
            fontWeight="400"
            justify="center"
            margin="0 0 40px 0"
            sm={{ fontSize: "16px", lineHeight: "26px" }}
          >
            Set in Europe during the Middle Ages, with traditions of monsters,
            dragons, and witches. Players will take on the role of the ruler to
            control their realm, defending it from natural calamities and
            creatures.
          </Text>
          <Text
            color="rgba(250, 250, 252, 0.82)"
            fontSize="20px"
            lineHeight="32px"
            fontWeight="400"
            justify="center"
            sm={{ fontSize: "16px", lineHeight: "26px" }}
          >
            During gameplay, all game elements may be manufactured in accordance
            to players decisions pondering the destiny of unique equipments,
            kingdoms, and wars
          </Text>
        </Box>
      </Content>
      <Spark />
    </Container>
  );
};

export default Prologue;

const Container = styled.div`
  width: 100vw;
  height: 48vw;
  min-height: 780px;
  position: relative;
  z-index: 0;
  @media (max-width: 768px) {
    height: 85vh;
    padding-top: 64px;
    min-height: 750px;
  }
`;

const Content = styled.div`
  padding: 10% 0%;
  max-width: 841px;
  margin: 0 auto;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 24px;
    margin: 0;
    padding-top: 10%;
  }
`;

const Spark = styled.div`
  position: absolute;
  width: 100vw;
  height: 60vw;
  top: -5%;
  left: 0;
  background: url("${SparkImg}") no-repeat;
  background-size: cover;
  z-index: 1;
  @media (max-width: 768px) {
    background: url("${SparkMobile}") no-repeat;
    width: 100vw;
    height: 100vh;
    background-position: center;
    top: -11%;
    z-index: 3;
  }
`;
