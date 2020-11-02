import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ColumnLeft = styled.div`
  padding: 80px 0;
  flex: 1 0 auto;
  max-width: 600px;
`

export const ColumnRight = styled.div`
  padding: 80px 0;
  flex: 1 0 auto;
  max-width: 370px;

  h2 {
    margin-bottom: 20px;
    text-align: right;
  }

  button {
    margin-left: auto;
  }
`

export const Title = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.$c_black_light};
    font-weight: normal;
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
`

export const Speakers = styled.section`
  ${({ theme }) => css`
    padding: 70px 0;
    display: block;
    background: ${theme.colors.$c_background};
    transform: skewY(-2deg);

    > div {
      transform: skewY(2deg);
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
  `}
`
