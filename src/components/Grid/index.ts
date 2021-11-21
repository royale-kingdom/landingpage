import { px2vw } from "./../../utils/px2vw";
import styled from "styled-components";

import { BasePadding, BasePaddingProps } from "./../Styles/Padding";
import { BaseMargin, BaseMarginProps } from "./../Styles/Margin";

export const Flex = styled.div<{
  justifyContent?:
    | ""
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "center";
  alginItem?: string;
  flexDirection?: string;
}>`
  ${BaseMargin};
  ${BasePadding};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props) => props.justifyContent || "inherit"};
  align-items: ${(props) => props.alginItem || "inherit"};
  flex-direction: ${(props) => props.flexDirection || "row"};
`;

export const FlexInline = styled(Flex)`
  display: inline-flex;
`;

interface FlexItemProps extends BasePaddingProps, BaseMarginProps {
  width?: string;
  flex?: string;
}
export const FlexItem = styled.div<FlexItemProps>`
  ${BaseMargin};
  ${BasePadding};
  width: ${(props) => props.width || "initial"};
  flex: ${(props) => props.flex || "initial"};
`;

export const Box = styled.div<{ width?: string; margin?: string }>`
  width: ${({ width }) => width || "initial"};
  margin: ${({ margin }) => margin || "initial"};
`;

export const Container = styled.div``;

export const Row = styled.div`
  clear: both;
`;

/**
 * 24 cols system
 */
export const Col = styled.div<{ span: number; md?: number }>`
  display: inline-block;
  width: ${({ span }) => `${(100 / 24) * span}vw`};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ md }) => (md ? `${(100 / 24) * md || 24}vw` : "24vw")};
  }
`;
