import styled from "styled-components";

import { BaseMarginProps, BaseMargin } from "../Styles/Margin";
import { BasePadding, BasePaddingProps } from "../Styles/Padding";

interface BaseButtonProps extends BaseMarginProps, BasePaddingProps {
  color?: string;
  fontSize?: string;
  padding?: string;
  width?: string;
  height?: string;
}

interface ButtonProps extends BaseButtonProps {
  sm?: BaseButtonProps;
}

export const BaseButton = styled.div<ButtonProps>`
  ${BaseMargin};
  ${BasePadding};
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  display: inline-block;
  padding: ${({ padding }) => padding || null};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${({ sm }) => sm?.fontSize || "1rem"};
    padding: ${({ sm }) => sm?.padding || null};
    width: ${({ sm }) => sm?.width};
    height: ${({ sm }) => sm?.height};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled(BaseButton)``;

export const ButtonOutline = styled(BaseButton)`
  border: 2px solid ${({ color }) => color || "white"};
`;
