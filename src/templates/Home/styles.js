import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  .react-calendar {
    height: 100vh;

    &__month-view__days {
      height: calc(100vh - 88px);
    }

    &__tile {
      appearance: none;
      display: block;
      border: 1px solid white;
      border-radius: 5px;

      &--active {
        background: #786cd9;
        color: white;
      }

      abbr {
        font-size: 33px;
        color: #ff00b4;
        font-weight: bold;
      }
    }

    &__navigation {
      &__label {
        border: none;
        padding: 20px;
        font-size: 22px;
        appearance: none;
      }

      &__arrow {
        border: none;
        padding: 20px;
        font-size: 22px;
        font-weight: bold;
        appearance: none;
        color: white;
        background: #786cd9;
      }

      &__prev-button {
        margin-left: 5px;
      }

      &__next-button {
        margin-right: 5px;
      }
    }

    &__month-view__weekdays__weekday {
      text-align: center;
      font-size: 13px;
      text-transform: uppercase;
      padding: 5px 0;
    }
  }
`
