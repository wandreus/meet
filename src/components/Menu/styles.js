import styled, { css } from 'styled-components'

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Li = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    a {
      font-size: 15px;
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.$c_black};
      text-decoration: none;
      transition: ${theme.transition};

      &:hover {
        color: ${theme.colors.$c_orange};
      }
    }
  `}
`
