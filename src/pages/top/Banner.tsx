import styled from "styled-components";

import { Box } from "../../components/Box";
// import { CoverBackground } from "./styled";
import { StyledImage } from "./styled";
import { BaseButton } from "../../components/Button";
import { Text } from "../../components/Typo/Text";

import Cover from "../../assets/images/landingpage/BG1 Royale Kingdom ff 1.png";
import mainLogo from "../../assets/images/landingpage/main_logo.png";
import Button2 from "../../assets/images/landingpage/Button2.svg";

const Banner = () => (
  <Box height={"36vw"} position={"relative"} zIndex={2}>
    <Box>
      {/* 35vw ~ 35% ratio*/}
      <StyledImage width={"100%"} src={Cover} alt="cover" />
    </Box>
    <MainLogo src={mainLogo} />
    <Box
      position={"absolute"}
      transform="translate(-50%, 50%)"
      left="50%"
      bottom="-10%"
    >
      <BaseButton
        style={{
          backgroundImage: `url(${Button2})`,
          backgroundRepeat: "no-repeat",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "center center",
          backgroundSize: "contain"
        }}
        fontSize="24px"
        padding="25px 40px"
        sm={{ fontSize: "1.8rem", padding: "2rem 1rem" }}
        color="rgba(245, 237, 222, 1)"
      >
        <Text fontWeight="bold" padding="0 16px" sm={{ fontSize: "10px" }}>
          ENTER MY KINGDOM
        </Text>
      </BaseButton>
    </Box>
    {/* </Flex> */}
  </Box>
);

export default Banner;

const MainLogo = styled.img`
  position: absolute;
  transform: translate(-50%, 0);
  width: 50vw;
  max-width: 720px; // limit max width on large screen
  height: auto;
  /* bottom: 80px; */
  bottom: -10%;
  left: 50%;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 270px;
    /* height: 145px; */
    /* top: -60px; */
  }
`;
