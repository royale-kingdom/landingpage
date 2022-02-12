import { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { ContainerWithBG } from "./styled";
import { Box } from "../../components/Box";
import { Heading } from "../../components/Typo/Heading";
import { Text } from "../../components/Typo/Text";
import { Flex, FlexItem } from "../../components/Grid";
import { Img } from "../../components/Img";
import Squircle from "../../components/Squircle";

//images
import FramingCover from "../../assets/images/landingpage/3rdCover-min.webp";
import ExplorerModeBG from "../../assets/images/landingpage/explorer_mode.jpeg";
import Mine1 from "../../assets/images/landingpage/mine 1.jpg";
import Farming1 from "../../assets/images/landingpage/Farming 1.jpg";
import Iron from "../../assets/images/landingpage/iron.png";
import Paddy from "../../assets/images/landingpage/paddy.png";
import Wood from "../../assets/images/landingpage/wood.png";
import HolyWater from "../../assets/images/landingpage/holy-water.png";

import "../../styles/slick-slide.css"; // <= custom height of slick slider on mobile

import { SIMULATION_MODE } from "../../constant/landingPageSection";

const dumpSlideImages = [ExplorerModeBG, Farming1, FramingCover, Mine1];
const SLIDE_HEIGHT_SM = "180vw";

const config = {
  // autoplay: true,
  fade: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true
};

const SimulationMode = () => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    setActiveSlide(index);
  };
  return (
    <ExplorerModeContainer>
      <Box
        id={SIMULATION_MODE}
        width="100%"
        height="10vw"
        position="absolute"
        top="-10vw"
      />
      <Box
        position="absolute"
        left={"96px"}
        top={"-10%"}
        width={"572px"}
        zIndex={5}
        sm={{ left: "5vw", top: "0%", width: "90vw", height: "auto" }}
      >
        <Heading
          font={"Judson"}
          size={"40px"}
          lineHeight={"64px"}
          sm={{ size: "24px", lineHeight: "36px", margin: "0" }}
          fontWeight="700"
          background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
        >
          Simulation Mode
        </Heading>
        <Text
          fontSize={"18px"}
          font="Lato"
          lineHeight={"28px"}
          sm={{ fontSize: "14px", lineHeight: "20px" }}
          color="rgba(238, 226, 204, 0.82)"
        >
          A new king had to swear an oath to fulfill the responsibilities of a
          monarch. The details of this oath varied from one land to another, but
          included the responsibility to keep the peace, to administer justice
          and to uphold the law.
        </Text>
        <Text
          font="Lato"
          fontSize={"18px"}
          lineHeight={"28px"}
          margin={"2rem 0"}
          sm={{ fontSize: "14px", lineHeight: "20px" }}
          color="rgba(238, 226, 204, 0.82)"
        >
          Build kingdom economy with 4 unique in-game resources
        </Text>
        <Box sm={{ margin: "15vh 0 0 0" }}>
          <Flex
            flexDirection="row"
            justifyContent="space-around"
            alginItem="center"
            sm={{
              flexDirection: "row",
              justifyContent: "space-around",
              alginItem: "center"
            }}
          >
            <FlexItem marginBottom={"2.5rem"}>
              <Squircle
                size={96}
                active={activeSlide === 0}
                onClick={() => changeSlide(0)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <Img
                    width="120px"
                    height="110px"
                    sm={{ width: "48px", height: "48px" }}
                    src={Iron}
                    style={{
                      zIndex: 10
                    }}
                    alt="Iron"
                  />
                </div>
              </Squircle>
            </FlexItem>
            <FlexItem marginBottom={"2.5rem"}>
              <Squircle
                size={96}
                active={activeSlide === 1}
                onClick={() => changeSlide(1)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <Img
                    width="90px"
                    height="90px"
                    sm={{ width: "45px", height: "45px" }}
                    src={Paddy}
                    style={{
                      zIndex: 10
                    }}
                    alt="Food"
                  />
                </div>
              </Squircle>
            </FlexItem>
            <FlexItem marginBottom={"2.5rem"}>
              <Squircle
                size={96}
                active={activeSlide === 2}
                onClick={() => changeSlide(2)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <Img
                    width="100px"
                    height="90px"
                    sm={{ width: "48px", height: "48px" }}
                    src={Wood}
                    style={{
                      zIndex: 10
                    }}
                    alt="Wood"
                  />
                </div>
              </Squircle>
            </FlexItem>
            <FlexItem marginBottom={"2.5rem"}>
              <Squircle
                size={96}
                active={activeSlide === 3}
                onClick={() => changeSlide(3)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <Img
                    width="80px"
                    height="90px"
                    sm={{ width: "45px", height: "45px" }}
                    src={HolyWater}
                    style={{
                      zIndex: 10
                    }}
                    alt="Holy Water"
                  />
                </div>
              </Squircle>
            </FlexItem>
          </Flex>
        </Box>
      </Box>

      <Box
        position="absolute"
        width="100%"
        height="100vw"
        transform="translate(0, -50%)"
        top="50%"
        left="0"
        zIndex={2}
        sm={{
          height: SLIDE_HEIGHT_SM,
          top: "60%"
        }}
      >
        <Slider {...config} ref={sliderRef}>
          {dumpSlideImages.map((img, i) => (
            <Box
              key={`simulation-backround-${i}`}
              width="100%"
              height="100%"
              sm={{
                height: SLIDE_HEIGHT_SM
              }}
            >
              <Img
                src={img}
                width="100%"
                height="100%"
                objectFit="cover"
                sm={{
                  width: "auto",
                  objectPosition: "80% 100%",
                  objectFit: "contain"
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </ExplorerModeContainer>
  );
};

export default SimulationMode;

const ExplorerModeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 29.65vw;
  z-index: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 100vw;
  }
`;
