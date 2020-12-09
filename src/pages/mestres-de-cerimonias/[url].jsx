import { palestrantes } from '../../../public/palestrantes.json'
import Main from 'components/Main'
import Template from 'templates/Page'

const [speakers] = palestrantes

export async function getStaticPaths() {
  const paths = speakers.map(({ url }) => ({
    params: { url }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { url } }) {
  const Profile = speakers.filter((res) => res?.url == url)

  const [palestrante] = Profile.map((item) => {
    const regex = /^https:\/\/(www.)?youtu[\\.]?be(\.com)?\/(watch\?v=)?(\w+)/gim
    const video = item?.video?.replace(regex, (...props) => props[4]) || null
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

export default function Page(props) {
  return (
    <Main>
      <Template {...props} />
    </Main>
  )
}
