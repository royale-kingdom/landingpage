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
  float?: "left" | "right";
}

interface Props extends Styled {
  children: React.ReactNode;
}

export function Box(props: Props) {
  return <Div {...props}>{props.children}</Div>;
}

const Div = styled.div<Styled>`
  ${BaseMargin};
  ${BasePadding};
  box-sizing: border-box;
  display: ${({ display }) => display || "block"};
  float: ${({ float }) => float || "unset"};
  width: ${({ width }) => width || "initial"};
  height: ${({ height }) => height || "initial"};
`;
