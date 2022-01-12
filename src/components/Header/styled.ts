import styled from "styled-components";

export const HeaderLogo = styled.img`
  width: 164px;
  height: 72px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 82px;
    height: 36px;
  }
`;

export const ConnectButton = styled.img`
  width: 182px;
  height: 52px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0;
    width: 91px;
    height: 26px;
  }
`;

export const StyledHeader = styled.div`
  position: sticky;
  height: 80px;
  left: 0px;
  top: 0px;
  z-index: 99;
  background: #1d1d1d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px 0px 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 48px;
    padding: 0;
  }
`;

export const Space = styled.div`
  flex: 1;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const StyledNavLink = styled.span`
  color: white;
  padding: 0 2rem;
  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;
