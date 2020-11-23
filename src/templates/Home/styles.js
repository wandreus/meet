import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`

export const ColumnLeft = styled.div`
  padding: 80px 0;
  flex: 1 0 auto;
  max-width: 600px;

  @media (max-width: 900px) {
    padding: 30px 0 0;
    max-width: 100%;
  }
`

export const ColumnRight = styled.div`
  padding: 80px 0;
  flex: 1 0 auto;
  max-width: 370px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding: 30px 0;
    max-width: 100%;
  }

  h2 {
    margin-bottom: 20px;
    text-align: right;
    @media (max-width: 900px) {
      text-align: center;
    }
  }

  button {
    margin-left: auto;
    @media (max-width: 900px) {
      margin: 15px auto;
    }
  }

  p {
    max-width: 370px;
  }
`

export const Title = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.$c_black_light};
    font-weight: normal;

    @media (max-width: 900px) {
      text-align: center;
    }
  `}
`

export const Highlight = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.$c_blue};
    line-height: 68px;
    margin-top: 20px;
    margin-bottom: 65px;
    @media (max-width: 900px) {
      margin-bottom: 30px;
      font-size: 40px;
      line-height: 41px;
      text-align: center;
    }

    em {
      font-style: normal;
      color: ${theme.colors.$c_orange};
    }
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.$c_blue};
    font-weight: ${theme.font.semibold};
    margin-bottom: 25px;

    @media (max-width: 900px) {
      margin-bottom: 10px;
      text-align: center;
    }
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.$c_black};
    line-height: ${theme.font.line};
    text-align: justify;

    p {
      margin-bottom: 15px;
    }
  `}
`

export const img = styled.div`
  margin: 90px 0 0 auto;
  display: flex;
  justify-content: flex-end;
  max-width: 100%;

  @media (max-width: 900px) {
    margin: 15px auto 40px;
    order: -1;
  }
`

export const Speakers = styled.section`
  ${({ theme }) => css`
    padding: 70px 0;
    display: block;
    background: ${theme.colors.$c_background};
    transform: skewY(-2deg);

    > div {
      transform: skewY(2deg);

      @media (max-width: 900px) {
        padding: 0;
      }
    }

    h1 {
      padding-bottom: 70px;
    }
  `}
`

export const Masters = styled.section`
  ${({ theme }) => css`
    padding: 70px 0 30px;
    display: block;
    background: ${theme.colors.$c_white};

    h1 {
      padding-bottom: 70px;
    }

    > div {
      @media (max-width: 900px) {
        padding: 0;
      }
    }
  `}
`
