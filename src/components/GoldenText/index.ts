import styled from "styled-components";
import { Text } from "../Typo/Text";

export const GoldenText = styled(Text)`
  /* font-family: "Judson"; */
  font-style: normal;
  font-weight: bold;
  /* background: linear-gradient(to bottom, #fff9d7, #e5c87f, #ba8623, #8f8466); */
  background: linear-gradient(
    27.48deg,
    #8f6b2d 4.87%,
    #f6c65c 32.49%,
    #c2933a 47.27%,
    #fdcc5f 62.04%
  );
  text-shadow: 0px 1px 2px rgba(186, 134, 35, 0.12);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
