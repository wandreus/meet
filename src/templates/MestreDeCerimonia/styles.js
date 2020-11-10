import styled, { css } from 'styled-components'

export const Spotlight = styled.div`
  h1 {
    margin-top: 45px;
    @media (max-width: 900px) {
      padding: 0 10px;
    }
  }

  h3 {
    text-align: center;
    margin: 15px 0 30px;
  }
`

export const Body = styled.div`
  ${({ theme }) => css`
    background: ${theme?.colors?.$c_background};
    padding-bottom: 40px;

    h1 {
      margin-top: 45px;
    }

    h3 {
      text-align: center;
      margin: 30px 0 10px;
    }

    @media (max-width: 900px) {
      padding: 0 10px 40px;
    }
  `}
`
