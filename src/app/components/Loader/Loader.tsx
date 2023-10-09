import React from 'react'
import * as S from './styled'

export default function Loader({
  $isLoaded = false,
  $isContentVisible = true,
  $spinnerSize = 1,
  $hasBackdrop = false,
}: S.StyledLoader) {
  return (
    <S.Loader
      $isLoaded={$isLoaded}
      $hasBackdrop={$hasBackdrop}
      $isContentVisible={$isContentVisible}
    >
      <S.Spinner>
        <S.React $spinnerSize={$spinnerSize}>
          <S.Nucleus />
        </S.React>
      </S.Spinner>
    </S.Loader>
  )
}
