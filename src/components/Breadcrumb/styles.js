import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0 5px;

    a {
      text-transform: uppercase;
      color: ${theme?.colors?.$c_black};
      font-size: ${theme?.font?.sizes?.xsmall};
      margin: 0 3px;
      transition: ${theme?.transition};
      text-decoration: underline;

      &:hover {
        color: ${theme?.colors?.$c_orange};
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;

        &::after {
          display: none;
        }
      }

      &::after {
        content: '/';
        margin-left: 6px;
      }
    }
  `}
`
