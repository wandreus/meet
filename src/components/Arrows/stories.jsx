import Arrows from '.'

export default {
  title: 'Arrows',
  component: Arrows,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    }
  }
}

export const Button = (argTypes) => (
  <Arrows Button data-direction={argTypes.direction} />
)

export const Light = (argTypes) => (
  <Arrows data-direction={argTypes.direction} />
)
