import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`

export const Header = styled.div`
  text-align: center;
  margin-top: 35px;
  margin-bottom: 35px;
  h3 {
    text-transform: uppercase;
    margin-top: 10px;
  }
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 40px;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 900px) {
    justify-content: center;
    padding: 20px 0 40px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 535px;

  input,
  textarea {
    margin-bottom: 15px;

    &[type='text'] {
      max-width: calc(50% - 7.5px);
    }
  }

  button {
    margin-left: auto;
    margin-bottom: 20px;

    @media (max-width: 900px) {
      margin: 0 auto 50px;
    }
  }
`

export const Title = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.line};
    font-weight: ${theme.font.bold};
    margin-bottom: 15px;
    text-transform: uppercase;
  `}
`

export const Info = styled.div`
  max-width: 400px;
  @media (max-width: 900px) {
    text-align: center;
  }
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.$c_black};
    margin-bottom: 15px;
  `}
`

export const Contact = styled.div`
  text-align: left;

  @media (max-width: 900px) {
    text-align: center;
  }

  svg {
    margin-right: 10px;
  }
`

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme?.font?.sizes?.large};
  text-transform: uppercase;
  padding-top: 15px;
  margin-bottom: 15px;

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

    &:last-child {
      margin-bottom: 0;
    }

    a {
      display: flex;
      align-items: center;
      color: ${theme?.colors?.$c_black};
      transition: ${theme?.transition};

      &:hover {
        color: ${theme?.colors?.$c_orange};
      }
    }

    @media (max-width: 900px) {
      justify-content: center;
    }

    svg {
      path {
        fill: ${theme?.colors?.$c_black};
      }
    }
  `}
`
