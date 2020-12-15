import { palestrantes } from '../../public/palestrantes.json'

import Main from 'components/Main'
import Template from 'templates/MestreDeCerimonia'

export async function getStaticProps() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, banner, themes] = palestrantes
  const format = items
    .map((item) => {
      const theme = item?.theme?.split(',') || []
      return { ...item, theme }
    })
    .sort((a, b) => a?.name - b?.name)

  const Speakers = format?.filter(({ type }) => type == 'Mestres de Cerimônias')
  const spotlight = Speakers?.filter(({ spotlight }) => spotlight == 'yes')

  return {
    props: {
      Speakers,
      spotlight,
      themes
    }
  }
}

export default function MasterPage(props) {
  return (
    <Main>
      <Template {...props} />
    </Main>
  )
}
