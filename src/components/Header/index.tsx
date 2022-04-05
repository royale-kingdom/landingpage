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

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <HeaderLogo src={headerLogo} />
      </Link>

      <Space />

      <StyledNavLink>
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
            onClick={() => alert('Coming soon')}
          >
            Community
          </Text>
        </Link>
      </StyledNavLink>

      {/* <Link to="/">
        <ConnectButton src={connectWallet} />
      </Link> */}
    </StyledHeader>
  );
};

export default Header;
