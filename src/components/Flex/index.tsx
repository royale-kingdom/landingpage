/**
 *
 * Box
 *
 */
import * as React from "react";
import styled from "styled-components/macro";
import { BasePadding, BasePaddingProps } from "../Styles/Padding";
import { BaseMargin, BaseMarginProps } from "../Styles/Margin";

interface Styled extends BasePaddingProps, BaseMarginProps {
  width?: string;
  height?: string;
  display?: "block" | "inline-block" | "flex";
  alignItem?: string;
  justifyContent?: string;
  direction?: "column" | "row";
}

interface Props extends Styled {
  children: React.ReactNode;
}

export function Flex(props: Props) {
  return <Div {...props}>{props.children}</Div>;
}

const Div = styled.div<Styled>`
  ${BaseMargin};
  ${BasePadding};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItem }) => alignItem || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  width: ${({ width }) => width || "initial"};
  height: ${({ height }) => height || "initial"};
`;
