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
import goldemColumn from "../../assets/images/landingpage/golden_column.png";

const nextPlan = [
  {
    quarter: "Q1/2022",
    events: [
      "Landing Page",
      "IDO Event",
      "MarketPlace",
      "Farm Mode",
      "Explorer Mode"
    ]
  },

  {
    quarter: "Q2/2022",
    events: [
      "Nation Feature",
      "PVE Mode",
      "Explorer Mode (v2)",
      "Farm Mode (v2)",
      "Event Feature"
    ]
  },
  {
    quarter: "Q3/2022",
    events: ["PVP Mode", "Ranking System"]
  },
  {
    quarter: "Q4/2022",
    events: ["Tournament", "Nation War"]
  }
];
const MileStone = () => {
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
              <Img src={goldemColumn} height="100%" width="100%" />
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

const RoadMap = () => (
  <Container margin={"8rem 0"}>
    <Heading
      font={"Judson"}
      size={"40px"}
      lineHeight={"64px"}
      fontWeight="700"
      sm={{ size: "24px", lineHeight: "36px" }}
      background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
    >
      <AlignCenter>Roadmap</AlignCenter>
    </Heading>
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
    <Box margin="64px 80px" position="relative">
      <Box height="8px" width="100%" position="absolute" top="108px" left="0">
        <RoadMapLine />
      </Box>
      <Box>
        <Flex justifyContent="space-around">
          <Box>
            <Box>
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
          <MileStone />
        </Flex>
      </Box>
    </Box>
  </Container>
);

export default RoadMap;

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
  }
`;
