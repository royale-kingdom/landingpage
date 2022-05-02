import styled from "styled-components";

export const HeaderLogo = styled.img`
  width: 110px;
  height: 48px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* width: 82px;
    height: 36px; */
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
  height: 86px;
  left: 0px;
  top: 0px;
  z-index: 99;
  background: radial-gradient(
    75.34% 62.09% at 55.9% 37.01%,
    #465458 0%,
    #15171a 81.19%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px 0px 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* height: 48px; */
    padding: 0;
    padding: 0 24px 0 12px;
  }

  &::after {
    content: "";
    width: 100vw;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: linear-gradient(
      180deg,
      #a4824e 32.88%,
      rgba(137, 114, 81, 0.69) 44.41%,
      rgba(107, 97, 82, 0) 94.57%
    );
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
  padding: 0 12px;
  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;
