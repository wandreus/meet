import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  figure {
    margin: 5px auto;
  }

  .arrow {
    position: absolute;
    top: calc(40% - 15px);
    z-index: 1;

    @media (max-width: 900px) {
      display: none;
    }

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
`

export const SeeAll = styled.div`
  padding-top: 40px;
`
