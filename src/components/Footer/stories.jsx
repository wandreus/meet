import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    about: 'Nossos Contatos',
    email: 'comercial@meetpalestras.com.br',
    phone: '+55 11 5050-8080 | +55 11 6060-9090',
    bio:
      'Lorem Ipsum é simplesmente uma simulação de texto da indústria Lorem Ipsum é simplesmente.',
    social: 'redes sociais'
  }
}

export const Default = (args) => <Footer {...args} />
