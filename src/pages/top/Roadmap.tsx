import styled from "styled-components";

import { AlignCenter } from "./styled";
import { Img } from "../../components/Img";
import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";
import { Heading } from "../../components/Typo/Heading";
import { Container, Flex } from "../../components/Grid";
import { RoadMapLine } from "../../components/RoadMapLine";
import { GoldenText } from "../../components/GoldenText";

import activeSquircle from "../../assets/images/landingpage/active_Squircle.svg";
import squircle from "../../assets/images/landingpage/squircle.svg";
import openedTreasure from "../../assets/images/landingpage/treasure_open.svg";
import closedTreasure from "../../assets/images/landingpage/treasure_close.svg";
import xSword from "../../assets/images/landingpage/sword_x.png";
import goldenColumn from "../../assets/images/landingpage/golden_column.png";
import RoadMapBackground from "../../assets/images/landingpage/road_map_background.svg";
const nextPlan = [
  {
    quarter: "Q1/2022",
    events: ["Landing Page", "IDO Event", "MarketPlace", "Simulation Mode"]
  },

  {
    quarter: "Q2/2022",
    events: [
      "Nation Feature",
      "PVE Mode",
      "Simulation Mode (v2)",
      "Farm Mode (v2)",
      "Event Feature"
    ]
  },
  {
    quarter: "Q3/2022",
    events: ["Farm Mode (v2)", "Ranking System"]
  },
  {
    quarter: "Q4/2022",
    events: ["Tournament", "Nation War"]
  },
  {
    quarter: "Q1/2023",
    events: ["New Races"]
  }
];

/**
 * display on PC
 * @returns
 */
const OtherMileStonePC = () => {
  return (
    <>
      {nextPlan.map(({ quarter, events }, idx) => (
        <Box key={idx}>
          <Box>
            <Box height="94px" width="94px" margin="auto">
              {idx === 0 ? <OpenedTreasure /> : <ClosedTreasure />}
            </Box>
          </Box>
          <Box marginBottom="32px">
            <Box height="12px" width="4px" margin="auto">
              <Img src={goldenColumn} height="100%" width="100%" />
            </Box>
          </Box>
          <Box>
            <Box height="24px" width="24px" margin="auto">
              <Img src={xSword} height="100%" width="100%" />
            </Box>
          </Box>
          <Box>
            <GoldenText fontSize="24px" lineHeight="38px" justify="center">
              {quarter}
            </GoldenText>
          </Box>
          <Box>
            {events.map((event, idx) => (
              <Text
                key={idx}
                font="Lato"
                justify="center"
                fontSize="16px"
                lineHeight="26px"
              >
                {event}
              </Text>
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
};

const OtherMileStoneMobile = () => {
  return (
    <>
      {nextPlan.map(({ quarter, events }, idx) => (
        <Box key={idx} height="auto" width="100%" margin="12px 0">
          <Flex justifyContent="flex-start" alginItem="start">
            <Box>
              <Box height="78px" width="78px" margin="auto">
                {idx === 0 ? <OpenedTreasure /> : <ClosedTreasure />}
              </Box>
            </Box>
            <Box margin="34px 0 0 32px">
              <Box height="18px" width="18px" margin="auto">
                <Img src={xSword} height="100%" width="100%" />
              </Box>
            </Box>
            <Box margin="34px 0 0 6px">
              <GoldenText fontSize="14px" lineHeight="20px" justify="center">
                {quarter}
              </GoldenText>
            </Box>
            <Box margin="30px 0 0 16px">
              {events.map((event, idx) => (
                <Text key={idx} font="Lato" fontSize="14px" lineHeight="26px">
                  {event}
                </Text>
              ))}
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  );
};

/**
 * display on PC
 * @returns
 */
const StartedOtherMileStonePC = () => (
  <Box>
    <Box marginTop="64px" marginBottom="32px">
      <GoldenText fontSize="24px" lineHeight="38px" justify="center">
        {"STARTED"}
      </GoldenText>
    </Box>
    <Box>
      <Box height="24px" width="24px" margin="auto">
        <Img src={xSword} height="100%" width="100%" />
      </Box>
    </Box>
    <Box>
      <GoldenText fontSize="24px" lineHeight="38px" justify="center">
        {"Q4/2021"}
      </GoldenText>
    </Box>
  </Box>
);

/**
 * display on Mobile
 * @returns
 */
const StartedMileStoneMobile = () => (
  <Box width="100%" margin="12px 0">
    <Flex justifyContent="flex-start" alginItem="center">
      <Box>
        <GoldenText fontSize="14px" lineHeight="20px" justify="center">
          {"STARTED"}
        </GoldenText>
      </Box>
      <Box margin="0 0 0 44px">
        <Box height="18px" width="18px" margin="auto">
          <Img src={xSword} height="100%" width="100%" />
        </Box>
      </Box>
      <Box margin="0 0 0 6px">
        <GoldenText fontSize="14px" lineHeight="20px" justify="center">
          {"Q4/2021"}
        </GoldenText>
      </Box>
    </Flex>
  </Box>
);

const RoadMap = () => {
  const { innerWidth } = window;

  return (
    <RoadmapContainer>
      <Box>
        <Heading
          font={"Judson"}
          margin={"0"}
          size={"40px"}
          lineHeight={"64px"}
          fontWeight="700"
          sm={{ size: "24px", lineHeight: "36px" }}
          background={
            "linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
          }
        >
          <AlignCenter>Roadmap</AlignCenter>
        </Heading>
      </Box>
      <Container margin={"2rem 0"}>
        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          justify={"center"}
          width={"40vw"}
          margin={"0 auto"}
          font="Lato"
          sm={{ fontSize: "14px", lineHeight: "20px", width: "80vw" }}
        >
          Awaiting for new world mysteries
        </Text>
      </Container>

      {/* show on PC only */}
      {innerWidth > 768 && (
        <Box margin="64px 80px" position="relative">
          <Box
            height="8px"
            width="100%"
            position="absolute"
            top="108px"
            left="0"
          >
            <RoadMapLine />
          </Box>
          <Box>
            <Flex justifyContent="space-around">
              <StartedOtherMileStonePC />
              <OtherMileStonePC />
            </Flex>
          </Box>
        </Box>
      )}

      {/* show on mobile only */}
      {innerWidth <= 768 && (
        <Box margin="64px 18px" position="relative">
          <Box
            height="100%"
            width="6px"
            position="absolute"
            top="0"
            left="86px"
          >
            <RoadMapLine degree="90deg" />
          </Box>
          <Box>
            <Flex flexDirection="column" justifyContent="flex-start">
              <StartedMileStoneMobile />
              <OtherMileStoneMobile />
            </Flex>
          </Box>
        </Box>
      )}
    </RoadmapContainer>
  );
};

export default RoadMap;

const RoadmapContainer = styled.div`
  height: 100vh;
  padding: 12rem 0 8rem 0;
  box-sizing: border-box;
  position: relative;
  background: black;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${RoadMapBackground}) no-repeat;
    background-size: cover;
    background-position: center center;
    opacity: 0.08;
    mix-blend-mode: difference;
    z-index: -1;
  }
`;

const OpenedTreasure = styled.div`
  display: inline-block;
  width: 94px;
  height: 94px;
  background: url(${activeSquircle}) no-repeat;
  background-size: contain;
  position: relative;
  &::after {
    content: "";
    width: 108px;
    height: 108px;
    position: absolute;
    top: -9px;
    left: -14px;
    background: url(${openedTreasure}) no-repeat;
    background-size: contain;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      /* transform: scale(0.7); */
      top: 0px;
      width: 90px;
      height: 90px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: scale(0.7);
    width: 78px;
    height: 78px;
  }
`;
const ClosedTreasure = styled.div`
  display: inline-block;
  width: 94px;
  height: 94px;
  background: url(${squircle}) no-repeat;
  background-size: contain;
  position: relative;
  &::after {
    content: "";
    width: 94px;
    height: 94px;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${closedTreasure}) no-repeat;
    background-size: contain;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 86px;
      height: 86px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: scale(0.7);
    width: 78px;
    height: 78px;
  }
`;
