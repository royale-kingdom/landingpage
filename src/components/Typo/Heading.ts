import styled from "styled-components";

import { BasePadding, BasePaddingProps } from "./../Styles/Padding";
import { BaseMargin, BaseMarginProps } from "./../Styles/Margin";

interface HeadingProps extends BaseMarginProps, BasePaddingProps {
  size?: string;
  font?: string;
  lineHeight?: string;
}
export const Heading = styled.h1<HeadingProps>`
  ${BasePadding}
  ${BaseMargin}
  font-size: ${(p) => p.size || "initial"};
  font-family: ${({ font }) => font || "inherit"};
`;
