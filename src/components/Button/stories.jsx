import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    Label: 'Button Label'
  }
}

export const Default = ({ Label }) => <Button>{Label}</Button>

export const Contact = ({ Label }) => <Button Contact>{Label}</Button>

export const Small = ({ Label }) => <Button Small>{Label}</Button>
