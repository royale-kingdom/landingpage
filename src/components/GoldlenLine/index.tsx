import styled from "styled-components";

export const GoldenLine = styled.div`
  content: "";
  height: 2px;
  display: inline-block;
  width: 100%;
  z-index: 2;

  background-image: linear-gradient(
    to right,
    #8f6b2d52 0%,
    #faffbf 50%,
    #8f6b2d56 100%
  );
`;
