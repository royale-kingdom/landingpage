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
  height?: string;
}>`
  ${BaseMargin};
  ${BasePadding};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: ${(props) => props.height || "inherit"};
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

interface RowProps extends BaseMarginProps, BasePaddingProps {}
export const Row = styled.div<RowProps>`
  ${BaseMargin};
  ${BasePadding}
  display: flex;
  width: 100%;
  clear: both;
`;

/**
 * 24 cols system
 */
export const Col = styled.div<{
  span: number;
  md?: number;
  push?: number;
  pull?: number;
  bg?: string;
}>`
  /* clear: both; */
  /* display: inline-block;
   */
  background: ${({ bg }) => bg || "initial"};
  display: table-cell;
  vertical-align: top;
  width: ${({ span }) => `${(100 / 24) * span}vw`};
  margin-left: ${({ push }) => (push ? `${(100 / 24) * push}vw` : "initial")};
  margin-right: ${({ pull }) => (pull ? `${(100 / 24) * pull}vw` : "initial")};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ md }) => (md ? `${(100 / 24) * md || 24}vw` : "24vw")};
  }
`;
