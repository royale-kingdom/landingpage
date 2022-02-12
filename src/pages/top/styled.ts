import styled from "styled-components";

import { BaseMarginProps, BaseMargin } from "./../../components/Styles/Margin";
import { BasePadding, BasePaddingProps } from "../../components/Styles/Padding";

export const LogoBadge = styled.img`
  position: absolute;
  transform: translate(-50%, 50%);
  width: 182px;
  height: 52px;
  /* bottom: -96px; */
  top: 580px;
  left: 50%;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 91px;
    height: 26px;
    top: 180px;
    /* bottom: -13%; */
  }
`;

export const RelativeDiv = styled.div<{
  height?: string;
  zIndex?: string;
  sm?: { height?: string; zIndex?: string };
}>`
  height: ${({ height }) => height || "auto"};
  position: relative;
  width: 100vw;
  z-index: ${({ zIndex }) => zIndex || 0};
  &:after {
    clear: both;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ sm }) => sm?.height || "auto"};
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
  z-index: ${(props) => props.zIndex || 0};
  text-align: ${(props) => props.align || "inherit"};
  &:after {
    clear: both;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ sm, width }) => sm?.width || width || "unset"};
    height: ${({ sm, height }) => sm?.height || height || "unset"};
    top: ${({ sm, top }) => sm?.top || top || "unset"};
    bottom: ${({ sm, bottom }) => sm?.bottom || bottom || "unset"};
    right: ${({ sm, right }) => sm?.right || right || "unset"};
    left: ${({ sm, left }) => sm?.left || left || "unset"};
    transform: ${({ sm, transform }) => sm?.transform || transform || "unset"};
    z-index: ${({ sm, zIndex }) => sm?.zIndex || zIndex || "unset"};
    text-align: ${({ sm, align }) => sm?.align || align || "unset"};
  }
`;

export const StyledImage = styled.img<{ width?: string }>`
  display: inline-block;
  object-fit: contain;
  width: ${(props) => props.width || "initial"};
`;

export const CoverBackground = styled.div<{ height?: string; width?: string }>`
  img {
    display: inline-block;
    width: 100%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
    background-repeat: no-repeat;
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
  width?: string;
  height?: string;
}
interface BoxProps extends BoxBaseProps, BaseMarginProps, BasePaddingProps {
  sm?: BoxBaseProps;
}
export const Box = styled.div<BoxProps>`
  ${BaseMargin};
  ${BasePadding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ sm }) => sm?.width};
    height: ${({ sm }) => sm?.height};
  }
`;

export const ContainerWithBG = styled.div<{
  imgSrc: any;
  height: string;
  width: string;
  sm?: {
    height?: string;
    width?: string;
    backgroundPosition?: string;
  };
}>`
  background-image: ${({ imgSrc }) => `url('${imgSrc}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* width: 100vw;
    height: 100vh; */
    width: ${({ sm, width }) => sm?.width || width || "100%"};
    height: ${({ sm, height }) => sm?.height || height || "100%"};
    background-position: ${({ sm }) =>
      sm?.backgroundPosition || "center center"};
  }
`;
