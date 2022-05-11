import { ReactNode } from "react";
import styled from "styled-components";

interface Props extends BaseStyleProps {
  children: ReactNode;
}

const GoldenHeader = ({ children, align, margin }: Props) => {
  return (
    <H1 align={align || "center"} margin={margin}>
      {children}
    </H1>
  );
};

export default GoldenHeader;

interface BaseStyleProps {
  align?: "center" | "left" | "right" | "justify";
  margin?: string;
}

const H1 = styled.h1<BaseStyleProps>`
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};
  font-size: 40px;
  font-weight: 700;
  line-height: 64px;
  font-family: "Red Rose", cursive;
  /* text-shadow: 0px 0px 24px rgba(255, 221, 64, 0.25),
  0px -2px 2px rgba(0, 0, 0, 0.5), 0px 2px 2px rgba(255, 255, 255, 0.4); */
  /* text-shadow: 0px -2px 2px rgba(0, 0, 0, 0.5); */
  color: transparent;
  background: linear-gradient(
    180deg,
    #fffad0 15.32%,
    #ffe1a6 34.9%,
    #bc824d 89.01%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-fill-color: transparent; */
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 30px;
    line-height: 48px;
  }
`;
