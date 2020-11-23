import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
  `}
`
