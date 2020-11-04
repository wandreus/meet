import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const body = styled.main`
  ${({ theme }) => css`
    padding: 15px 0;
    color: ${theme?.colors?.$c_black};
    line-height: ${theme?.font?.line};
    font-size: ${theme?.font?.sizes?.medium};

    p {
      text-align: justify;
      margin-bottom: 10px;
    }
  `}
`
