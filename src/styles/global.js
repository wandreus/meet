import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
    }

    ul {
      margin: 0;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    .slick {
      &-dots {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        display: flex !important;
        justify-content: center;
        align-items: center;

        button {
          opacity: 0;
          appearance: none;
          cursor: pointer;
        }

        li {
          width: 10px;
          height: 10px;
          background: ${theme.colors.$c_blue};
          border: 1px solid #fff;
          border-radius: 10px;
          margin: 0 3px;
          transition: ${theme.colors.transition};
          cursor: pointer;

          &.slick-active {
            background: #fff;
            border: 1px solid ${theme.colors.$c_blue};
          }
        }
      }
    }
  `}
`

export default GlobalStyles
