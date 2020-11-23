import Breadcrumb from '.'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  args: {
    links: 'Home,Category,Profile'
  }
}

export const Default = ({ links }) => {
  const arrayLink = links.split(',')?.map((item, i) => <a key={i}>{item}</a>)
  return <Breadcrumb>{arrayLink}</Breadcrumb>
}
