import styled from "styled-components";

import { BasePadding, BasePaddingProps } from "./../Styles/Padding";
import { BaseMargin, BaseMarginProps } from "./../Styles/Margin";

interface FlexBaseProps {
  justifyContent?:
    | ""
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "center";
  display?: string;
  alginItem?: string;
  flexDirection?: string;
  height?: string;
  width?: string;
}
interface FlexProps extends FlexBaseProps, BasePaddingProps, BaseMarginProps {
  sm?: FlexBaseProps;
}

export const Flex = styled.div<FlexProps>`
  ${BaseMargin};
  ${BasePadding};
  display: ${({ display }) => display || "flex"};
  flex-wrap: wrap;
  width: ${({ width }) => width || "100%"};
  height: ${(props) => props.height || "inherit"};
  justify-content: ${(props) => props.justifyContent || "inherit"};
  align-items: ${(props) => props.alginItem || "inherit"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ sm }) => sm?.width || "100%"};
    height: ${({ sm }) => sm?.height || "inherit"};
    justify-content: ${({ sm, justifyContent }) =>
      sm?.justifyContent || justifyContent || "initial"};
    align-items: ${({ sm, alginItem }) =>
      sm?.alginItem || alginItem || "initial"};
    flex-direction: ${({ sm }) => sm?.flexDirection || "row"};
  }
`;

export const FlexInline = styled.div<FlexProps>`
  display: inline-flex;
`;

interface FlexItemProps extends BasePaddingProps, BaseMarginProps {
  width?: string;
  flex?: string;
}
export const FlexItem = styled.div<FlexItemProps>`
  ${BaseMargin};
  ${BasePadding};
  width: ${(props) => props.width || "auto"};
  flex: ${(props) => props.flex || "initial"};
`;

interface ContainerProps extends BaseMarginProps, BasePaddingProps {
  width?: string;
  sm?: {
    width?: string;
  };
}
export const Container = styled.div<ContainerProps>`
  ${BaseMargin};
  ${BasePadding};
  width: ${({ width }) => width || "inherit"};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ sm }) => sm?.width};
  }
`;

interface RowProps extends BaseMarginProps, BasePaddingProps {}
export const Row = styled.div<RowProps>`
  ${BaseMargin};
  ${BasePadding}
  display: flex;
  width: 100%;
  /* flex-wrap: no-wrap; */
  /* clear: both; */
`;

interface ColProps extends BaseMarginProps, BasePaddingProps {
  span: number;
  md?: number;
  push?: number;
  pull?: number;
  bg?: string;
  sm?: number;
}

/**
 * 24 cols system
 */
export const Col = styled.div<ColProps>`
  /* clear: both; */
  /* display: inline-block;
   */
  ${BaseMargin}
  ${BasePadding}
  background: ${({ bg }) => bg || "initial"};
  /* display: table-cell; */
  display: inline-block;
  vertical-align: top;
  width: ${({ span }) => `${(100 / 24) * span}%`};
  margin-left: ${({ push }) => (push ? `${(100 / 24) * push}%` : "unset")};
  margin-right: ${({ pull }) => (pull ? `${(100 / 24) * pull}%` : "unset")};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* width: ${({ sm }) => (sm ? `${(100 / 24) * sm || 24}%` : "24%")}; */
    width: 100vw;
    flex: 1;
  }
`;
