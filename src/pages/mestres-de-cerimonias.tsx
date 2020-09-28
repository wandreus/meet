import Link from 'next/link'
import { palestrantes } from '../../public/palestrantes.json'

export async function getStaticProps() {
  const prop = palestrantes.filter(({ type }) =>
    type.find((element) => element === 'mestre')
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

export default function mestrePage({ prop }: Prop) {
  return (
    <ul>
      {prop.map(({ name, url }, i: number) => {
        return (
          <li key={i}>
            <Link href={`/mestres-de-cerimonias/${url}`}>
              <a>{name}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
