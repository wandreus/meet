import styled, { css } from 'styled-components'

export const Header = styled.header`
  padding: 5px 0;
  box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`
