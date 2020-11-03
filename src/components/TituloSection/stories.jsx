import TituloSection from '.'

export default {
  title: 'TituloSection',
  component: TituloSection,
  args: {
    children: 'Texto'
  }
}

export const Default = (args) => <TituloSection>{args.children}</TituloSection>
Default.args = {
  children: 'title basic'
}
