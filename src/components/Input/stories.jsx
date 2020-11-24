import Input from '.'

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Placeholder text'
  }
}

export const Default = ({ placeholder }) => <Input placeholder={placeholder} />

export const Textarea = ({ placeholder }) => (
  <Input placeholder={placeholder} Textarea />
)
