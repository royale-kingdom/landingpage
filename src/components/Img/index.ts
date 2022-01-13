import styled from "styled-components";

interface Base {
  width: string;
  height: string;
}

interface ImgStyled extends Base {
  sm?: Base;
}

export const Img = styled.img<ImgStyled>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ sm, width }) => sm?.width || width};
    height: ${({ sm, height }) => sm?.height || height};
  }
`;
