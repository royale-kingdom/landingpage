import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";

import { Flex, FlexItem, Row, Col, FlexInline } from "../../components/Grid";
import { AlignCenter, Box, StyledImage } from "./styled";

import { Heading } from "../../components/Typo/Heading";
import { Text } from "../../components/Typo/Text";
// import PieChart from "../../assets/images/landingpage/pie-chart-min.webp";

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

const TDRightAlign = styled.td`
  text-align: right;
`;
const TDRightMiddle = styled.td`
  text-align: center;
`;

const tableDump: any[] = [
  { label: "Play to earn", percent: "30%", price: "60,000,000" },
  { label: "Reserve funds", percent: "18%", price: "36,000,000" },
  { label: "Team, advisor", percent: "16%", price: "32,000,000" },
  { label: "Operation funds", percent: "16%", price: "32,000,000" },
  { label: "Private Sale", percent: "8%", price: "16,000,000" },
  { label: "Airdrop", percent: "1%", price: "2,000,000" }
];

const defaultLabelStyle = {
  fontSize: "5px",
  fontFamily: "sans-serif"
};

const shiftSize = 4;

const Tokenmetric = () => (
  <div>
    <Heading
      font={"Judson"}
      size={"48px"}
      lineHeight={"78px"}
      align={"center"}
      sm={{ size: "24px", lineHeight: "36px" }}
    >
      Tokenmetric
    </Heading>

    <Text
      fontSize={"18px"}
      lineHeight={"28px"}
      justify={"center"}
      width={"40vw"}
      margin={"0 auto"}
      sm={{ fontSize: "14px", lineHeight: "20px", width: "90vw" }}
    >
      When you design, you have to draw on your own fucking life experiences. If
      it’s not something you would want to read/look at/use then why fucking
      bother? Form follows fucking function.
    </Text>

    <Flex alginItem={"center"} sm={{ flexDirection: "column" }}>
      <FlexItem flex={"1"} padding={"4rem"}>
        {/* <StyledImage src={PieChart} alt="pie chart" width={"100%"} /> */}
        <PieChart
          data={[
            { title: "One", value: 10, color: "#ffffff81" },
            { title: "Two", value: 15, color: "#ffffff81" },
            { title: "Three", value: 20, color: "#ffffff81" }
          ]}
          segmentsShift={(index) => (index === 1 ? shiftSize : 0.1)}
          labelStyle={{
            ...defaultLabelStyle
          }}
          lineWidth={40}
          viewBoxSize={[150, 150]}
          center={[75, 75]}
          onMouseOver={(e, index) => console.log({ e, index })}
          onClick={(e, index) => console.log({ e, index })}
        />
      </FlexItem>
      <FlexItem flex={"1"}>
        <Box width={"100%"} height={"auto"} padding={"0 4rem"}>
          <TokenmetricTable>
            <tbody>
              {tableDump.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Text lineHeight={"1rem"}>{item.label}</Text>
                  </td>
                  <td>
                    <Text
                      lineHeight={"1rem"}
                      width={"100%"}
                      display={"inline-block"}
                      justify={"center"}
                    >
                      {item.percent}
                    </Text>
                  </td>
                  <td>
                    <Text
                      lineHeight={"1rem"}
                      width={"100%"}
                      justify={"right"}
                      display={"inline-block"}
                    >
                      {item.price}
                    </Text>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <Text lineHeight={"3rem"}>TOTAL</Text>
                </td>
                <td colSpan={2}>
                  <Text
                    width={"100%"}
                    display={"inline-block"}
                    justify={"right"}
                    fontSize={"32px"}
                    lineHeight={"3rem"}
                    fontWeight={"700"}
                    sm={{ fontSize: "24px" }}
                  >
                    200.000.000
                  </Text>
                </td>
              </tr>
            </tbody>
          </TokenmetricTable>
        </Box>
      </FlexItem>
    </Flex>
  </div>
);

export default Tokenmetric;
