import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    figure {
      margin: 5px auto;
    }

    .arrow {
      position: absolute;
      top: calc(40% - 15px);
      z-index: 1;

      &[data-direction='left'] {
        left: 0;
      }

      &[data-direction='right'] {
        right: 0;
      }
    }

    .slick-dots {
      padding: 40px 0 0;
    }
  `}
`

export const SeeAll = styled.div`
  padding-top: 40px;
`
