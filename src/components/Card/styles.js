import styled, { css } from 'styled-components'

export const Wrapper = styled.figure`
  ${({ theme }) => css`
    width: 100%;
    max-width: 245px;
    background: ${theme.colors.$c_white};
    box-shadow: ${theme.shadow};
    border-radius: ${theme.border.radius};
    display: flex;
    flex-wrap: wrap;
  `}
`

export const Img = styled.div`
  width: 100%;
  position: relative;
  img {
    ${({ theme }) => css`
      width: 100%;
      height: auto;
      border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
    `}
  }
`

export const Titulo = styled.h2`
  ${({ theme }) => css`
    position: absolute;
    bottom: -20px;
    left: 20px;
    right: 20px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.large};
    color: ${theme.colors.$c_blue};
    background: ${theme.colors.$c_white};
    box-shadow: ${theme.shadow};
    border-radius: ${theme.border.radius};
    text-align: center;
  `}
`

export const Figcaption = styled.div`
  padding: 40px 15px 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.line};
    color: ${theme.colors.$c_black};
    text-align: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(29, 18, 16, 0.1);
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semibold};
    transition: ${theme.transition};
    color: ${theme.colors.$c_blue};
    text-decoration: underline;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
    max-height: 240px;
    overflow: hidden;

    svg {
      margin-left: 10px;
      transition: ${theme.transition};
      transform: scale(1);
      path {
        transition: ${theme.transition};
        fill: ${theme.colors.$c_blue};
      }
    }

    &:hover {
      color: ${theme.colors.$c_orange};
      svg {
        transform: scale(1.5);
        path {
          fill: ${theme.colors.$c_orange};
        }
      }
    }
  `}
`
