import { useState } from 'react'
import * as S from './styles'
import Card from '../Card'
import ButtonAll from '../ButtonSeeAll'

const Result = ({ list: { Speakers, themes } }) => {
  const [useResult, setResult] = useState(Speakers.slice(0, 12))
  const [useTheme, setTheme] = useState(themes.slice(0, 10))
  const [useShowTheme, setShowTheme] = useState(themes.length > 10)

  const viewMore = (e) => {
    e.preventDefault()

    setResult((use) => {
      return [
        ...use,
        ...Speakers.slice(useResult.length, useResult.length + 12)
      ].sort((a, b) => a?.name - b?.name)
    })
  }

  const viewMoreTheme = () => {
    setTheme(themes)
    setShowTheme((use) => !use)
  }

  const filterTheme = (currentTarget) => {
    const { value } = currentTarget

    if (currentTarget.checked == false) return setResult(Speakers.slice(0, 12))

    setResult((use) => {
      return use
        .filter(({ theme }) => {
          return theme.find((item) => item.trim() == value)?.length
        })
        .sort((a, b) => a?.name - b?.name)
    })
  }

  const showButton =
    Speakers.length > 12 &&
    useResult.length >= 12 &&
    useResult.length != Speakers.length

  return (
    <>
      <S.filtro>
        {useTheme.map(({ THEME }, i) => (
          <S.item key={i}>
            <input
              type="checkbox"
              name="filter"
              defaultValue={THEME}
              id={i}
              onChange={({ currentTarget }) => filterTheme(currentTarget)}
            />
            <S.Button htmlFor={i}>{THEME}</S.Button>
          </S.item>
        ))}
        {useShowTheme && <S.More onClick={() => viewMoreTheme()}>VER +</S.More>}
      </S.filtro>
      <S.Wrapper>
        {useResult.map((item, key) => (
          <Card item={item} key={key} />
        ))}
      </S.Wrapper>
      {showButton && (
        <ButtonAll callback={(e) => viewMore(e)}>ver todos</ButtonAll>
      )}
    </>
  )
}

export default Result
