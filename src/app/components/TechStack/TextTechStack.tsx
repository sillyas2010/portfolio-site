import Link from '@/app/components/Link'
import { Tech, general, libraries, tools } from '@/app/constants/techStack'
import React from 'react'
import * as S from './styled'

const listRender = (items: Tech[]) => (
  <S.List>
    {items.map(({ title, link }) => (
      <S.ListItem key={`${title}_${link}`}>
        <Link
          target={link ? '_blank' : undefined}
          title={title}
          href={link || '#'}
        >
          {title}
        </Link>
      </S.ListItem>
    ))}
  </S.List>
)

export default function TextTechStack() {
  return (
    <S.Content>
      <S.CategoriesWrapper>
        <S.CategoryWrapper>
          <S.TextLeft>
            <S.CategoryTitle>General:</S.CategoryTitle>
            {listRender(general)}
          </S.TextLeft>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <S.TextCenter>
            <S.CategoryTitle>Additional:</S.CategoryTitle>
            {listRender(libraries)}
          </S.TextCenter>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <S.TextRight>
            <S.CategoryTitle>Tools:</S.CategoryTitle>
            {listRender(tools)}
          </S.TextRight>
        </S.CategoryWrapper>
      </S.CategoriesWrapper>
    </S.Content>
  )
}
