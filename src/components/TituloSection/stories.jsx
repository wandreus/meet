import TituloSection from '.'

export default {
  title: 'Title Section',
  component: TituloSection,
  args: {
    Label: 'Text your title'
  }
}

export const Default = ({ Label }) => <TituloSection>{Label}</TituloSection>
