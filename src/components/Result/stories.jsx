import Result from '.'
import { palestrantes } from '../../../public/palestrantes.json'

export default {
  title: 'Filter Speakers',
  component: Result
}

export const Default = () => {
  const [item, banner, themes] = palestrantes
  const Speakers = item
    .map((item) => {
      const theme = item.theme.split(',')
      return { ...item, theme }
    })
    .sort((a, b) => a?.name - b?.name)

  return <Result list={{ Speakers, themes }} />
}
