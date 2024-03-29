import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import { PieChart } from "react-minimal-pie-chart";
// import ReactTooltip from "react-tooltip";

import { Box } from "../../components/Box";
import { Flex, FlexItem } from "../../components/Grid";
// import { Heading } from "../../components/Typo/Heading";
import { Text } from "../../components/Typo/Text";
// import { Img } from "../../components/Img";
import classNames from "classnames";
// import SeparatorImage from "../../assets/images/landingpage/separator.png";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BaseButton } from "../../components/Button";
import buttonImg from "../../assets/images/landingpage/tokenmetric_button.png";
import TokenmetricBackground from "../../assets/images/landingpage/tokenmetric_background.svg";
// import StarBackground from "../../assets/images/landingpage/stars_background_1.jpeg";

import { TOKENMETRIC } from "../../constant/landingPageSection";
import { GoldenLine } from "../../components/GoldlenLine";
import GoldenHeader from "../../components/GoldenHeader";

ChartJS.register(ArcElement, Tooltip);

const TokenmetricTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  tbody {
    tr {
      border-radius: 8px;
      td {
        /* width: calc(100% / 3); */
        padding: calc(1rem + 1px) 1rem;
      }
      &.active {
        background-color: rgba(134, 101, 39, 0.64);
        cursor: pointer;
        td {
          border-top: 1px solid;
          border-bottom: 1px solid;
          &:first-child {
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border-left: 1px solid;
          }
          &:last-child {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            border-right: 1px solid;
          }
        }
      }
    }
  }
`;

const tableDump: any[] = [
  { label: "Play to earn", percent: "30%", amount: "60,000,000" },
  { label: "Reserve funds", percent: "18%", amount: "36,000,000" },
  { label: "Team & advisor", percent: "16%", amount: "32,000,000" },
  { label: "Operation Funds", percent: "16%", amount: "32,000,000" },
  { label: "Private Sale", percent: "8%", amount: "16,000,000" },
  { label: "IDO/IFO/ICO", percent: "7%", amount: "14,000,000" },
  { label: "Partner Funds", percent: "4%", amount: "8,000,000" },
  { label: "Airdrop", percent: "1%", amount: "2,000,000" }
];

// const shiftSize = 4;
const defaultColor = "#866527";
// const activeColor = "#f6c65c";

const pieChartData = [
  {
    title: "Play to earn",
    value: 30,
    color: defaultColor,
    amount: "60,000,000"
  },
  {
    title: "Reserve funds",
    value: 18,
    color: defaultColor,
    amount: "36,000,000"
  },
  {
    title: "Team, advisor",
    value: 16,
    color: defaultColor,
    amount: "32,000,000"
  },
  {
    title: "Operation funds",
    value: 16,
    color: defaultColor,
    amount: "32,000,000"
  },
  {
    title: "Private Sale",
    value: 8,
    color: defaultColor,
    amount: "16,000,000"
  },
  {
    title: "IDO/IFO/ICO",
    value: 8,
    color: defaultColor,
    amount: "14,000,000"
  },
  {
    title: "Partner Funds",
    value: 4,
    color: defaultColor,
    amount: "8,000,000"
  },
  {
    title: "Airdrop",
    value: 1,
    color: defaultColor,
    amount: "2,000,000"
  }
];

const PieChart2 = (props: any) => {
  const { index } = props;
  const chart = useRef();
  function triggerHover(chart: any, index: number) {
    if (index >= 0) {
      chart.setActiveElements([
        {
          datasetIndex: 0,
          index: index
        }
      ]);
    } else {
      chart.setActiveElements([]);
    }
    chart.update();
  }
  function triggerTooltip(chart: any, index: number) {
    const tooltip = chart.tooltip;
    if (tooltip) {
      if (index >= 0) {
        const chartArea = chart.chartArea;
        tooltip.setActiveElements(
          [
            {
              datasetIndex: 0,
              index: index
            }
          ],
          {
            x: (chartArea.left + chartArea.right) / 2,
            y: (chartArea.top + chartArea.bottom) / 2
          }
        );
      } else {
        tooltip.setActiveElements([], { x: 0, y: 0 });
      }
    }
  }
  let width: any, height: any, gradient: any;
  function getGradient(ctx: any, chartArea: any) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      width = chartWidth;
      height = chartHeight;
      let x2 = height * Math.cos(27.48);
      let y2 = height * Math.sin(27.48);
      gradient = ctx.createLinearGradient(0, 0, x2, y2);
      gradient.addColorStop(4.87 / 100, "#8F6B2D");
      gradient.addColorStop(32.49 / 100, "#F6C65C");
      gradient.addColorStop(47.27 / 100, "#C2933A");
      gradient.addColorStop(62.04 / 100, "#FDCC5F");
    }
    return gradient;
  }
  const data = {
    datasets: [
      {
        data: pieChartData.map((item) => item.value),
        backgroundColor: [
          "rgba(134, 101, 39, 0.64)",
          "rgba(134, 101, 39, 0.64)",
          "rgba(134, 101, 39, 0.64)",
          "rgba(134, 101, 39, 0.64)",
          "rgba(134, 101, 39, 0.64)",
          "rgba(134, 101, 39, 0.64)"
        ],
        borderColor: [
          "rgba(0, 0, 0, 0.12)",
          "rgba(0, 0, 0, 0.12)",
          "rgba(0, 0, 0, 0.12)",
          "rgba(0, 0, 0, 0.12)",
          "rgba(0, 0, 0, 0.12)",
          "rgba(0, 0, 0, 0.12)"
        ],
        borderRadius: 4,
        hoverOffset: 50,
        hoverBackgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        hoverBorderRadius: 12
      }
    ],
    actions: [
      {
        name: "Trigger Hover",
        handler: triggerHover
      },
      {
        name: "Trigger Tooltip",
        handler: triggerTooltip
      }
    ]
  };
  useEffect(() => {
    if (chart && chart.current) {
      triggerHover(chart.current, index);
      triggerTooltip(chart.current, index);
    }
  }, [index, chart]);
  return (
    <Doughnut
      ref={chart}
      data={data}
      onMouseOut={() => props.setIndex(-1)}
      options={{
        cutout: "60%",
        onHover: function (e, item) {
          if (item.length > 0) {
            const { index } = item[0];
            props.setIndex(index);
          } else {
            props.setIndex(-1);
          }
        },
        layout: {
          padding: function ({ chart }) {
            // const percent = chart.width > 700 ? 0.2: 0.15;
            // const padding = percent * chart.width;
            // return padding <= 50 ? 50: padding;
            return 30;
          }
        },

        plugins: {
          tooltip: {
            displayColors: false,
            bodyColor: "rgba(238, 226, 204, 1)",
            footerColor: "rgba(238, 226, 204, 1)",
            bodyFont: {
              size: 16,
              weight: "bold"
            },
            footerFont: {
              size: 16,
              weight: "normal"
            },
            cornerRadius: 4,
            padding: {
              top: 12,
              bottom: 12,
              left: 20,
              right: 20
            },
            backgroundColor: "rgba(42, 46, 57, 1)",

            callbacks: {
              label: function ({ dataIndex }) {
                return pieChartData[dataIndex].title;
              },
              footer: function (dataItems) {
                const { dataIndex } = dataItems[0];
                return pieChartData[dataIndex].amount;
              }
            }
          }
        }
      }}
    />
  );
};

const Tokenmetric = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <>
      <div id={TOKENMETRIC} />
      <TokenmetricContainer>
        <Box>
          <GoldenHeader margin="0" align="center">
            Tokenmetric
          </GoldenHeader>
        </Box>

        <Flex alginItem={"center"} sm={{ flexDirection: "column" }}>
          <FlexItem flex={"1"} padding={"0 4rem"} width="calc(100% - 8rem)">
            {/* <StyledImage src={PieChart} alt="pie chart" width={"100%"} /> */}
            <Flex
              sm={{
                width: "95%"
              }}
              width="90%"
              alginItem="center"
              justifyContent="center"
              margin="0 auto"
            >
              <PieChart2
                index={selectedIndex}
                setIndex={(index: number) => setSelectedIndex(index)}
              />
            </Flex>
            {/* <CustomPieChart index = {selectedIndex} setIndex = {(index: number) => setSelectedIndex(index)} /> */}
            <Flex justifyContent="center">
              <BaseButton
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1oLBnWD184lKu09WpFsPwN2XgNh87ytZw/view",
                    "_blank"
                  )
                }
                style={{
                  backgroundImage: `url(${buttonImg})`,
                  backgroundRepeat: "no-repeat",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundPosition: "center center",
                  backgroundSize: "contain",
                  margin: "0 0 20px 0",
                  width: "243px",
                  height: "58px"
                }}
                sm={{
                  fontSize: "1.8rem",
                  padding: "2rem 3rem"
                }}
                color="rgba(245, 237, 222, 1)"
              ></BaseButton>
            </Flex>
          </FlexItem>
          <FlexItem flex={"1"} width={"100%"}>
            <Box width={"100%"} height={"auto"} padding={"0 4rem"}>
              <TokenmetricTable>
                <tbody>
                  {tableDump.map((item, index) => (
                    <tr
                      key={index}
                      className={classNames({
                        active: selectedIndex === index
                      })}
                      onMouseOver={() => setSelectedIndex(index)}
                      onMouseLeave={() => setSelectedIndex(-1)}
                    >
                      <td width="45%">
                        <Text
                          color="#FFF"
                          font="Red rose"
                          fontSize="20px"
                          lineHeight={"32px"}
                          fontWeight="400"
                          sm={{
                            fontSize: "16px",
                            lineHeight: "26px",
                            fontWeight: "600"
                          }}
                        >
                          {item.label}
                        </Text>
                      </td>
                      <td width="20%">
                        <Text
                          font="Titillium Web"
                          fontSize="20px"
                          lineHeight={"32px"}
                          width={"100%"}
                          display={"inline-block"}
                          justify={"center"}
                          fontWeight="600"
                          color="rgba(255, 255, 255, 0.52)"
                          sm={{
                            fontSize: "16px",
                            lineHeight: "26px",
                            fontWeight: "600"
                          }}
                        >
                          {item.percent}
                        </Text>
                      </td>
                      <td width="35%">
                        <Text
                          color="#FFF"
                          font="Titillium Web"
                          fontSize="20px"
                          lineHeight={"32px"}
                          width={"100%"}
                          justify={"right"}
                          display={"inline-block"}
                          fontWeight="600"
                          sm={{
                            fontSize: "16px",
                            lineHeight: "26px",
                            fontWeight: "600"
                          }}
                        >
                          {item.amount}
                        </Text>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3}>
                      <GoldenLine />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Text
                        color="#FFF"
                        font="Red rose"
                        fontSize="24px"
                        lineHeight={"38px"}
                        fontWeight="400"
                      >
                        TOTAL
                      </Text>
                    </td>
                    <td colSpan={2}>
                      <Text
                        color="#FFF"
                        width={"100%"}
                        display={"inline-block"}
                        justify={"right"}
                        fontSize={"24px"}
                        lineHeight={"38px"}
                        fontWeight={"400"}
                        sm={{ fontSize: "24px" }}
                        font="Red rose"
                      >
                        200.000.000
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </TokenmetricTable>
              {/* <div
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
                  sm={{ width: "90vw", height: "auto" }}
                />
              </div> */}
            </Box>
          </FlexItem>
        </Flex>
      </TokenmetricContainer>
    </>
  );
};
export default Tokenmetric;

const TokenmetricContainer = styled.div`
  padding: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  /* &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${TokenmetricBackground}) no-repeat;
    background-size: cover;
    background-position: center center;
    opacity: 0.08;
    mix-blend-mode: difference;
    z-index: -1;
  } */
`;
