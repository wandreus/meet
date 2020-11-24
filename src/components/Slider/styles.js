import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;

  .arrow {
    position: absolute;
    top: calc(50% - 27.5px);
    z-index: 1;

    @media (max-width: 680px) {
      display: none;
    }

    &[data-direction='left'] {
      left: 50px;
    }

    &[data-direction='right'] {
      right: 50px;
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 680px) {
    .mobile {
      display: block;
    }
    .desk {
      display: none;
    }
    width: 100%;
  }
  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`
