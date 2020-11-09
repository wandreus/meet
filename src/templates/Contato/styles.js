import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 35px;
  h3 {
    text-transform: uppercase;
    margin-top: 10px;
  }
`

export const Body = styled.div`
  display: flex;
`
