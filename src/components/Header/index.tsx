import { Link } from "react-router-dom";

import { StyledHeader, StyledNavLink } from "./styled";
import { Text } from "../../components/Typo/Text";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavLink>
        <Link to="/">
          <Text>Kingdom</Text>
        </Link>
      </StyledNavLink>
      <StyledNavLink>
        <Link to="/market">
          <Text>Market</Text>
        </Link>
      </StyledNavLink>
      <StyledNavLink>
        <Link to="/community">
          <Text>Community</Text>
        </Link>
      </StyledNavLink>
    </StyledHeader>
  );
};

export default Header;
