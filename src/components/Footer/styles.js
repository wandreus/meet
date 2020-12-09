import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    padding: 35px 0;
    background: ${theme?.colors?.$c_background_grad};
    color: ${theme?.colors?.$c_white};
    position: relative;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row;

      @media (max-width: 900px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
  `}
`

export const Contact = styled.div`
  text-align: left;
  max-width: 255px;

  @media (max-width: 900px) {
    text-align: center;
  }

  svg {
    margin-right: 10px;
    min-width: 20px;
  }
`

export const Brand = styled.div`
  text-align: center;
  max-width: 270px;

  img {
    display: block;
    margin: auto;
  }

  @media (max-width: 900px) {
    order: -1;
  }

  > div {
    margin: 0 auto;
  }
`

export const About = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme?.font?.light};
    font-size: ${theme?.font?.sizes?.medium};
    line-height: ${theme?.font?.line};
    margin-top: 10px;
  `}
`

export const Disclaimer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding: 7px;
    font-weight: ${theme?.font?.light};
    font-size: ${theme?.font?.sizes?.medium};
    line-height: ${theme?.font?.line};
    color: ${theme?.colors?.$c_black};
  `}
`

export const Social = styled.div`
  text-align: right;

  @media (max-width: 900px) {
    text-align: center;
  }

  ul {
    margin-left: auto;

    @media (max-width: 900px) {
      margin: auto;
    }
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme?.font?.sizes?.large};
  text-transform: uppercase;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    margin-top: 40px;
    margin-bottom: 10px;
  }
`

export const Ul = styled.ul``

export const Li = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme?.font?.sizes?.medium};
    margin-bottom: 15px;
    line-height: ${theme?.font?.line};

    &:last-child {
      margin-bottom: 0;
    }

    a {
      display: flex;
      align-items: center;
      color: ${theme?.colors?.$c_white};
      transition: ${theme?.transition};

      &:hover {
        color: ${theme?.colors?.$c_orange};
      }
    }

    svg {
      path {
        fill: ${theme?.colors?.$c_white};
      }
    }
  `}
`

export const Small = styled.small`
  ${({ theme }) => css`
    font-weight: ${theme?.font?.light};
    font-size: ${theme?.font?.sizes?.xsmall};
    display: flex;
    align-items: center;

    a {
      color: ${theme?.colors?.$c_white};
      transition: ${theme?.transition};
      font-weight: bold;
      font-size: ${theme?.font?.sizes?.xsmall};
      margin-left: 5px;
      text-decoration: underline;
    }
  `}
`
