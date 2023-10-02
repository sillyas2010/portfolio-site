import React from 'react'
import * as S from './styled'

const IconWrapper = ({
  children,
  faIcon,
  icon,
  ...rest
}: S.StyledIconWrapper) => {
  return (
    <S.IconWrapper {...rest}>
      {faIcon ? <S.FaIconWrapper icon={faIcon} /> : icon || children}
    </S.IconWrapper>
  )
}

export default IconWrapper
