/**
 *
 * Box
 *
 */
import * as React from "react";
import styled from "styled-components/macro";
import { BasePadding, BasePaddingProps } from "../Styles/Padding";
import { BaseMargin, BaseMarginProps } from "../Styles/Margin";

interface BaseStyled extends BasePaddingProps, BaseMarginProps {
  width?: string;
  height?: string;
  display?: "block" | "inline-block" | "flex";
  float?: "left" | "right";
}

interface Styled extends BaseStyled {
  sm?: BaseStyled;
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ sm, width }) => sm?.width || width || "initial"};
    height: ${({ sm, height }) => sm?.height || height || "initial"};
    margin: ${({ sm, margin }) => sm?.margin || margin || "initial"};
  }
`;
