import styled from "styled-components"

import { Flex, FlexItem, Row, Col } from "../../components/Grid";
import { AlignCenter, StyledImage, Text } from "./styled";
import PieChart from "../../assets/images/landingpage/pie-chart-min.webp";


const TokenmetricTable = styled.table`
  width: 100%;
  tbody {
    tr {
      td {
        width: 33%;
        padding: 1.5rem 0;
      }
    }
  }
`

const TDRightAlign = styled.td`
  text-align: right;
`
const TDRightMiddle = styled.td`
  text-align: center;
`

const tableDump: any[] = [
  { label: 'Play to earn', percent: '30%', price: '60,000,000' },
  { label: 'Reserve funds', percent: '18%', price: '36,000,000' },
  { label: 'Team, advisor', percent: '16%', price: '32,000,000' },
  { label: 'Operation funds', percent: '16%', price: '32,000,000' },
  { label: 'Private Sale', percent: '8%', price: '16,000,000' },
  { label: 'Airdrop', percent: '1%', price: '2,000,000' }
];

const Tokenmetric = () => (
  <div>
    <h1>
      <AlignCenter>Tokenmetric</AlignCenter>
    </h1>
    <Text
      fontSize={"18px"}
      lineHeight={"28px"}
      justify={"center"}
      width={"40vw"}
      margin={'0 auto'}
    >
      When you design, you have to draw on your own fucking life
      experiences. If it’s not something you would want to read/look at/use
      then why fucking bother? Form follows fucking function.
    </Text>
    <div>
      {/* <Flex
        flexDirection={"row"}
        justifyContent="space-around"
        alginItem={"center"}
      >
        <FlexItem>
          <StyledImage src={PieChart} alt="pie chart" width={"100%"} />
        </FlexItem>
        <FlexItem marginTop={"48px"} flex={"1"}>
          <TokenmetricTable >
            <tbody>
              {tableDump.map((item, index) => (
                <tr key={index}>
                  <td>{item.label}</td>
                  <TDRightMiddle>{item.percent}</TDRightMiddle>
                  <TDRightAlign>{item.price}</TDRightAlign>
                </tr>
              ))}
            </tbody>
          </TokenmetricTable>
          <FlexInline justifyContent={'space-between'}>
            <FlexItem>
              <Text>TOTAL</Text>
            </FlexItem>
            <FlexItem>
              <Text>200.000.000</Text>
            </FlexItem>
          </FlexInline>
        </FlexItem>
      </Flex> */}

      <Row>
        <Col span={12}>
          <StyledImage src={PieChart} alt="pie chart" width={"100%"} />
        </Col>
        <Col span={10} pull={2} paddingTop={'6rem'}>
          <TokenmetricTable >
            <tbody>
              {tableDump.map((item, index) => (
                <tr key={index}>
                  <td>{item.label}</td>
                  <TDRightMiddle>{item.percent}</TDRightMiddle>
                  <TDRightAlign>{item.price}</TDRightAlign>
                </tr>
              ))}
            </tbody>
          </TokenmetricTable>
          <Flex justifyContent={'space-between'}>
            <FlexItem>
              <Text>TOTAL</Text>
            </FlexItem>
            <FlexItem>
              <Text>200.000.000</Text>
            </FlexItem>
          </Flex>
        </Col>
      </Row>

    </div>


  </div>)



export default Tokenmetric;