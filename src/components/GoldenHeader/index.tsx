import { ReactNode } from "react";
import styled from "styled-components";

interface Props extends BaseStyleProps {
  children: ReactNode;
}

const GoldenHeader = ({ children, align }: Props) => {
  return <H1 align={align || "center"}>{children}</H1>;
};

export default GoldenHeader;

interface BaseStyleProps {
  align?: "center" | "left" | "right" | "justify";
}

const H1 = styled.h1<BaseStyleProps>`
  text-align: ${({ align }) => align};
  font-size: 40px;
  font-weight: 700;
  line-height: 64px;
  font-family: "Red Rose", cursive;
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

  text-shadow: 0px 0px 24.8863px rgba(255, 221, 64, 0.25);
`;
