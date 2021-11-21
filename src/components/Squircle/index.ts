import styled from "styled-components";

export const Squircle = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  &:after {
    content: "";
    display: inline-block;
    border-radius: 30%;
    width: ${({ size }) => `${size * 0.41 * 2}px`};
    height: ${({ size }) => `${size * 0.41 * 2}px`};
    background: rgba(0, 0, 0, 0.5);
    border: 3px solid white;
    transform: rotate(45deg);
    /* margin: ${({ size }) => `${size * 0.41 * 2}px`}; */
  }
`;
