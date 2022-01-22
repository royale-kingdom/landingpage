import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ContainerWithBG } from "./styled";
import { Box } from "../../components/Box";
import { Heading } from "../../components/Typo/Heading";
import { Text } from "../../components/Typo/Text";
import { Flex, FlexItem } from "../../components/Grid";
import Squircle from "../../components/Squircle";

// import { ButtonOutline } from "../../components/Button";
import FramingCover from "../../assets/images/landingpage/3rdCover-min.webp";
import ExplorerModeBG from "../../assets/images/landingpage/explorer_mode.jpeg";
import Mine1 from "../../assets/images/landingpage/mine 1.jpg";
import Farming1 from "../../assets/images/landingpage/Farming 1.jpg";
import Iron from "../../assets/images/landingpage/iron.png";
import Paddy from "../../assets/images/landingpage/paddy.png";
import Wood from "../../assets/images/landingpage/wood.png";
import HolyWater from "../../assets/images/landingpage/holy-water.png";
import { Img } from "../../components/Img";
import styled from "styled-components";

const dumpSlideImages = [ExplorerModeBG, Farming1, FramingCover, Mine1];

const DumpSlide = ({
  imageSrc,
  activeSlide,
  changeSlide
}: {
  imageSrc: any;
  activeSlide: number;
  changeSlide: (newSlide: number) => void;
}) => (
  <ContainerWithBG
    imgSrc={imageSrc}
    width={"100vw"}
    height={"1440px"}
    sm={{ backgroundPosition: "75%" }}
  >
    {/* Description */}
    <Box
      position="absolute"
      left={"96px"}
      top={"512px"}
      width={"572px"}
      sm={{ left: "5vw", top: "2rem", width: "90vw", height: "auto" }}
    >
      <Heading
        font={"Judson"}
        size={"40px"}
        lineHeight={"64px"}
        sm={{ size: "24px", lineHeight: "36px" }}
        fontWeight="700"
        background="linear-gradient(27.48deg, #8F6B2D 4.87%, #F6C65C 32.49%, #C2933A 47.27%, #FDCC5F 62.04%)"
      >
        Simulation Mode
      </Heading>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        A new king had to swear an oath to fulfill the responsibilities of a
        monarch. The details of this oath varied from one land to another, but
        included the responsibility to keep the peace, to administer justice and
        to uphold the law.
      </Text>
      <Text
        fontSize={"18px"}
        lineHeight={"28px"}
        margin={"2rem 0"}
        sm={{ fontSize: "14px", lineHeight: "20px" }}
        color="rgba(238, 226, 204, 0.82)"
      >
        Build kingdom economy with 4 unique in-game resources
      </Text>
      {/* <ButtonOutline padding={"12px 24px"} fontSize={"18px"}>
        View more
      </ButtonOutline> */}
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
  </ContainerWithBG>
);

const config = {
  // autoplay: true,
  fade: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true
};

const ExplorerMode = () => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    setActiveSlide(index);
  };
  return (
    <Container>
      {/* <Box position="relative" zIndex={-100} width="100%"> */}
      {/* Squircle Block */}
      <Slider {...config} ref={sliderRef}>
        {dumpSlideImages.map((img, i) => (
          <DumpSlide
            key={i}
            imageSrc={img}
            activeSlide={activeSlide}
            changeSlide={changeSlide}
          />
        ))}
      </Slider>
      {/* </Box> */}
    </Container>
  );
};

export default ExplorerMode;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 1440px;
  z-index: -10;
  top: -600px;
`;
