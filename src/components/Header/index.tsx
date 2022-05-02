import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  StyledHeader,
  StyledNavLink,
  Space,
  HeaderLogo
  // ConnectButton
} from "./styled";
import { Text } from "../../components/Typo/Text";
import { useIsMobileView } from "../../hooks/useIsMobileView";
import { Button } from "../Button";

import Backdrop from "../Backdrop";
import { Flex } from "../Flex";
import { Box } from "../Box";

import headerLogo from "../../assets/images/landingpage/logo_header.png";
import burgerButton from "../../assets/images/shape/burger_button.svg";
import close from "../../assets/images/icons/close.svg";

const MY_KINGDOM = "my_kingdom";
const SIMULAION_MODE = "simulation_mode";
const WAR_MODE = "war_mode";
const TOKENOMIC = "tokenomic";
const ROADMAP = "roadmap";
const TEAM_MEMBERS = "team_members";

const menu: { label: string; id?: string }[] = [
  { label: "My Kingdom", id: MY_KINGDOM },
  { label: "Simulation Mode", id: SIMULAION_MODE },
  { label: "War Mode", id: WAR_MODE },
  { label: "Tokenomic", id: TOKENOMIC },
  { label: "Roadmap", id: ROADMAP },
  { label: "Team Members", id: TEAM_MEMBERS }
];

const menuItems = menu.map((item, idx) => (
  <StyledNavLink key={`menu-${idx}`}>
    <Link to={`#${item.id}`}>
      <Text font="Titillium Web" fontSize="18px" lineHeight="28px">
        {item.label}
      </Text>
    </Link>
  </StyledNavLink>
));

const Header = () => {
  const isMobileView = useIsMobileView();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  console.log(isDrawerOpen);

  return (
    <StyledHeader>
      <Link to="/">
        <HeaderLogo src={headerLogo} />
      </Link>
      <Space />

      {/* display on PC */}
      {!isMobileView && menuItems}

      {/* display on Mobile */}
      {isMobileView && (
        <>
          <Button onClick={() => setIsDrawerOpen((prev) => !prev)}>
            <img
              src={burgerButton}
              alt="burger button"
              width="44px"
              height="44px"
            />
          </Button>
          {isDrawerOpen && (
            <Backdrop>
              <DrawerContainer>
                <Box>
                  <Button onClick={() => setIsDrawerOpen(false)}>
                    <img
                      src={close}
                      alt="close-button"
                      width="24px"
                      height="24px"
                    />
                  </Button>
                </Box>
                <Flex direction="column">
                  {/* <Flex> */}
                  {menu.map((item, idx) => (
                    <Box key={`menu-${idx}`} padding="12px 0">
                      <StyledNavLink>
                        <Link to={`#${item.id}`}>
                          <Text
                            font="Titillium Web"
                            fontSize="18px"
                            lineHeight="24px"
                            justify="center"
                          >
                            {item.label}
                          </Text>
                        </Link>
                      </StyledNavLink>
                    </Box>
                  ))}
                </Flex>
              </DrawerContainer>
            </Backdrop>
          )}
        </>
      )}

      {/* <Link to="/">
        <ConnectButton src={connectWallet} />
      </Link> */}
    </StyledHeader>
  );
};

export default Header;

const DrawerContainer = styled.div`
  height: 100vh;
  width: 80vw;
  position: absolute;
  box-sizing: border-box;
  padding: 24px;
  top: 0;
  right: 0;
  background: rgb(20, 20, 25);
`;
