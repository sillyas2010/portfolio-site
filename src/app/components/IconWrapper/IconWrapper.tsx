import React from 'react'
import * as S from './styled'

const IconWrapper = ({ children, icon, ...rest }: S.StyledIconWrapper) => {
  return <S.IconWrapper {...rest}>{icon || children}</S.IconWrapper>
}

export default IconWrapper
