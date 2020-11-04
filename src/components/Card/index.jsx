import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ item }) => {
  const speake = `/palestrantes/${item?.url}`
  const master = `/mestres-de-cerimonias/${item?.url}`
  const url = item?.type == 'Palestrante' ? speake : master

  return (
    <S.Wrapper itemScope itemtype="http://microformats.org/profile/hcard">
      <S.Img>
        <Link href={url}>
          <S.Link itemProp="url">
            <Image
              src={item?.img}
              width={245}
              height={286}
              alt={item?.name}
              title={item?.name}
              itemProp="photo"
              unoptimized
            />
          </S.Link>
        </Link>
        <S.Titulo itemProp="name">{item?.name}</S.Titulo>
      </S.Img>
      <S.Figcaption>
        <S.Text itemProp="desc">{item?.short_description}</S.Text>
        <Link href={url}>
          <S.Link itemProp="url">
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
