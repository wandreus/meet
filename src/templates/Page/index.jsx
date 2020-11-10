import * as S from './styles'
import Link from 'next/link'
import Container from 'components/Container'
import HeadingPage from 'components/HeadingPage'
import Titulo from 'components/Heading'
import Avatar from 'components/Avatar'
import Button from 'components/Button'

const PageTemplate = ({ palestrante }) => {
  const [
    { name, bio, video, theme, img, short_description, type, bread }
  ] = palestrante
  return (
    <S.Wrapper>
      <Container>
        <HeadingPage
          breadcrumb={
            <>
              <a href="/">home</a>
              <a href={bread}>{type}</a>
            </>
          }
        />
        <Titulo H1>{name}</Titulo>
        <S.Body>
          <S.ColumnLeft>
            <S.Bio>{bio}</S.Bio>
            <S.Theme>
              <Titulo H2>TEMAS:</Titulo>
              {theme}
            </S.Theme>
            <S.VideoPlay
              width="100%"
              height="435"
              src={`https://www.youtube.com/embed/${video}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; sameorigin;"
              allowFullScreen
            ></S.VideoPlay>
          </S.ColumnLeft>
          <S.ColumnRight>
            <Avatar src={img} unsized unoptimized />
            <Titulo H3>{short_description}</Titulo>
            <Link href={`/contato/?profile=${name}`}>
              <a title={name}>
                <Button title={name} Contact>
                  Entre em contato conosco
                </Button>
              </a>
            </Link>
          </S.ColumnRight>
        </S.Body>
      </Container>
    </S.Wrapper>
  )
}

export default PageTemplate
