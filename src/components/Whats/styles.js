import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  position: absolute;
  right: 10px;
  bottom: 25%;
  cursor: pointer;
  display: flex;
  max-width: 41px;
  justify-content: flex-end;

  @media (max-width: 900px) {
    bottom: 10%;
  }

  &:hover {
    > div {
      opacity: 1;
    }
  }

  svg {
    min-width: 41px;
  }
`

export const Ballon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    opacity: 0;
    transition: ${theme.transition};
    pointer-events: none;

    &:before {
      margin-right: 5px;
      height: 40px;
      content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAAoCAYAAABEvpD+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgB7d3PUcJAFMfx3c0kwM0OhAq0BKhAS8AKtAOgAqUCsQOtAEugA7EDbjD8mfUtDhc0gSN57/uZCbuT3dx+7LzAJOvdkc1m05XmLsZ4L23bAZdplo7dbjdqtVrzcy/yh44E/Gq73Q6kfXJAjXjvh3mej86amz5S2GVln0r31gH1NCmK4uHUpJA+0sruCDvqrS+L9vOpSX65XLazLPtygAJS03eqavogYR84QIkQQr9y3FHKQBG5gb2rGifw0OaqajA4QBcCD1MIPHBA4GEKgYcpBB6mEHiYQuBhCoGHOjHG67IxAg9TCDxMIfAwhcDDFAIPUwg8TCHwMIXAQ53VatUpGyPwMIXAQx3vfeljqwQe6oQQSh/k9uv1OjpAmbL307DCQ6Usy17/O0/goVVXqpc/oaekgXZzKW96h/KGwMOKiWR9nAKfXqTadoABqYb/cIB+n6m0Sa/L7sod7dQBOizkmMUYF/IH1LeEfNZsNt+ln87/7gAiZc2LNI8OqDkJ+qjRaAzLxtnyBprMi6LoVE3Y/w6flvs8z3vSHTugntKOfr1Tk/zxibQFTghhKF+CG8eKj8u2r9fleJOVfXLOBT+eg4s4D4mm4wAAAABJRU5ErkJggg==');
    }

    &:after {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.$c_black};
      content: 'Fale conosco pelo WhatsApp';
      position: absolute;
      left: 0;
      right: 12px;
      text-align: center;
    }
  `};
`
