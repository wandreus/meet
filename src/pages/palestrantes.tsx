import Link from 'next/link'
import { palestrantes } from '../../public/palestrantes.json'

export async function getStaticProps() {
  return {
    props: {
      palestrantes
    }
  }
}

type Prop = {
  palestrantes: []
}
export default function palestrantesPage({ palestrantes }: Prop) {
  return (
    <ul>
      {palestrantes.map(({ name, url }, i: number) => {
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
