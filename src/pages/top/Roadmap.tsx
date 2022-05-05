import styled from "styled-components";

// import { AlignCenter } from "./styled";
import { Img } from "../../components/Img";
import { Box } from "../../components/Box";
import { Text } from "../../components/Typo/Text";
// import { Heading } from "../../components/Typo/Heading";
import { Container, Flex, FlexItem } from "../../components/Grid";
import { RoadMapLine } from "../../components/RoadMapLine";
import { GoldenText } from "../../components/GoldenText";

// import activeSquircle from "../../assets/images/landingpage/active_Squircle.svg";
// import squircle from "../../assets/images/landingpage/squircle.svg";
import squircle from "../../assets/images/landingpage/roadmap_frame.svg";
// import openedTreasure from "../../assets/images/landingpage/treasure_open.svg";
// import closedTreasure from "../../assets/images/landingpage/treasure_close.svg";
import openedTreasure from "../../assets/images/landingpage/roadmap_open.png";
import closedTreasure from "../../assets/images/landingpage/roadmap_close.png";
import start from "../../assets/images/landingpage/roadmap_start.png";
import xSword from "../../assets/images/landingpage/sword_x.png";
// import goldenColumn from "../../assets/images/landingpage/golden_column.png";
import RoadMapBackground from "../../assets/images/landingpage/road_map_background.svg";

import { ROADMAP } from "../../constant/landingPageSection";
import GoldenHeader from "../../components/GoldenHeader";
import { useIsMobileView } from "../../hooks/useIsMobileView";

const nextPlan = [
  {
    quarter: "Q2/2022",
    events: ["Landing Page", "IDO Event", "MarketPlace", "Simulation Mode"]
  },

  {
    quarter: "Q3/2022",
    events: [
      "Nation Feature",
      "PVE Mode",
      "Simulation Mode (v2)",
      "Farm Mode (v2)",
      "Event Feature"
    ]
  },
  {
    quarter: "Q4/2022",
    events: ["PVP Mode", "Ranking System"]
  },
  {
    quarter: "Q1/2023",
    events: ["Tournament", "Nation War"]
  },
  {
    quarter: "Q2/2023",
    events: ["New Races"]
  }
];

/**
 * display on PC
 * @returns
 */
const MileStonePC = () => {
  return (
    <>
      {nextPlan.map(({ quarter, events }, idx) => (
        <Box key={idx}>
          <Box>
            <Box height="112px" width="112px" margin="auto">
              {idx === 0 ? <OpenedTreasure /> : <ClosedTreasure />}
            </Box>
          </Box>
          {/* <Box marginBottom="32px">
            <Box height="12px" width="4px" margin="auto">
              <Img src={goldenColumn} height="100%" width="100%" />
            </Box>
          </Box> */}
          <Box marginTop="24px">
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
                font="Titillium Web"
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

// const OtherMileStoneMobile = () => {
//   return (
//     <>
//       {nextPlan.map(({ quarter, events }, idx) => (
//         <Box key={idx} height="auto" width="100%" margin="12px 0">
//           <Flex justifyContent="flex-start" alginItem="start">
//             <Box>
//               <Box height="78px" width="78px" margin="auto">
//                 {idx === 0 ? <OpenedTreasure /> : <ClosedTreasure />}
//               </Box>
//             </Box>
//             <Box margin="34px 0 0 32px">
//               <Box height="18px" width="18px" margin="auto">
//                 <Img src={xSword} height="100%" width="100%" />
//               </Box>
//             </Box>
//             <Box margin="34px 0 0 6px">
//               <GoldenText fontSize="14px" lineHeight="20px" justify="center">
//                 {quarter}
//               </GoldenText>
//             </Box>
//             <Box margin="30px 0 0 16px">
//               {events.map((event, idx) => (
//                 <Text
//                   key={idx}
//                   font="Titillium Web"
//                   fontSize="14px"
//                   lineHeight="26px"
//                 >
//                   {event}
//                 </Text>
//               ))}
//             </Box>
//           </Flex>
//         </Box>
//       ))}
//     </>
//   );
// };

/**
 * display on PC
 * @returns
 */
const StartedMileStonePC = () => (
  <Box>
    <Box marginBottom="24px">
      <Box height="112px" width="112px" margin="auto">
        <img src={start} alt="start" width="112px" height="112px" />
      </Box>
    </Box>
    <Box>
      <Box height="24px" width="24px" margin="auto">
        <Img src={xSword} height="100%" width="100%" />
      </Box>
    </Box>
    <Box>
      <GoldenText fontSize="24px" lineHeight="38px" justify="center">
        Q1/2022
      </GoldenText>
    </Box>
    <Box>
      <Text font="Red rose" justify="center" fontSize="20px" lineHeight="26px">
        STARTED
      </Text>
    </Box>
  </Box>
);

/**
 * display on Mobile
 * @returns
 */
const StartedMileStoneMobile = () => (
  <Box
    position="relative"
    width="100%"
    margin="52px 0 0 0"
    padding="0 0 52px 0"
  >
    <Box position="absolute" height="50%" left="50.5%" bottom="0" zIndex={-1}>
      <Box width="100%">
        <CenterLight />
      </Box>
    </Box>
    <Box>
      <Box height="25px" width="25px" margin="auto">
        <Img src={xSword} height="100%" width="100%" />
      </Box>
    </Box>
    <Box margin="0 0 0 6px">
      <GoldenText fontSize="20px" lineHeight="32px" justify="center">
        {"Q2/2022"}
      </GoldenText>
    </Box>
    <Box marginBottom="24px">
      <Box height="112px" width="112px" margin="auto">
        <img src={start} alt="start" width="112px" height="112px" />
      </Box>
    </Box>
  </Box>
);

const MobileLeftRoadMap = ({
  quarter,
  events
}: {
  quarter: string;
  events: string[];
}) => (
  <>
    <Box padding="32px 16px 0 0">
      <Flex justifyContent="flex-end">
        <Box height="25px" width="25px">
          <Img src={xSword} height="100%" width="100%" />
        </Box>
      </Flex>
      <Box margin="0 0 0 6px">
        <GoldenText fontSize="20px" lineHeight="32px" justify="right">
          {quarter}
        </GoldenText>
      </Box>
      {events.map((event, idx) => (
        <Text
          key={idx}
          font="Titillium Web"
          fontSize="14px"
          lineHeight="26px"
          justify="right"
          margin="0 0 12px 0"
        >
          {event}
        </Text>
      ))}
    </Box>
  </>
);

const MobileRightRoadMap = ({
  quarter,
  events
}: {
  quarter: string;
  events: string[];
}) => (
  <>
    <Box padding="32px 0 0 24px">
      <Flex justifyContent="flex-start">
        <Box height="25px" width="25px">
          <Img src={xSword} height="100%" width="100%" />
        </Box>
      </Flex>
      <Box>
        <GoldenText fontSize="20px" lineHeight="32px">
          {quarter}
        </GoldenText>
      </Box>
      {events.map((event, idx) => (
        <Text
          key={idx}
          font="Titillium Web"
          fontSize="14px"
          lineHeight="26px"
          margin="0 0 12px 0"
        >
          {event}
        </Text>
      ))}
    </Box>
  </>
);

const RoadMap = () => {
  const isMobileView = useIsMobileView();

  return (
    <RoadmapContainer id={ROADMAP}>
      <Box>
        <GoldenHeader>Roadmap</GoldenHeader>
      </Box>
      <Container margin={"2rem 0"}>
        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          justify={"center"}
          width={"40vw"}
          margin={"0 auto"}
          font="Titillium Web"
          sm={{ fontSize: "14px", lineHeight: "20px", width: "80vw" }}
        >
          Awaiting for new world mysteries
        </Text>
      </Container>

      {/* show on PC only */}
      {!isMobileView && (
        <Box margin="64px 80px" position="relative">
          <Box
            height="8px"
            width="85%"
            position="absolute"
            top="15%"
            left="7.5%"
            zIndex={-1}
          >
            <RoadMapLine />
          </Box>
          <Box>
            <Flex justifyContent="space-around">
              <StartedMileStonePC />
              <MileStonePC />
            </Flex>
          </Box>
        </Box>
      )}

      {/* show on mobile only */}
      {/* {innerWidth <= 768 && (
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
      )} */}

      {isMobileView && (
        <>
          <StartedMileStoneMobile />
          {nextPlan.map((item, idx) => (
            <Box key={idx}>
              <Box position="relative" zIndex={0}>
                <CenterLight />
                <Flex alginItem="start">
                  <FlexItem flex="1">
                    {/* display info in the left */}
                    {idx === 0 ||
                      (idx % 2 === 1 && (
                        <MobileLeftRoadMap
                          quarter={item.quarter}
                          events={item.events}
                        />
                      ))}
                  </FlexItem>
                  <Box height="68px" width="68px">
                    {idx === 0 ? <OpenedTreasure /> : <ClosedTreasure />}
                  </Box>
                  <FlexItem flex="1">
                    {/* display info in the right */}
                    {idx % 2 === 0 && (
                      <MobileRightRoadMap
                        quarter={item.quarter}
                        events={item.events}
                      />
                    )}
                  </FlexItem>
                </Flex>
              </Box>
            </Box>
          ))}
        </>
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
  /* background: black; */
  z-index: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: auto;
    margin-bottom: 90px;
  }
  /* &::after {
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
  } */
`;

const CenterLight = styled.div`
  position: absolute;
  width: 4px;
  height: 100%;
  transform: translate(-50%, 0);
  top: 0;
  left: 51%;
  background: linear-gradient(
    180deg,
    #aa8c4f 18.57%,
    #faffbf 22.07%,
    #ffd879 44.81%,
    #de9d20 61.12%,
    #8f8466 77.86%
  );
  box-shadow: 0px 0px 2px rgba(250, 255, 191, 0.8),
    0px 0px 32px rgba(250, 255, 191, 0.25);
`;

const OpenedTreasure = styled.div`
  display: inline-block;
  width: 110px;
  height: 110px;
  background: url(${squircle}) no-repeat;
  background-size: contain;
  position: relative;
  &::after {
    content: "";
    width: 112px;
    height: 112px;
    position: absolute;
    top: 45%;
    left: 45%;
    transform: translate(-50%, -50%);
    background: url(${openedTreasure}) no-repeat;
    background-size: contain;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      /* transform: scale(0.7); */
      width: 90px;
      height: 90px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 78px;
    height: 78px;
  }
`;
const ClosedTreasure = styled.div`
  display: inline-block;
  width: 110px;
  height: 110px;
  background: url(${squircle}) no-repeat;
  background-size: contain;
  position: relative;
  &::after {
    content: "";
    width: 110px;
    height: 110px;
    position: absolute;
    top: 45%;
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
    width: 78px;
    height: 78px;
  }
`;
