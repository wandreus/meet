import React, { useState } from 'react'

import * as S from './styles'

function Input(props) {
  const Text = <S.Text {...props} />

  const Textarea = <S.Textarea {...props} />

  const templates = {
    Text,
    Textarea
  }

  const [name] = Object.keys(props).filter((item) => templates[item])

  return templates[name] ? templates[name] : templates['Text']
}

export default Input
