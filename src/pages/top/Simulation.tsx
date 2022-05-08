import styled from "styled-components";

import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";
import GoldenHeader from "../../components/GoldenHeader";
import { useIsMobileView } from "../../hooks/useIsMobileView";

import resource from "../../assets/images/landingpage/simulation_resource.png";
import resourceMobile from "../../assets/images/landingpage/simulation_resource-mobile.png";
import blackGradient from "../../assets/images/landingpage/simulation_black-gradient.png";
import { SIMULATION_MODE } from "../../constant/landingPageSection";

const Simulation = () => {
  const isMobileView = useIsMobileView();
  return (
    <Container>
      {/* scroll to this section */}
      <Box
        id={SIMULATION_MODE}
        position="absolute"
        width="100vw"
        height="2px"
        top="-120px"
        sm={{ top: "-50px" }}
      />
      <Content>
        <GoldenHeader>Simulation Mode</GoldenHeader>
        <Text
          margin="0 auto"
          width="628px"
          justify="center"
          sm={{
            width: "auto",
            fontSize: "16px",
            lineHeight: "26px",
            margin: "0 24px"
          }}
        >
          A new king had to swear an oath to fulfill the responsibilities of a
          monarch. The details of this oath varied from one land to another, but
          included the responsibility to keep the peace, to administer and to
          uphold the law.
        </Text>
        <Box>
          <img
            src={isMobileView ? resourceMobile : resource}
            alt="resource"
            width={isMobileView ? "100%" : "100%"}
          />
        </Box>
      </Content>
    </Container>
  );
};

export default Simulation;

const Container = styled.div`
  position: relative;
  background: rgb(20, 20, 25);
  /* margin: 32px; */
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
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 246px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 32px 0;
    padding-bottom: 80px;
    min-height: 900px;
  }
`;

const Content = styled.div`
  position: relative;
  box-sizing: border-box;
  z-index: 2;
  width: 722px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
`;
