import styled from "styled-components";
import GoldenHeader from "../../components/GoldenHeader";
import { Text } from "../../components/Typo/Text";

import SparkImg from "../../assets/images/landingpage/prologue_spark.png";
import GoldenLinekImg from "../../assets/images/landingpage/prologue_goldenline.png";

const Prologue = () => {
  return (
    <Container>
      <GoldenLine />
      <Content>
        <GoldenHeader align="center">Prologue</GoldenHeader>
        <Text justify="center">
          A new king had to swear an oath to fulfill the responsibilities of a
          monarch.
        </Text>
        <Text justify="center">
          Set in Europe during the Middle Ages, with traditions of monsters,
          dragons, and witches. Players will take on the role of the ruler to
          control their realm, defending it from natural calamities and
          creatures.
        </Text>
        <Text justify="center">
          During gameplay, all game elements may be manufactured in accordance
          to players decisions pondering the destiny of unique equipments,
          kingdoms, and wars.During gameplay, all game elements may be
          manufactured in accordance to players decisions pondering the destiny
          of unique equipments, kingdoms, and wars.
        </Text>
      </Content>
      <Spark />
    </Container>
  );
};

export default Prologue;

const Container = styled.div`
  width: 100vw;
  height: 50vw;
  height: 55.5vw;
  position: relative;
  z-index: 0;
`;

const Content = styled.div`
  padding: 10% 20%;
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
  position: absolute;
  height: 2px;
  width: 34vw;
  z-index: 2;
  top: 15%;
  left: 50%;
  background-image: linear-gradient(
    to right,
    #8f6b2d 0%,
    #faffbf 100%,
    #8f6b2d 0%
  );
  transform: translate(-50%, 0);
  /* background: url("${GoldenLinekImg}") no-repeat; */
/ //  background-size: cover; */
`;
