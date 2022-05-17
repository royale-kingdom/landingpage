/**
 *
 * Box
 *
 */
import * as React from "react";
import styled from "styled-components/macro";
import { BasePadding, BasePaddingProps } from "../Styles/Padding";
import { BaseMargin, BaseMarginProps } from "../Styles/Margin";

interface BaseProps extends BasePaddingProps, BaseMarginProps {
  width?: string;
  height?: string;
  display?: "block" | "inline-block" | "flex";
  alignItem?: string;
  justifyContent?: string;
  direction?: "column" | "row";
}

interface Props extends BaseProps {
  children: React.ReactNode;
  sm?: BaseProps;
}

export function Flex(props: Props) {
  return <Div {...props}>{props.children}</Div>;
}

interface StyledProps extends BaseProps {
  sm?: BaseProps;
}

const Div = styled.div<StyledProps>`
  ${BaseMargin};
  ${BasePadding};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItem }) => alignItem || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  width: ${({ width }) => width || "initial"};
  height: ${({ height }) => height || "initial"};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: ${({ sm }) => sm?.direction};
    align-items: ${({ sm }) => sm?.alignItem};
    justify-content: ${({ sm }) => sm?.justifyContent};
  }
`;
