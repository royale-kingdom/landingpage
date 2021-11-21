import { css } from "styled-components";

const useDefaultValue = (value?: string, defaultValue?: string) =>
  defaultValue ? defaultValue : value;

export interface BasePaddingProps {
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export const BasePadding = css<BasePaddingProps>`
  /* padding-left: ${({ paddingLeft }) => paddingLeft || 0};
  padding-right: ${({ paddingRight }) => paddingRight || 0};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0};
  padding-top: ${({ paddingTop }) => paddingTop || 0}; */
  /* padding: ${({ padding }) => padding || 0}; */

  padding-left: ${({ padding, paddingLeft }) =>
    useDefaultValue(paddingLeft, padding?.split(" ")[1]) ||
    padding?.split(" ")[0]};
  padding-right: ${({ padding, paddingRight }) =>
    useDefaultValue(paddingRight, padding?.split(" ")[1]) ||
    padding?.split(" ")[0]};
  padding-bottom: ${({ padding, paddingBottom }) =>
    useDefaultValue(paddingBottom, padding?.split(" ")[0])};
  padding-top: ${({ padding, paddingTop }) =>
    useDefaultValue(paddingTop, padding?.split(" ")[0])};
`;
