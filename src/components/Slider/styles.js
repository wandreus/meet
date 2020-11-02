import styled from 'styled-components'

export const Wrapper = styled.div`
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
`
