// import { px2vw } from "./../../utils/px2vw";
import styled from "styled-components";

import { px2vw } from "../../utils/px2vw";

export const RelativeDiv = styled.div<{ height?: string }>`
  height: ${({ height }) => height || "auto"};
  position: relative;
  width: 100vw;
  &:after {
    clear: both;
  }
`;

export const AbsoluteDiv = styled.div<{
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  width?: string;
  height?: string;
  transform?: string;
  align?: string;
  zIndex?: number;
}>`
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
`;

export const StyledImage = styled.img<{ width?: string }>`
  display: block;
  width: ${(props) => props.width || "initial"};
`;

export const CoverBackground = styled.div<{ height?: string; width?: string }>`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
  }
  max-height: max-content;
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

export const FemaleCharacter = styled.div`
  position: absolute;
  width: 1156px;
  height: 1085.29px;
  left: 240px;
  bottom: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${px2vw(1156)};
    height: ${px2vw(1085.29)};
    left: ${px2vw(240)};
  } ;
`;

export const MaleCharacter = styled.div`
  position: absolute;
  width: 1101px;
  height: 1060px;
  left: 0;
  bottom: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${px2vw(1101)};
    height: ${px2vw(1060)};
  } ;
`;

export const AlignCenter = styled.div`
  text-align: center;
`;

export const StyledText = styled.span<{
  fontSize?: string;
  lineHeight?: string;
}>`
  font-size: ${(props) => props.fontSize || "2rem"};
`;

export const GoldenText = styled(StyledText)`
  font-size: ${(props) => props.fontSize || "2rem"};
  line-height: ${(props) => props.lineHeight || "inherit"};
  font-family: Judson;
  font-style: normal;
  font-weight: bold;
  background: linear-gradient(to bottom, #fff9d7, #e5c87f, #ba8623, #8f8466);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Text = styled.p<{
  display?: string;
  fontSize?: string;
  lineHeight?: string;
  justify?: string;
  width?: string;
  center?: boolean;
}>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  line-height: ${({ lineHeight }) => lineHeight || "1rem"};
  text-align: ${({ justify }) => justify || "initial"};
  width: ${({ width }) => width || "initial"};
  display: ${({ display }) => display || "inherit"};
  margin: ${({ center }) => (center ? "0 auto" : "0")};
`;
