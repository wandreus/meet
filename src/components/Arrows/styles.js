import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    width: 55px;
    height: 55px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.border.radius};
    border: none;
    appearance: none;
    cursor: pointer;
    outline: none;
    transition: ${theme.transition};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);

    &[data-direction='right'] {
      svg {
        transform: rotate(180deg);
      }
    }

    svg {
      path {
        transition: ${theme.transition};
        fill: ${theme.colors.$c_blue};
      }
    }

    &:hover {
      background: ${theme.colors.$c_orange};
      svg {
        path {
          fill: #fff;
        }
      }
    }
  `}
`

export const Light = styled.button`
  ${({ theme }) => css`
    border: none;
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;

    svg {
      path {
        transition: ${theme.transition};
        fill: ${theme.colors.$c_blue};
      }
    }

    &:hover {
      svg {
        path {
          fill: ${theme.colors.$c_orange};
        }
      }
    }

    &[data-direction='right'] {
      svg {
        transform: rotate(180deg);
      }
    }
  `}
`
