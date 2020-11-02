import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ item }) => {
  const speake = `/palestrantes/${item?.url}`
  const master = `/mestres-de-cerimonias/${item?.url}`
  const url = item?.type == 'Palestrante' ? speake : master

  return (
    <S.Wrapper>
      <S.Img>
        <Link href={url}>
          <S.Link>
            <Image
              src={item?.img}
              width={245}
              height={286}
              alt={item?.name}
              unoptimized
            />
          </S.Link>
        </Link>
        <S.Titulo>{item?.name}</S.Titulo>
      </S.Img>
      <S.Figcaption>
        <S.Text>{item?.short_description}</S.Text>
        <Link href={url}>
          <S.Link>
            Saiba Mais
            <svg width="8" height="9">
              <path d="M4 0L3.295 0.793125L6.085 3.9375H0V5.0625H6.085L3.295 8.20687L4 9L8 4.5L4 0Z" />
            </svg>
          </S.Link>
        </Link>
      </S.Figcaption>
    </S.Wrapper>
  )
}

export default Card
