import styled from "styled-components";

import { BaseMarginProps, BaseMargin } from "../Styles/Margin";
import { BasePadding, BasePaddingProps } from "../Styles/Padding";

interface BaseButtonProps extends BaseMarginProps, BasePaddingProps {
  color?: string;
  fontSize?: string;
}

export const BaseButton = styled.div<BaseButtonProps>`
  ${BaseMargin};
  ${BasePadding};
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled(BaseButton)``;

export const ButtonOutline = styled(BaseButton)`
  border: 2px solid ${({ color }) => color || "white"};
`;
