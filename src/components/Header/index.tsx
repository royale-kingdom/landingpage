import { Link } from "react-router-dom";
import { StyledBackground, StyledNavLink } from "./styled";
const Header = () => {
  return (
    <StyledBackground>
      <StyledNavLink>
        <Link to="/">Kingdom</Link>
      </StyledNavLink>
      <StyledNavLink>
        <Link to="/market">Market</Link>
      </StyledNavLink>
      <StyledNavLink>
        <Link to="/community">Community</Link>
      </StyledNavLink>
    </StyledBackground>
  );
};

export default Header;
