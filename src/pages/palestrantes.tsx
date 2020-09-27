import Link from 'next/link'
import { palestrantes } from '../../public/palestrantes.json'

export async function getStaticProps() {
  return {
    props: {
      palestrantes
    }
  }
}

export default function palestrantesPage({ palestrantes }) {
  type Props = {
    url: string
    name: string
    short_description: string
  }

  return (
    <ul>
      {palestrantes.map(({ name, url }: Props, i: number) => {
        return (
          <li key={i}>
            <Link href={`/palestrantes/${url}`}>
              <a>{name}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
