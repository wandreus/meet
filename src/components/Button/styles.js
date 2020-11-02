import styled, { css } from 'styled-components'

export const Primary = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.$c_blue};
    color: ${theme.colors.$c_white};
    display: flex;
    justify-content: center;
    border: none;
    appearance: none;
    align-items: center;
    padding: 10px 20px;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semibold};
    cursor: pointer;
    line-height: 23px;
    transition: ${theme.transition};

    &:hover {
      background: ${theme.colors.$c_orange};
    }
  `}
`

export const Contact = styled(Primary)`
  ${({ theme }) => css`
    justify-content: space-between;

    svg {
      margin-left: 10px;

      path {
        fill: ${theme.colors.$c_white};
      }
    }
  `}
`

export const Small = styled(Primary)``
