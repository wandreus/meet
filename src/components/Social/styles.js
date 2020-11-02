import styled, { css } from 'styled-components'

export const Ul = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      list-style: none;
      padding: 0 7px;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    a {
      display: block;

      &:hover {
        svg {
          path {
            fill: transparent;
            stroke-width: 2;
            stroke: ${theme.colors.$c_orange};
            stroke-dasharray: 1560;
            stroke-dashoffset: 1560;
            animation: animate-brand 0.8s linear forwards;

            @keyframes animate-brand {
              0% {
                stroke-dashoffset: 1560;
              }
              40% {
                stroke-dashoffset: 1500;
              }
              60% {
                stroke-dashoffset: 1460;
                stroke-width: 1;
                fill: transparent;
              }
              100% {
                stroke-dashoffset: 1400;
                fill: ${theme.colors.$c_orange};
                stroke-width: 0;
              }
            }
          }
        }
      }
    }

    svg {
      path {
        transition: ${theme.transition};
        fill: ${theme.colors.$c_black};
      }
    }
  `}
`
