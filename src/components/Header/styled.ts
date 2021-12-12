import styled from "styled-components";

export const StyledHeader = styled.div`
  position: sticky;
  height: 48px;
  left: 0px;
  top: 0px;
  z-index: 99;
  background: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled.span`
  color: white;
  padding: 0 1rem;
  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;
