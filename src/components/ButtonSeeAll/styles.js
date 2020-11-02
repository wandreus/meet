import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      &::before,
      &::after {
        content: '';
        display: block;
        height: 1px;
        width: 115px;
        background: ${theme.colors.$c_blue};
      }
    }
  `}
`
