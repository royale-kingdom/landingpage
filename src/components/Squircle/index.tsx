import styled from "styled-components";

import ActiveSquircleSVG from "../../assets/images/shape/active_squircle.svg";
import SquircleSVG from "../../assets/images/shape/squircle.svg";

const StyledSquircle = styled.div<{ size: number; active?: boolean }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  background-size: contain;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 30%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-image: ${({ active }) =>
      `url(${active ? ActiveSquircleSVG : SquircleSVG})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 48px;
    height: 48px;
  }
`;

const Squircle = ({
  size,
  active,
  onClick,
  children
}: {
  size: number;
  active?: boolean;
  onClick?: () => void;
  children?: JSX.Element;
}) => (
  <StyledSquircle
    size={size}
    active={active}
    onClick={onClick}
    children={children}
  />
);

export default Squircle;
