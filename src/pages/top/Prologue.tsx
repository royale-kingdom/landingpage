import styled from "styled-components";
import GoldenHeader from "../../components/GoldenHeader";
import { Text } from "../../components/Typo/Text";

import SparkImg from "../../assets/images/landingpage/prologue_spark.png";
import SparkMobile from "../../assets/images/landingpage/prologue_spark-mobile.png";
import { Box } from "../../components/Box";
import { GoldenLine } from "../../components/GoldlenLine";

const Prologue = () => {
  return (
    <Container>
      <BlackGradient />
      <Content>
        <Box>
          <GoldenHeader align="center">Prologue</GoldenHeader>
        </Box>
        <Box marginBottom="32px" sm={{ margin: "0 0 32px 0" }}>
          <GoldenLine />
        </Box>
        <Box>
          <Text
            fontSize="20px"
            lineHeight="32px"
            justify="center"
            margin="0 0 32px 0"
            sm={{ fontSize: "16px", lineHeight: "26px" }}
          >
            A new king had to swear an oath to fulfill the responsibilities of a
            monarch.
          </Text>
          <Text
            fontSize="20px"
            lineHeight="32px"
            justify="center"
            margin="0 0 32px 0"
            sm={{ fontSize: "16px", lineHeight: "26px" }}
          >
            Set in Europe during the Middle Ages, with traditions of monsters,
            dragons, and witches. Players will take on the role of the ruler to
            control their realm, defending it from natural calamities and
            creatures.
          </Text>
          <Text
            fontSize="20px"
            lineHeight="32px"
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

const BlackGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  background-image: linear-gradient(
    to top,
    black 10%,

    rgba(0, 0, 0, 0) 100%
  );
  transform: translate(0, -100%);
  top: 0;
  left: 0;
  z-index: 1;
`;

const Container = styled.div`
  width: 100vw;
  height: 50vw;
  height: 55.5vw;
  position: relative;
  z-index: 0;
  background: black;
  @media (max-width: 768px) {
    height: 95vh;
    padding-top: 64px;
  }
`;

const Content = styled.div`
  padding: 10% 0%;
  margin: 0 20%;
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
