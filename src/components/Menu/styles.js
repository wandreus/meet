import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  margin: auto;

  @media (max-width: 900px) {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: ${({ theme }) => theme.border.solid};
  }
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Li = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;

    @media (max-width: 900px) {
      padding: 10px 0;
    }

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
