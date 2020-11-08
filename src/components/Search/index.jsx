import React, { useState } from 'react'
import * as S from './styles'
import Result from './result'

const Search = ({ list }) => {
  const [useList] = useState(list)
  const [useFilter, setFilter] = useState([])
  const [useValue, setValue] = useState('')

  const filterResult = (value) => {
    setValue(value)
    const regex = new RegExp(value, 'gmi')
    const filter = useList.filter(({ name }) => regex.test(name)).slice(0, 3)
    value.length ? setFilter(filter) : setFilter([])
  }

  const clearFilter = () => {
    setFilter([])
    setValue([])
  }

  return (
    <S.Wrapper>
      <S.Search
        value={useValue}
        placeholder="Digite o nome"
        onChange={({ currentTarget: { value } }) => filterResult(value)}
      />
      {useFilter.length ? (
        <S.Clear onClick={() => clearFilter()}>Limpar filtro (X)</S.Clear>
      ) : (
        <S.Icon>
          <path d="M18.2391 16.673H19.4365L27 24.2516L24.7416 26.51L17.163 18.9466V17.7491L16.7537 17.3247C15.0258 18.8101 12.7825 19.7044 10.3422 19.7044C4.90075 19.7044 0.48999 15.2937 0.48999 9.85221C0.48999 4.41076 4.90075 0 10.3422 0C15.7836 0 20.1944 4.41076 20.1944 9.85221C20.1944 12.2925 19.3001 14.5358 17.8147 16.2637L18.2391 16.673ZM3.52144 9.85219C3.52144 13.6263 6.56805 16.6729 10.3422 16.6729C14.1164 16.6729 17.163 13.6263 17.163 9.85219C17.163 6.07803 14.1164 3.03143 10.3422 3.03143C6.56805 3.03143 3.52144 6.07803 3.52144 9.85219Z" />
        </S.Icon>
      )}
      <S.Result>
        <Result list={useFilter} />
      </S.Result>
    </S.Wrapper>
  )
}
export default Search
