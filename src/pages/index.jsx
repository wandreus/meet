import Main from '../components/Main'
import Home from '../templates/Home'
import { palestrantes } from '../../public/palestrantes.json'

export async function getStaticProps() {
  const Speakers = palestrantes[0]?.filter(
    ({ type, spotlight }) => type == 'Palestrante' && spotlight == 'yes'
  )
  const Master = palestrantes[0]?.filter(
    ({ type, spotlight }) =>
      type == 'Mestres de Cerimônias' && spotlight == 'yes'
  )

  return {
    props: {
      Speakers,
      Master
    }
  }
}
export default function Index({ Speakers, Master }) {
  return (
    <Main>
      <Home prop={{ Speakers, Master }} />
    </Main>
  )
}
