import Shelf from '.'
import { palestrantes } from '../../../public/palestrantes.json'

export default {
  title: 'Carousel Speakers',
  component: Shelf
}

export const Default = () => (
  <Shelf list={palestrantes[0].slice(0, 6)} base="#" />
)
