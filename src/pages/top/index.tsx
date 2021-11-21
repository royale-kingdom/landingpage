import {
  RelativeDiv,
  CoverFlag,
  CoverBackground,
  FemaleCharacter,
  MaleCharacter,
  AbsoluteDiv,
  AlignCenter,
  StyledText,
  GoldenText,
  StyledImage,
  Text
} from "./styled";
import { Flex, FlexItem, FlexInline, Row, Col } from "../../components/Grid";
import { Squircle } from "../../components/Squircle";
import { OutlineButton } from "../../components/Button";

import BG2RoyaleKingdom from "../../assets/images/landingpage/BG2 Royale Kingdom-min.webp";
import Cover from "../../assets/images/landingpage/cover-min.webp";
import Cover1 from "../../assets/images/landingpage/cover-1-min.webp";
import MaleRYK from "../../assets/images/landingpage/Male RYK-min.webp";
import FemaleRYK1 from "../../assets/images/landingpage/Female RYK 1-min.webp";
import UniqueCharacter from "../../assets/images/landingpage/unique-character-min.webp";
import UniqueWeapon from "../../assets/images/landingpage/unique-weapon-min.webp";
import UniqueArmor from "../../assets/images/landingpage/unique-armor-min.webp";
import FramingCover from "../../assets/images/landingpage/3rdCover-min.webp";
import PVECover from "../../assets/images/landingpage/pve-cover-min.webp";
import PVPCover from "../../assets/images/landingpage/PVP-cover-min.webp";
import Tokenomic from "../../assets/images/landingpage/tokenomic-min.webp";
import PieChart from "../../assets/images/landingpage/pie-chart-min.webp";
import Roadmap from "../../assets/images/landingpage/roadmap-min.webp";
import Ourteam from "../../assets/images/landingpage/ourteam-min.webp";

const UniqueItem = ({
  img,
  title,
  content
}: {
  img: any;
  title: string;
  content: string;
}) => {
  return (
    <Flex justifyContent={"flex-start"} alginItem={"center"}>
      <FlexItem>
        <StyledImage
          src={img}
          width="120px"
          height="120px"
          alt="unique character"
        />
      </FlexItem>
      <FlexItem>
        <FlexInline flexDirection={"column"} justifyContent={"space-between"}>
          <FlexItem>
            <GoldenText fontSize={"24px"}>{title}</GoldenText>
          </FlexItem>
          <FlexItem>{content}</FlexItem>
        </FlexInline>
      </FlexItem>
    </Flex>
  );
};

const Top = () => {
  return (
    <>
      <div>
        {/* 1st section */}
        <RelativeDiv>
          <CoverBackground>
            <StyledImage src={Cover} alt="cover" />
          </CoverBackground>
          <CoverFlag>
            <img src={Cover1} alt="flag" />
          </CoverFlag>
        </RelativeDiv>

        <RelativeDiv>
          <CoverBackground>
            <StyledImage src={BG2RoyaleKingdom} alt="royale kingdom" />
          </CoverBackground>
          <AbsoluteDiv top={"160px"} height={"100%"} width={"100%"} left={"0"}>
            <AlignCenter>
              <div>
                <GoldenText fontSize="48px" lineHeight="78px">
                  Unique NFT Asset
                </GoldenText>
              </div>
              <div>
                <StyledText fontSize="18px">
                  When you design, you have to draw on your own fucking life
                </StyledText>
              </div>
              <div>
                <StyledText fontSize="18px">
                  experiences. If it’s not something you would want to read/look
                  at/use
                </StyledText>
              </div>
              <div>
                <StyledText fontSize="18px">
                  then why fucking bother? Form follows fucking function.
                </StyledText>
              </div>
            </AlignCenter>
          </AbsoluteDiv>

          <MaleCharacter>
            <StyledImage src={MaleRYK} alt="Male RYK" />
          </MaleCharacter>

          <FemaleCharacter>
            <StyledImage src={FemaleRYK1} alt="Female RYK" />
          </FemaleCharacter>
          <AbsoluteDiv width="470px" top={"560px"} right={"50px"} zIndex={99}>
            <UniqueItem
              img={UniqueCharacter}
              title={"Unique Characters"}
              content={"Form follows fucking function. Paul Rand once said,"}
            />
            <UniqueItem
              img={UniqueWeapon}
              title={"Unique Weapons"}
              content={"Form follows fucking function. Paul Rand once said,"}
            />
            <UniqueItem
              img={UniqueArmor}
              title={"Unique Armors"}
              content={"Form follows fucking function. Paul Rand once said,"}
            />
          </AbsoluteDiv>
        </RelativeDiv>

        <RelativeDiv>
          <CoverBackground>
            <StyledImage src={FramingCover} alt="3rd cover" />
          </CoverBackground>

          <AbsoluteDiv left={"96px"} bottom={"48px"} width={"572px"}>
            <h1>Framing</h1>
            <Text fontSize={"18px"} lineHeight={"28px"}>
              When you sit down to work, external critics aren’t the enemy. It’s
              you who you must to fight against to do great fucking work. You
              must overcome yourself. Design as if your fucking life depended on
              it. Never let your guard down by thinking you’re fucking good
              enough.
            </Text>
            <Text fontSize={"18px"} lineHeight={"28px"}>
              When you design, you have to draw on your own fucking life
              experiences. If it’s not something you would want to read/look
              at/use then why fucking bother? Form follows fucking function.
            </Text>
            <OutlineButton padding={"12px 24px"} fontSize={"18px"}>
              View more
            </OutlineButton>
          </AbsoluteDiv>
          <AbsoluteDiv right={"96px"} bottom={"192px"}>
            <Flex flexDirection="column">
              <FlexItem marginBottom={"2.5rem"}>
                <Squircle size={96} />
              </FlexItem>
              <FlexItem marginBottom={"2.5rem"}>
                <Squircle size={96} />
              </FlexItem>
              <FlexItem marginBottom={"2.5rem"}>
                <Squircle size={96} />
              </FlexItem>
              <FlexItem marginBottom={"2.5rem"}>
                <Squircle size={96} />
              </FlexItem>
            </Flex>
          </AbsoluteDiv>
        </RelativeDiv>

        <RelativeDiv>
          <CoverBackground>
            <StyledImage src={PVECover} alt="PVE cover" />
          </CoverBackground>
          <AbsoluteDiv width="572px" top={"40%"} left={"96px"} align={"center"}>
            <h1>PVE</h1>
            <Text fontSize={"18px"} lineHeight={"28px"} justify={"center"}>
              When you sit down to work, external critics aren’t the enemy. It’s
              you who you must to fight against to do great fucking work. You
              must overcome yourself. Design as if your fucking life depended on
              it. Never let your guard down by thinking you’re fucking good
              enough.
            </Text>
            <Text fontSize={"18px"} lineHeight={"28px"} justify={"center"}>
              When you design, you have to draw on your own fucking life
              experiences. If it’s not something you would want to read/look
              at/use then why fucking bother? Form follows fucking function.
            </Text>
            <OutlineButton padding={"12px 24px"} fontSize={"18px"}>
              View more
            </OutlineButton>
          </AbsoluteDiv>
        </RelativeDiv>

        <RelativeDiv>
          <CoverBackground>
            <StyledImage src={PVPCover} alt="PVE cover" />
          </CoverBackground>
          <AbsoluteDiv width="572px" top={"40%"} left={"96px"} align={"center"}>
            <h1>PVP</h1>
            <Text fontSize={"18px"} lineHeight={"28px"}>
              When you sit down to work, external critics aren’t the enemy. It’s
              you who you must to fight against to do great fucking work. You
              must overcome yourself. Design as if your fucking life depended on
              it. Never let your guard down by thinking you’re fucking good
              enough.
            </Text>
            <Text fontSize={"18px"} lineHeight={"28px"}>
              When you design, you have to draw on your own fucking life
              experiences. If it’s not something you would want to read/look
              at/use then why fucking bother? Form follows fucking function.
            </Text>
          </AbsoluteDiv>
        </RelativeDiv>

        <RelativeDiv height={"1000px"}>
          <AbsoluteDiv
            width={"540px"}
            transform={"translate(0%, -50%)"}
            top="50%"
            right={"96px"}
          >
            <StyledImage src={Tokenomic} alt="tokenomic" />
          </AbsoluteDiv>
          <AbsoluteDiv
            width={"572px"}
            top={"50%"}
            left={"96px"}
            align={"center"}
            transform={"translate(0%, -50%)"}
          >
            <h1>Tokenomic</h1>
            <Text fontSize={"18px"} lineHeight={"28px"}>
              When you sit down to work, external critics aren’t the enemy. It’s
              you who you must to fight against to do great fucking work. You
              must overcome yourself. Design as if your fucking life depended on
              it. Never let your guard down by thinking you’re fucking good
              enough.
            </Text>
            <Text fontSize={"18px"} lineHeight={"28px"}>
              When you design, you have to draw on your own fucking life
              experiences. If it’s not something you would want to read/look
              at/use then why fucking bother? Form follows fucking function.
            </Text>
          </AbsoluteDiv>
        </RelativeDiv>
      </div>
      <div>
        <h1>
          <AlignCenter>Tokenmetric</AlignCenter>
        </h1>

        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          justify={"center"}
          width={"40vw"}
          center={true}
        >
          When you design, you have to draw on your own fucking life
          experiences. If it’s not something you would want to read/look at/use
          then why fucking bother? Form follows fucking function.
        </Text>
      </div>
      <div>
        <Flex
          flexDirection={"row"}
          justifyContent="space-around"
          alginItem={"center"}
        >
          <FlexItem>
            <StyledImage src={PieChart} alt="pie chart" width={"100%"} />
          </FlexItem>
          <FlexItem marginTop={"48px"} flex={"1"}>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>Play to earn</td>
                  <td>30%</td>
                  <td>60,000,000</td>
                </tr>
                <tr>
                  <td>Reserve funds</td>
                  <td>18%</td>
                  <td>36,000,000</td>
                </tr>
                <tr>
                  <td>Team, advisor</td>
                  <td>16%</td>
                  <td>32,000,000</td>
                </tr>
                <tr>
                  <td>Operation funds</td>
                  <td>16%</td>
                  <td>32,000,000</td>
                </tr>
                <tr>
                  <td>Private Sale</td>
                  <td>8%</td>
                  <td>16,000,000</td>
                </tr>
                <tr>
                  <td>IDO / IFO / ICO</td>
                  <td>7%</td>
                  <td>14,000,000</td>
                </tr>

                <tr>
                  <td>Partner funds</td>
                  <td>4%</td>
                  <td>8,000,000</td>
                </tr>

                <tr>
                  <td>Airdrop</td>
                  <td>1%</td>
                  <td>2,000,000</td>
                </tr>
              </tbody>
            </table>
          </FlexItem>
        </Flex>
      </div>
      <div>
        <h1>
          <AlignCenter>Roadmap</AlignCenter>
        </h1>

        <Text
          fontSize={"18px"}
          lineHeight={"28px"}
          justify={"center"}
          width={"40vw"}
          center={true}
        >
          When you design, you have to draw on your own fucking life
          experiences. If it’s not something you would want to read/look at/use
          then why fucking bother? Form follows fucking function.
        </Text>
        <CoverBackground>
          <StyledImage src={Roadmap} alt="roadmap" />
        </CoverBackground>
      </div>
      <RelativeDiv>
        <div>
          <h1>
            <AlignCenter>Our team</AlignCenter>
          </h1>

          <Text
            fontSize={"18px"}
            lineHeight={"28px"}
            justify={"center"}
            width={"40vw"}
            center={true}
          >
            When you design, you have to draw on your own fucking life
            experiences. If it’s not something you would want to read/look
            at/use then why fucking bother? Form follows fucking function.
          </Text>
        </div>

        <AbsoluteDiv width={"100%"}>
          <CoverBackground>
            <StyledImage src={Ourteam} alt="our team" />
          </CoverBackground>
        </AbsoluteDiv>
        <Row>
          <Col span={4} push={2}>
            <Flex
              height="100%"
              alginItem={"start"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <FlexItem>
                <h1>Leaders</h1>
              </FlexItem>
              <FlexItem>
                <h1>Artist</h1>
              </FlexItem>
              <FlexItem>
                <h1>Developers</h1>
              </FlexItem>
            </Flex>
            {/* <h1>Leaders</h1>
            <h1>Artist</h1>
            <h1>Developers</h1> */}
          </Col>

          <Col span={4} push={14}>
            <Row margin={"1rem 0"}>
              <Squircle size={80} />
            </Row>
            <Row margin={"1rem 0"}>
              <Squircle size={80} />
            </Row>
            <Row margin={"1rem 0"}>
              <Squircle size={80} />
            </Row>
            <Row margin={"1rem 0"}>
              <Squircle size={80} />
            </Row>
          </Col>
        </Row>
      </RelativeDiv>
    </>
  );
};

export default Top;
