import Search from '.'
import { palestrantes } from '../../../public/palestrantes.json'

export default {
  title: 'Search',
  component: Search
}

export const Default = () => {
  const [item] = palestrantes
  const Speakers = item.map((item) => {
    const theme = item.theme.split(',')
    return { ...item, theme }
  })
  return <Search list={Speakers} />
}
