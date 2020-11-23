import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    label: 'Heading'
  }
}

export const H1 = ({ label }) => <Heading H1>{label}</Heading>

export const H2 = ({ label }) => <Heading H2>{label}</Heading>

export const H3 = ({ label }) => <Heading H3>{label}</Heading>

export const H4 = ({ label }) => <Heading H4>{label}</Heading>
