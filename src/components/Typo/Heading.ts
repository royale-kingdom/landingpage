import styled from "styled-components";

import { BasePadding, BasePaddingProps } from "./../Styles/Padding";
import { BaseMargin, BaseMarginProps } from "./../Styles/Margin";

interface HeadingBaseProps {
  size?: string;
  font?: string;
  lineHeight?: string;
  align?: string;
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
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${({ sm }) => sm?.size || "initial"};
    line-height: ${({ sm }) => sm?.lineHeight || "initial"};
  }
`;
