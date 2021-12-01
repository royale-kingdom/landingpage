import styled from "styled-components";

export const RelativeDiv = styled.div<{ height?: string }>`
  height: ${({ height }) => height || "auto"};
  position: relative;
  width: 100vw;
  &:after {
    clear: both;
  }
`;

interface AbsoluteBaseProps {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  width?: string;
  height?: string;
  transform?: string;
  align?: string;
  zIndex?: number;
}
interface AbsoluteProps extends AbsoluteBaseProps {
  sm?: AbsoluteBaseProps;
}
export const AbsoluteDiv = styled.div<AbsoluteProps>`
  position: absolute;
  width: ${(props) => props.width || "unset"};
  height: ${(props) => props.height || "unset"};
  top: ${(props) => props.top || "unset"};
  bottom: ${(props) => props.bottom || "unset"};
  right: ${(props) => props.right || "unset"};
  left: ${(props) => props.left || "unset"};
  transform: ${(props) => props.transform || "unset"};
  z-index: ${(props) => props.zIndex || "inherit"};
  text-align: ${(props) => props.align || "inherit"};
  &:after {
    clear: both;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ sm, width }) => sm?.width || width || "inherit"};
    height: ${({ sm, height }) => sm?.height || height || "inherit"};
    top: ${({ sm, top }) => sm?.top || top || "inherit"};
    bottom: ${({ sm, bottom }) => sm?.bottom || bottom || "inherit"};
    right: ${({ sm, right }) => sm?.right || right || "inherit"};
    left: ${({ sm, left }) => sm?.left || left || "inherit"};
    transform: ${({ sm, transform }) =>
      sm?.transform || transform || "inherit"};
    z-index: ${({ sm, zIndex }) => sm?.zIndex || zIndex || "inherit"};
    text-align: ${({ sm, align }) => sm?.align || align || "inherit"};
  }
`;

export const StyledImage = styled.img<{ width?: string }>`
  display: inline-block;
  object-fit: contain;
  width: ${(props) => props.width || "initial"};
`;

export const CoverBackground = styled.div<{ height?: string; width?: string }>`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const CoverFlag = styled.div`
  position: absolute;
  width: 117px;
  height: 152px;
  left: 72px;
  top: 0px;
  img {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 58px;
    height: 76px;
    left: 20px;
  }
`;

export const AlignCenter = styled.div`
  text-align: center;
`;

interface BoxBaseProps {
  width: string;
  height: string;
}
interface BoxProps extends BoxBaseProps {
  sm?: BoxBaseProps;
}
export const Box = styled.div<BoxProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ sm }) => sm?.width};
    height: ${({ sm }) => sm?.height};
  }
`;

interface TextBaseProps {
  display?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  justify?: string;
  width?: string;
  padding?: string;
  margin?: string;
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
  padding: 0;
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "initial"};
  line-height: ${({ lineHeight }) => lineHeight || "2rem"};
  text-align: ${({ justify }) => justify || "initial"};
  width: ${({ width }) => width || "initial"};
  display: ${({ display }) => display || "inherit"};
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

export const GoldenText = styled(Text)`
  font-family: "Judson";
  font-style: normal;
  font-weight: bold;
  background: linear-gradient(to bottom, #fff9d7, #e5c87f, #ba8623, #8f8466);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
