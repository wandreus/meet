import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;

  .arrow {
    position: absolute;
    top: calc(50% - 27.5px);
    z-index: 1;

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
`
