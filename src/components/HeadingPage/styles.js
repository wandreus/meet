import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  border-bottom: 1px solid rgba(29, 18, 16, 0.1);
  padding-right: 15px;
  h1 {
    margin: 5px 0 10px;
  }

  @media (max-width: 900px) {
    padding-left: 10px;
  }
`
