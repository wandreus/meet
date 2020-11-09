import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`

export const Body = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
  `}
`

export const ColumnLeft = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;
    max-width: 770px;
    display: block;

    > h1 {
      margin: 20px 0 5px;
    }
  `}
`

export const Bio = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.$c_black};
    line-height: ${theme.font.line};
    font-size: ${theme.font.sizes.medium};
    white-space: break-spaces;
    text-align: justify;
  `}
`

export const Theme = styled.div`
  ${({ theme }) => css`
    padding: 20px 0 0;
    margin: 20px 0;
    border-top: ${theme.border.solid};
    color: ${theme.colors.$c_black};
    line-height: ${theme.font.line};
    font-size: ${theme.font.sizes.medium};
    display: flex;
    align-items: flex-start;
    h2 {
      margin-right: 10px;
    }
  `}
`

export const VideoPlay = styled.iframe`
  margin-bottom: 25px;
`

export const ColumnRight = styled.div`
  flex: 1 0 auto;
  max-width: 290px;
  display: block;

  > div {
    width: 100%;
  }

  h3 {
    font-weight: ${({ theme }) => theme.font.semibold};
    text-align: center;
    line-height: ${({ theme }) => theme.font.line};
    margin: 20px 0;
    padding-bottom: 20px;
    border-bottom: ${({ theme }) => theme.border.solid};
  }
  img {
    width: 100%;
  }
`
