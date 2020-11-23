import Card from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    name: 'Nome Palestrante',
    short_description:
      'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos'
  }
}

export const Default = ({ name, short_description }) => {
  const list = {
    name,
    short_description,
    img: 'https://via.placeholder.com/245x286',
    url: 'nome-palestrante-01',
    type: 'Palestrante'
  }
  return <Card item={list} />
}
