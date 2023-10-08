import React from 'react'
import * as S from './styled'

export default function SectionTitle({ title = '', description = '' }) {
  return (
    <S.SectionTitle>
      <S.Title>{title}</S.Title>
      {!!description && <S.Description>- {description} -</S.Description>}
    </S.SectionTitle>
  )
}
