import styled from "styled-components";

import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";
import GoldenHeader from "../../components/GoldenHeader";

import resource from "../../assets/images/landingpage/simulation_resource.png";
import blackGradient from "../../assets/images/landingpage/simulation_black-gradient.png";
const Simulation = () => {
  return (
    <Container>
      <Content>
        <GoldenHeader>Simulation Mode</GoldenHeader>
        <Text margin="0 auto" width="628px" justify="center">
          A new king had to swear an oath to fulfill the responsibilities of a
          monarch. The details of this oath varied from one land to another, but
          included the responsibility to keep the peace, to administer and to
          uphold the law.
        </Text>
        <Box>
          <img src={resource} alt="resource" width={"772px"} />
        </Box>
      </Content>
    </Container>
  );
};

export default Simulation;

const Container = styled.div`
  position: relative;
  background: rgb(20, 20, 25);
  padding: 32px;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 32vw;
    top: 0;
    left: 0;
    transform: translate(0, -50%);
    z-index: 1;
    background: url("${blackGradient}") no-repeat;
    background-size: cover;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 722px;
  margin: 0 auto;
`;
