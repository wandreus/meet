import { palestrantes } from '../../../public/palestrantes.json'
import Main from '../../components/Main'
import Template from '../../templates/Page'

export async function getStaticProps({ params: { url } }) {
  const [speakers] = palestrantes
  const filter = speakers.filter((item) => item?.url == url)
  const [palestrante] = filter.map((item) => {
    const regex = /^https:\/\/(www.)?youtu[\\.]?be(\.com)?\/(watch\?v=)?(\w+)/gim
    const video = item.video?.replace(regex, ($1, $2, $3, $4, $5) => $5)
    const theme = item.theme?.split(',').map((res) => ` #${res.trim()}`)
    const bread =
      item?.type == 'Palestrante' ? '/palestrantes' : '/mestres-de-cerimonias'
    return [{ ...item, video, theme, bread }]
  })

  return {
    props: {
      palestrante
    }
  }
}

export async function getStaticPaths() {
  const [speakers] = palestrantes
  const paths = speakers.map((item) => ({
    params: { url: item.url }
  }))
  return { paths, fallback: false }
}

export default function Page(props) {
  return (
    <Main>
      <Template {...props} />
    </Main>
  )
}
