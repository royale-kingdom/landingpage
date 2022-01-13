import styled from "styled-components";

export const RoadMapLine = styled.div<{ degree?: string }>`
  height: 100%;
  background: linear-gradient(
    ${({ degree }) => degree || "180deg"},
    #fff9d7 22.07%,
    #e6c87f 44.81%,
    #ba8623 61.12%,
    #8f8466 77.86%
  );
  /* transform: rotate(${({ degree }) => degree || "0"}); */
`;
