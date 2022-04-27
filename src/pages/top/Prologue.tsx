import styled from "styled-components";
import GoldenHeader from "../../components/GoldenHeader";
import { Text } from "../../components/Typo/Text";

import SparkImg from "../../assets/images/landingpage/prologue_spark.png";
import GoldenLinekImg from "../../assets/images/landingpage/prologue_goldenline.png";
import { Box } from "../../components/Box";

const Prologue = () => {
  return (
    <Container>
      <BlackGradient />
      <Content>
        <Box>
          <GoldenHeader align="center">Prologue</GoldenHeader>
        </Box>
        <Box marginBottom="32px">
          <GoldenLine />
        </Box>
        <Box>
          <Text justify="center" margin="0 0 16px 0">
            A new king had to swear an oath to fulfill the responsibilities of a
            monarch.
          </Text>
          <Text justify="center" margin="0 0 16px 0">
            Set in Europe during the Middle Ages, with traditions of monsters,
            dragons, and witches. Players will take on the role of the ruler to
            control their realm, defending it from natural calamities and
            creatures.
          </Text>
          <Text justify="center">
            During gameplay, all game elements may be manufactured in accordance
            to players decisions pondering the destiny of unique equipments,
            kingdoms, and wars.During gameplay, all game elements may be
            manufactured in accordance to players decisions pondering the
            destiny of unique equipments, kingdoms, and wars.
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
`;

const Content = styled.div`
  padding: 10% 0%;
  margin: 0 20%;
  z-index: 2;
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
`;

const GoldenLine = styled.div`
  content: "";
  /* position: absolute; */
  height: 2px;
  display: inline-block;
  width: 100%;
  z-index: 2;
  /* top: 15%;
  left: 50%; */
  background-image: linear-gradient(
    to right,
    #8f6b2d52 0%,
    #faffbf 50%,
    #8f6b2d56 100%
  );
  /* transform: translate(-50%, 0); */
`;
