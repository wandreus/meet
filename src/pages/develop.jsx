import styled from 'styled-components'

const Box = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.$c_blue};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`

const Title = styled.h1`
  font-size: 50px;
  margin-top: 5px;
`

const Phones = styled.ul`
  display: flex;
  justify-content: space-around;

  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 5px;
  }
`

export default function dev() {
  return (
    <Box>
      <img src="/img/logo-azul.png" />
      <Title>Site em Desenvolvimento</Title>
      <Phones>
        <li>+55 11 97227-9606 | 11 99839-6847</li>
        <li>+55 11 2359-9998 | 11 3097-0688</li>
      </Phones>
    </Box>
  )
}
