import styled from "styled-components";

interface TextBaseProps {
  display?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  justify?: string;
  width?: string;
  padding?: string;
  margin?: string;
  color?: string;
  font?: "Judson" | "Lato";
}

interface TextProps extends TextBaseProps {
  sm?: TextBaseProps;
}
export const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize || "2rem"};
  line-height: ${(props) => props.lineHeight || "inherit"};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${({ sm }) => sm?.fontSize || "2rem"};
    line-height: ${({ sm }) => sm?.lineHeight || "inherit"};
  }
`;

export const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "initial"};
  line-height: ${({ lineHeight }) => lineHeight || "2rem"};
  text-align: ${({ justify }) => justify || "initial"};
  width: ${({ width }) => width || "initial"};
  display: ${({ display }) => display || "inherit"};
  font-family: ${({ font }) => font || "Judson"};
  color: ${({ color }) => color || "rgba(238, 226, 204, 0.82)"};
  margin: ${({ margin }) => margin || "initial"};
  padding: ${({ padding }) => padding || "inherit"};
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${({ sm, fontSize }) => sm?.fontSize || fontSize || "2rem"};
    font-weight: ${({ sm, fontWeight }) =>
      sm?.fontWeight || fontWeight || "initial"};
    line-height: ${({ sm, lineHeight }) =>
      sm?.lineHeight || lineHeight || "2rem"};
    text-align: ${({ sm, justify }) => sm?.justify || justify || "initial"};
    width: ${({ sm, width }) => sm?.width || width || "initial"};
    display: ${({ sm, display }) => sm?.display || display || "inherit"};
    margin: ${({ sm, margin }) => sm?.margin || margin || "initial"};
    padding: ${({ sm, padding }) => sm?.padding || padding || "inherit"};
  }
`;
