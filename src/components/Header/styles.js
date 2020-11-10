import styled, { css } from 'styled-components'

export const Header = styled.header`
  padding: 5px 0;
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;
  z-index: 2;

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
      top: 0;
      padding: 10px;
      background: ${theme.colors.$c_white};
      overflow: hidden;
      max-height: 69px;
      transition: ${theme.transition};
      box-shadow: 0px transparent;

      &.js-open {
        max-height: 300px;
        box-shadow: ${theme.shadow};

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
