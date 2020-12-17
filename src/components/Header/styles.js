import styled, { css } from 'styled-components'

export const Header = styled.header`
  padding: 5px 0;
  box-shadow: ${({ theme }) => theme.shadow};
  background: ${({ theme }) => theme.colors.$c_white};
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 900px) {
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`

export const ContainerNav = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    @media (max-width: 900px) {
      flex-direction: column;
      position: absolute;
      right: 0;
      width: 100vw;
      top: 0;
      padding: 10px;
      background: ${theme.colors.$c_white};
      overflow: hidden;
      max-height: 69px;
      min-height: 0vh;
      transition: ${theme.transition};
      box-shadow: 0px transparent;
      border-bottom: 4px solid transparent;

      nav {
        padding-top: 15px;
      }

      &.js-open {
        min-height: 75vh;
        box-shadow: ${theme.shadow};
        border-bottom: 4px solid ${theme.colors.$c_blue};

        .icon {
          background: transparent;
          &:after,
          &:before {
            margin: 0;
          }

          &:after {
            transform: rotate(45deg);
          }

          &:before {
            transform: rotate(-45deg);
          }
        }
      }

      > ul {
        @media (max-width: 900px) {
          flex-wrap: wrap;
          max-width: 160px;
          justify-content: flex-start;

          &:before {
            width: 100%;
            content: 'redes sociais';
            color: ${theme.colors.$c_black};
            font-size: ${theme.font.sizes.large};
            font-weight: ${theme.font.bold};
            display: block;
            text-transform: uppercase;
            margin-bottom: 15px;
          }
        }
      }
    }
  `}
`

const themeIcon = ({ theme }) => css`
  width: 50px;
  min-height: 6px;
  transition: ${theme.transition};
  border-radius: 1px;
  background: ${theme.colors.$c_black};
  display: block;
  content: '';
`

export const Icon = styled.div`
  display: none;

  @media (max-width: 900px) {
    transition: ${({ theme }) => theme.transition};
    position: relative;
    margin: 22px 0;
    margin-left: auto;
    cursor: pointer;

    ${themeIcon}

    &:before {
      ${themeIcon}
      position:absolute;
      margin-top: -12px;
    }

    &:after {
      position: absolute;
      margin-top: 12px;
      ${themeIcon}
    }
  }
`
