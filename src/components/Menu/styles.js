import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  margin: auto;

  @media (max-width: 900px) {
    margin-bottom: 20px;
    border-bottom: ${({ theme }) => theme.border.solid};
    width: 100%;
    margin: 0;
    display: flex;
    height: calc(100vh - 350px);
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
    padding: 40px 0;
  }
`

export const Li = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;

    @media (max-width: 900px) {
      padding: 0px;
    }

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    a {
      font-size: ${theme.font.sizes.xmedium};
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.$c_black};
      text-decoration: none;
      transition: ${theme.transition};

      @media (max-width: 900px) {
        /* font-size: ${theme.font.sizes.large}; */
      }

      &:hover {
        color: ${theme.colors.$c_orange};
      }
    }
  `}
`
