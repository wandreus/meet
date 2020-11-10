import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > figure {
    margin-bottom: 45px;

    @media (max-width: 900px) {
      width: 100%;
      max-width: 49%;
      margin-bottom: 2%;
    }
  }

  &:empty {
    padding: 50px;

    &:after {
      text-align: center;
      width: 100%;
      content: 'Nenhum resultado para sua combinação';
      display: block;
    }
  }

  @media (max-width: 900px) {
    padding-bottom: 30px;
  }
`

export const filtro = styled.ul`
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const item = styled.li`
  ${({ theme }) => css`
    margin: 0 10px 10px 0;
    display: flex;

    &:last-child {
      padding-right: 0;
    }

    input {
      opacity: 0;
      width: 0;
      height: 0;
      pointer-events: none;

      &:checked + label {
        &::after {
          background: ${theme.colors.$c_orange};
          content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgBjY9hDQAhCIW1wUUwwjW7i2ADI2gDoxiBCEbAx4b/RGX7poNve+DdRTHzh8efpAdk0MG7EwNogOQ/mxGkhUgqB3MgcRpbZA0rkhSp6C6OqeC3nAE6d2wXxHZHkwAAAABJRU5ErkJggg==');
        }
      }
    }
  `}
`

export const Button = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.$c_black};
    text-transform: uppercase;
    background: ${theme.colors.$c_white};
    border: ${theme.border.solid};
    border-radius: ${theme.border.radius};
    padding: 5px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &::after {
      content: '';
      transition: ${theme.transition};
      border-radius: ${theme.border.radius};
      background: #e8e7e7;
      width: 17px;
      height: 17px;
      margin-left: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`

export const More = styled.i`
  ${({ theme }) => css`
    transition: ${theme.transition};
    color: ${theme.colors.$c_white};
    text-transform: uppercase;
    background: ${theme.colors.$c_blue};
    border: ${theme.border.solid};
    border-radius: ${theme.border.radius};
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 10px 10px 0;
    font-style: normal;
    font-weight: ${theme.font.bold};

    &:hover {
      background: ${theme.colors.$c_orange};
    }
  `}
`
