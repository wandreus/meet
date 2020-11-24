import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 40px;

  @media (max-width: 900px) {
    justify-content: space-between;
  }

  > figure {
    margin: 15px;

    @media (max-width: 900px) {
      width: 100%;
      max-width: 49%;
      margin: 0 0 2%;
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
`

export const filtro = styled.ul`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;

  @media (max-width: 900px) {
    justify-content: flex-start;
    padding-left: 0;
  }
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
