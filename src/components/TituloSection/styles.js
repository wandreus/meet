import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Titulo = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.$c_black};
    display: flex;
    justify-content: center;
    align-items: center;

    &:before,
    &:after {
      content: '';
      background: rgba(29, 18, 16, 0.5);
      border-radius: 2px;
      height: 2px;
      width: 165px;
      flex: 1 0 auto;
    }

    &:before {
      margin-right: 50px;
    }

    &:after {
      margin-left: 50px;
    }
  `}
`
