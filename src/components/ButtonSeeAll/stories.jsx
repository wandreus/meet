import ButtonSeeAll from '.'

export default {
  title: 'Button section',
  component: ButtonSeeAll,
  args: {
    label: 'Label'
  }
}

export const Default = ({ label }) => <ButtonSeeAll>{label}</ButtonSeeAll>
