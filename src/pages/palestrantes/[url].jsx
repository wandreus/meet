import { palestrantes } from '../../../public/palestrantes.json'
import Main from '../../components/Main'

export async function getStaticProps({ params: { url } }) {
  const palestrante = palestrantes[0].filter((item) => item.url == url)

  return {
    props: {
      palestrante
    }
  }
}

export async function getStaticPaths() {
  const paths = palestrantes[0].map((item) => ({
    params: { url: item.url }
  }))
  return { paths, fallback: false }
}

export default function mestres({
  palestrante: [{ name, short_description, bio }]
}) {
  return (
    <Main>
      <h1>
        Olá eu sou o {name}
        <br />
      </h1>
      <span>Essas são algumas das minhas Competencias {short_description}</span>
      <p>{bio}</p>
    </Main>
  )
}
