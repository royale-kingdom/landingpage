import styled from "styled-components";

export const RoadMapLine = styled.div<{ degree?: string }>`
  height: 100%;
  /* background: linear-gradient(
    ${({ degree }) => degree || "180deg"},
    #fff9d7 22.07%,
    #e6c87f 44.81%,
    #ba8623 61.12%,
    #8f8466 77.86%
  ); */
  background: linear-gradient(${({ degree }) => degree || "180deg"}, #FAFFBF 22.07%, #FFD879 44.81%, #DE9D20 61.12%, #8F8466 77.86%);
  box-shadow: 0px 0px 2px rgba(250, 255, 191, 0.8), 0px 0px 32px rgba(250, 255, 191, 0.25);
  /* transform: rotate(${({ degree }) => degree || "0"}); */
`;
