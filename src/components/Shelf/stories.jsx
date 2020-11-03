import Shelf from '.'
import { palestrantes } from '../../../public/palestrantes.json'

export default {
  title: 'Shelf',
  component: Shelf
}

export const Default = () => (
  <Shelf list={palestrantes[0].slice(0, 6)} base="#" />
)
