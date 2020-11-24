import styled, { css } from 'styled-components'

export const Text = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.$c_black};
    padding: 15px 40px;
    padding-right: 15px;
    background: ${theme.colors.$c_background};
    border: ${theme.border.solid};
    border-radius: ${theme.border.radius};

    &::placeholder {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.$c_black};
    }
  `}
`

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.$c_black};
    padding: 15px 40px;
    padding-right: 15px;
    background: ${theme.colors.$c_background};
    border: ${theme.border.solid};
    border-radius: ${theme.border.radius};
    min-height: 150px;

    &::placeholder {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.$c_black};
    }
  `}
`
