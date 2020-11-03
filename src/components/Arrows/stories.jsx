import Arrows from '.'

export default {
  title: 'Arrows',
  component: Arrows,
  args: {
    direction: 'left'
  }
}

export const Button = (args) => (
  <Arrows name="Button" data-direction={args.direction} />
)

export const Light = (args) => <Arrows data-direction={args.direction} />
