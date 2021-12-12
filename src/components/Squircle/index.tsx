import styled from "styled-components";
import image from "../../assets/images/landingpage/unique-character-min.webp";
import squircle from "../../assets/images/shape/Squircle.png";

const StyledSquircle = styled.div<{ size: number; active?: boolean }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: url(${image});
  background-size: contain;
  position: relative;
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
    background-image: url(${squircle});
    /* clip-path:  url(${squircle}) */
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 48px;
    height: 48px;
  }
`;

const Squircle = ({ size, active }: { size: number; active?: boolean }) => (
  <StyledSquircle size={size} active={active} />
);

export default Squircle;
