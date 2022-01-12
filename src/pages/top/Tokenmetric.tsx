import { useState } from "react";
import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";

import { Box } from "./styled";
import { Flex, FlexItem } from "../../components/Grid";
import { Heading } from "../../components/Typo/Heading";
import { Text } from "../../components/Typo/Text";

import SeparatorImage from "../../assets/images/landingpage/separator.png";
import { Img } from "../../components/Img";

const TokenmetricTable = styled.table`
  width: 100%;
  tbody {
    tr {
      td {
        width: 33%;
        padding: 1rem 0;
      }
    }
  }
`;

const tableDump: any[] = [
  { label: "Play to earn", percent: "30%", price: "60,000,000" },
  { label: "Reserve funds", percent: "18%", price: "36,000,000" },
  { label: "Team, advisor", percent: "16%", price: "32,000,000" },
  { label: "Operation funds", percent: "16%", price: "32,000,000" },
  { label: "Private Sale", percent: "8%", price: "16,000,000" },
  { label: "Airdrop", percent: "1%", price: "2,000,000" }
];

const shiftSize = 4;
const defaultColor = "#866527";
const activeColor = "#f6c65c";

const pieChartData = [
  {
    title: "Play to earn",
    value: 30,
    color: defaultColor
  },
  {
    title: "Reserve funds",
    value: 18,
    color: defaultColor
  },
  {
    title: "Team, advisor",
    value: 16,
    color: defaultColor
  },
  {
    title: "Operation funds",
    value: 16,
    color: defaultColor
  },
  { title: "Private Sale", value: 8, color: defaultColor },
  { title: "Airdrop", value: 1, color: defaultColor }
];

const defaultLabelStyle = { fill: "#E38627", fontSize: "48px" };

const CustomPieChart = () => {
  const [hovered, setHovered] = useState(0);
  const data = pieChartData.map((segment, index) => ({
    ...segment,
    color: index === hovered ? activeColor : defaultColor
  }));

  return (
    <PieChart
      data={data}
      segmentsShift={(index) => (index === hovered ? shiftSize : 0.4)}
      startAngle={270}
      animate={true}
      segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
      label={({ x, y, dx, dy, dataEntry }) => {
        return (
          <text
            x={"50%"}
            y={"50%"}
            dx={dx * 1.5}
            dy={dy * 1.5}
            dominant-baseline="middle"
            text-anchor="middle"
            style={{
              fontSize: "4px",
              fill: "#afafafb5"
            }}
          >
            {dataEntry.title}
          </text>
        );
      }}
      labelStyle={{ ...defaultLabelStyle }}
      paddingAngle={0}
      lineWidth={40}
      viewBoxSize={[120, 120]}
      center={[60, 60]}
      onMouseOver={(e, index) => setHovered(index)}
    />
  );
};

const Tokenmetric = () => {
  return (
    <div>
      <Heading
        font={"Judson"}
        size={"40px"}
        lineHeight={"64px"}
        align={"center"}
        sm={{ size: "24px", lineHeight: "36px" }}
        fontWeight="700"
        background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
      >
        Tokenmetric
      </Heading>

      {/* <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        justify={"center"}
        width={"40vw"}
        margin={"0 auto"}
        sm={{ fontSize: "14px", lineHeight: "20px", width: "90vw" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        When you design, you have to draw on your own fucking life experiences.
        If it’s not something you would want to read/look at/use then why
        fucking bother? Form follows fucking function.
      </Text> */}

      <Flex alginItem={"center"} sm={{ flexDirection: "column" }}>
        <FlexItem flex={"1"} padding={"4rem"}>
          {/* <StyledImage src={PieChart} alt="pie chart" width={"100%"} /> */}
          <CustomPieChart />
        </FlexItem>
        <FlexItem flex={"1"} width={"100%"}>
          <Box width={"100%"} height={"auto"} padding={"0 4rem"}>
            <TokenmetricTable>
              <tbody>
                {tableDump.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Text
                        fontSize="18px"
                        lineHeight={"28px"}
                        fontWeight="700"
                        color="rgba(238, 226, 204, 1)"
                      >
                        {item.label}
                      </Text>
                    </td>
                    <td>
                      <Text
                        fontSize="18px"
                        lineHeight={"28px"}
                        width={"100%"}
                        display={"inline-block"}
                        justify={"center"}
                        fontWeight="700"
                        color="rgba(238, 226, 204, 0.52)"
                      >
                        {item.percent}
                      </Text>
                    </td>
                    <td>
                      <Text
                        fontSize="18px"
                        lineHeight={"28px"}
                        width={"100%"}
                        justify={"right"}
                        display={"inline-block"}
                        fontWeight="700"
                        color="rgba(238, 226, 204, 1)"
                      >
                        {item.price}
                      </Text>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <Text
                      font="Judson"
                      fontSize="24px"
                      lineHeight={"38px"}
                      fontWeight="700"
                      color="rgba(238, 226, 204, 1)"
                    >
                      TOTAL
                    </Text>
                  </td>
                  <td colSpan={2}>
                    <Text
                      width={"100%"}
                      display={"inline-block"}
                      justify={"right"}
                      fontSize={"40px"}
                      lineHeight={"64px"}
                      fontWeight={"700"}
                      sm={{ fontSize: "24px" }}
                      color="rgba(238, 226, 204, 1)"
                      font="Judson"
                    >
                      200.000.000
                    </Text>
                  </td>
                </tr>
              </tbody>
            </TokenmetricTable>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Img
                width="400px"
                height="auto"
                src={SeparatorImage}
                alt="Royale Kingdom"
              />
            </div>
          </Box>
        </FlexItem>
      </Flex>
    </div>
  );
};
export default Tokenmetric;
