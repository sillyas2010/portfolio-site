import React from 'react'
import * as S from './styled'

export default function Typewriter({ text = '', ...props }) {
  return (
    <S.Typewriter {...props} $text={text}>
      {text}
    </S.Typewriter>
  )
}
