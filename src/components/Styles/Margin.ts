import { css } from "styled-components";

const useDefaultValue = (value?: string, defaultValue?: string) =>
  defaultValue ? defaultValue : value;

export interface BaseMarginProps {
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export const BaseMargin = css<BaseMarginProps>`
  /* margin: ${({ margin }) => margin || "inherit"}; */
  margin-left: ${({ margin, marginLeft }) =>
    useDefaultValue(marginLeft, margin?.split(" ")[1]) ||
    margin?.split(" ")[0]};
  margin-right: ${({ margin, marginRight }) =>
    useDefaultValue(marginRight, margin?.split(" ")[1]) ||
    margin?.split(" ")[0]};
  margin-bottom: ${({ margin, marginBottom }) =>
    useDefaultValue(marginBottom, margin?.split(" ")[0])};
  margin-top: ${({ margin, marginTop }) =>
    useDefaultValue(marginTop, margin?.split(" ")[0])};
`;
