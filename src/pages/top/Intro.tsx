import styled from "styled-components";

import GoldenHeader from "../../components/GoldenHeader";
import MaleImg from "../../assets/images/landingpage/intro_male.png";
import DragonImg from "../../assets/images/landingpage/intro_dragon.png";
import PyramidImg from "../../assets/images/landingpage/intro_pyramid.png";
import SparkImg from "../../assets/images/landingpage/intro_male.png";
// import MaleImg from "../../assets/images/intro_male.png";

const Intro = () => {
  return (
    <Container>
      {/* <GoldenHeader>Prologue</GoldenHeader> */}
      <Male />
      <Dragon />

      <Pyramid />
    </Container>
  );
};

export default Intro;

// Ratio height: 900px; width: 1440px
const Container = styled.div`
  width: 100vw;
  height: 55.5vw;
  position: relative;
  z-index: 0;
  background: green;
`;

const Background = styled.div`
  background: green;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Male = styled.div`
  position: absolute;
  z-index: 1;
  background-image: url("${MaleImg}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 45vw;
  height: 100%;
  bottom: 0;
  left: 0;
`;
const Dragon = styled.div`
  position: absolute;
  z-index: 1;
  background-image: url("${DragonImg}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 45vw;
  height: 100%;
  bottom: 0;
  right: 0;
`;
const Pyramid = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  z-index: 2;
  width: 62.5vw;
  height: 100%;
  bottom: 0;
  left: 50%;
  background-image: url("${PyramidImg}");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Spark = styled.div`
  position: absolute;
`;
const Logo = styled.div`
  position: absolute;
`;
