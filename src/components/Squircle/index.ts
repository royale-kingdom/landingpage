import styled from "styled-components";

export const Squircle = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 30%;
  background: rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  transform: rotate(45deg);
`;
