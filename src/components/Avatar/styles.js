import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 3px;
    background: ${theme.colors.$c_orange};
    border-radius: ${theme.border.radius};
    display: inline-block;

    img {
      border-radius: ${theme.border.radius};
      border: 1px solid ${theme.colors.$c_white};
    }
  `}
`
