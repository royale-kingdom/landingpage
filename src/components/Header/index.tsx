import { Link } from "react-router-dom";

import {
  StyledHeader,
  StyledNavLink,
  Space,
  HeaderLogo
  // ConnectButton
} from "./styled";
import { Text } from "../../components/Typo/Text";
// import connectWallet from "../../assets/images/landingpage/connect_wallet_button.svg";
import headerLogo from "../../assets/images/landingpage/logo_header.png";

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

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <HeaderLogo src={headerLogo} />
      </Link>

      <Space />
      {menu.map((item, idx) => (
        <StyledNavLink key={`menu-${idx}`}>
          <Link to={`#${item.id}`}>
            <Text
              font="Titillium Web"
              fontSize="18px"
              lineHeight="28px"
              sm={{ fontSize: "14px", padding: "0 4px" }}
            >
              {item.label}
            </Text>
          </Link>
        </StyledNavLink>
      ))}

      {/* <StyledNavLink>
        <Link to="/">
          <Text
            fontSize="18px"
            lineHeight="28px"
            sm={{ fontSize: "14px", padding: "0 4px" }}
          >
            Home
          </Text>
        </Link>
      </StyledNavLink>
      <StyledNavLink>
        <a href="https://marketplace-dev.royalekingdom.com/marketplace">
          <Text
            fontSize="18px"
            lineHeight="28px"
            sm={{ fontSize: "14px", padding: "0 4px" }}
            // onClick={() => alert('Coming soon')}
          >
            Market
          </Text>
        </a>
      </StyledNavLink>
      <StyledNavLink>
        <Link to="/#">
          <Text
            fontSize="18px"
            lineHeight="28px"
            sm={{ fontSize: "14px", padding: "0 4px" }}
            onClick={() => alert("Coming soon")}
          >
            Community
          </Text>
        </Link>
      </StyledNavLink> */}

      {/* <Link to="/">
        <ConnectButton src={connectWallet} />
      </Link> */}
    </StyledHeader>
  );
};

export default Header;
