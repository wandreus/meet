import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    padding: 35px 0;
    background: ${theme?.colors?.$c_background_grad};
    color: ${theme?.colors?.$c_white};

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  `}
`

export const Contact = styled.div`
  text-align: left;
  svg {
    margin-right: 10px;
  }
`

export const Brand = styled.div`
  text-align: center;
  max-width: 270px;

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
  ul {
    margin-left: auto;
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme?.font?.sizes?.large};
  text-transform: uppercase;
  margin-bottom: 30px;
`

export const Ul = styled.ul``

export const Li = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme?.font?.sizes?.medium};
    margin-bottom: 15px;

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
    font-size: ${theme?.font?.sizes?.xsmal};
    display: flex;
    align-items: center;

    a {
      color: ${theme?.colors?.$c_white};
      transition: ${theme?.transition};
      font-weight: bold;
      font-size: ${theme?.font?.sizes?.xsmal};
      margin-left: 5px;
      text-decoration: underline;
    }
  `}
`