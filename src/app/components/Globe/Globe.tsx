import React from 'react'
import * as S from './styled'

const Globe = () => {
  return (
    <S.Globe>
      <S.Sphere />
      <S.OuterShadow />
      <S.WorldMap>
        <S.WorldMapBack />
        <S.WorldMapFront />
      </S.WorldMap>
      <S.InnerShadow />
    </S.Globe>
  )
}

export default Globe
