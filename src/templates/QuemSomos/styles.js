import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const body = styled.main`
  ${({ theme }) => css`
    padding: 15px 0;
    color: ${theme?.colors?.$c_black};
    line-height: ${theme?.font?.line};
    font-size: ${theme?.font?.sizes?.medium};

    p {
      text-align: left;
      margin-bottom: 10px;
    }

    h2 {
      margin-bottom: 10px;
    }
  `}
`
