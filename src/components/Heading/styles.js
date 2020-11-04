import styled, { css } from 'styled-components'

export const H1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme?.colors?.$c_black};
    line-height: ${theme?.font?.line};
    font-size: ${theme?.font?.sizes?.xxlarge};
    font-weight: ${theme?.font?.semibold};
  `}
`

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme?.colors?.$c_orange};
    line-height: ${theme?.font?.line};
    font-size: ${theme?.font?.sizes?.large};
    font-weight: ${theme?.font?.semibold};
  `}
`

export const H3 = styled.h3`
  ${({ theme }) => css`
    color: ${theme?.colors?.$c_orange};
    line-height: ${theme?.font?.sizes?.medium};
    font-size: ${theme?.font?.sizes?.medium};
    font-weight: normal;
  `}
`
