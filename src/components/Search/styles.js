import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  max-width: 530px;
  display: block;
  margin: 0 auto;
`

export const Search = styled.input`
  ${({ theme }) => css`
    background: #f5f5f5;
    border: 1px solid #898383;
    box-sizing: border-box;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    color: ${theme.colors.$c_black};
    padding: 15px;
    width: 100%;

    &::placeholder {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.medium};
      color: ${theme.colors.$c_black};
    }
  `}
`

export const Result = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    left: 0;
    z-index: 1;
    right: 0;
    top: 50px;
    background: ${theme.colors.$c_white};
    border: ${theme.border.solid};
    box-shadow: ${theme.shadow};
    border-radius: ${theme.border.radius};
    padding-bottom: 10px;

    &:empty {
      padding: 0;
      opacity: 0;
    }
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    padding: 5px 10px;
    margin: 5px 0;
    border-bottom: ${theme.border.solid};
    transition: ${theme.transition};
    border-radius: ${theme.border.radius};
    transform: scale(1);
    background: ${theme.colors.$c_white};

    &:last-child {
      margin-bottom: 0px;
      border-bottom: none;
      padding-bottom: 0px;
    }

    a {
      display: flex;
      align-items: flex-start;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: ${theme.shadow};
    }
  `}
`

export const Info = styled.div`
  flex: 1 0 0;
  max-width: 430px;
  padding-right: 20px;

  h4 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`

export const Image = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;
    max-width: 78px;
    padding: 3px;
    background: ${theme.colors.$c_orange};
    border-radius: ${theme.border.radius};
    display: inline-block;

    img {
      border-radius: ${theme.border.radius};
      border: 1px solid ${theme.colors.$c_white};
      max-width: 100%;
      height: auto;
    }
  `}
`

export const ShortDesc = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.line};
    color: ${theme.colors.$c_black};
  `}
`

export const Themes = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.xsmall};
    color: ${theme.colors.$c_orange};
    margin-top: 3px;
    display: block;
    word-break: break-word;
  `}
`

export const Clear = styled.i`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.xsmall};
    color: ${theme.colors.$c_white};
    position: absolute;
    font-style: normal;
    cursor: pointer;
    padding: 5px;
    top: 13px;
    right: 13px;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.$c_orange};
    transition: ${theme.transition};
    &:hover {
      background: ${theme.colors.$c_blue};
    }
  `}
`

export const Icon = styled.svg`
  position: absolute;
  right: 15px;
  top: 10px;
  width: 27px;
  height: 27px;

  path {
    fill: #898383;
  }
`
