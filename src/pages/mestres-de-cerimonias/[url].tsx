import { palestrantes } from '../../../public/palestrantes.json'

export async function getStaticProps({ params: { url = '#' } }) {
  const palestrante = palestrantes.filter((item) => item.url == url)

  return {
    props: {
      palestrante
    }
  }
}

export async function getStaticPaths() {
  const paths = palestrantes.map((item) => ({
    params: { url: item.url }
  }))
  return { paths, fallback: false }
}

export default function mestres({
  palestrante: [{ name = '#', short_description = '#' }]
}) {
  return (
    <h1>
      Olá eu sou o {name}
      <br />
      Essas são algumas das minhas Competencias {short_description}
    </h1>
  )
}
