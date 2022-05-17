import styled from "styled-components";
import { Text } from "../Typo/Text";

interface BaseProps {
  margin?: string;
}

interface Props extends BaseProps {
  sm?: BaseProps;
}

export const GoldenText = styled(Text)<Props>`
  /* font-family: "Judson"; */
  font-family: "Titillium Web";
  font-size: 25px;
  line-height: 41px;
  font-style: normal;
  font-weight: 600;
  /* background: linear-gradient(to bottom, #fff9d7, #e5c87f, #ba8623, #8f8466); */
  background: linear-gradient(
    180deg,
    #fffad0 15.32%,
    #ffe1a6 34.9%,
    #bc824d 89.01%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: ${({ margin }) => margin};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: ${({ sm }) => sm?.margin};
    font-size: ${({ sm, fontSize }) => sm?.fontSize};
  }
`;
