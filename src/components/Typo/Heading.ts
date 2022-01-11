import styled from "styled-components";

import { BasePadding, BasePaddingProps } from "./../Styles/Padding";
import { BaseMargin, BaseMarginProps } from "./../Styles/Margin";

interface HeadingBaseProps {
  size?: string;
  font?: string;
  lineHeight?: string;
  align?: string;
  fontWeight?: string | number;
  color?: string;
  background?: string;
}
interface HeadingProps
  extends HeadingBaseProps,
    BaseMarginProps,
    BasePaddingProps {
  sm?: HeadingBaseProps;
}
export const Heading = styled.h1<HeadingProps>`
  ${BasePadding}
  ${BaseMargin}
  font-size: ${(p) => p.size || "initial"};
  font-family: ${({ font }) => font || "inherit"};
  line-height: ${({ lineHeight }) => lineHeight || "initial"};
  text-align: ${({ align }) => align || "unset"};
  font-weight: ${({ fontWeight }) => fontWeight || "inherit"};
  color: ${({ color }) => color || "inherit"};
  background: ${({ background }) => background || "inherit"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${({ sm }) => sm?.size || "initial"};
    line-height: ${({ sm }) => sm?.lineHeight || "initial"};
  }
`;
