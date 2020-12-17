import styled from 'styled-components'

export const Spotlight = styled.div`
  h1 {
    margin-top: 45px;
    @media (max-width: 900px) {
      padding: 0 10px;
    }
  }

  @media (max-width: 900px) {
    > div {
      padding: 0;
    }
  }

  h3 {
    text-align: center;
    margin: 15px 0 30px;
  }
`

export const Body = styled.div`
  padding-bottom: 40px;

  h1 {
    margin-top: 45px;
  }

  h3 {
    text-align: center;
    margin: 30px 0 10px;
  }

  @media (max-width: 900px) {
    padding: 0 0 40px;
  }
`
