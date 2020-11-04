import { palestrantes } from '../../public/palestrantes.json'

import Main from '../components/Main'
import Template from '../templates/Home'

export async function getStaticProps() {
  const [items, banners] = palestrantes

  const reduce = (name) => {
    return items?.filter((res) => res?.type == name && res?.spotlight == 'yes')
  }

  const Speakers = reduce('Palestrante').slice(0, 10)
  const Master = reduce('Mestres de Cerimônias').slice(0, 10)

  return {
    props: {
      Speakers,
      Master,
      banners
    }
  }
}

export default function Home(props) {
  return (
    <Main>
      <Template {...props} />
    </Main>
  )
}
