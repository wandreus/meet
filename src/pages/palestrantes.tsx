import Link from 'next/link'
import { palestrantes } from '../../public/palestrantes.json'

export async function getStaticProps() {
  const prop = palestrantes.filter(({ type }) =>
    type.find((element) => element === 'palestrante')
  )
  return {
    props: {
      prop
    }
  }
}

type Prop = {
  prop: []
}

export default function palestrantesPage({ prop }: Prop) {
  return (
    <ul>
      {prop.map(({ name, url }, i: number) => {
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
