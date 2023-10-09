import tw, { styled } from 'twin.macro'

export const Link = styled.a`
  ${tw`relative text-bgDark dark:text-bgLight [&:not([aria-disabled])]:hover:text-bgLight inline-block px-0.5 z-10 transition-colors`}
  ${tw`before:z-[-1] before:content-empty before:absolute before:left-0 before:-bottom-[2px] before:w-full before:min-h-[3px] [&:not([aria-disabled])]:hover:before:min-h-[calc(100% + 3px)] [&:not([aria-disabled])]:before:bg-orange-500`}
  ${tw`before:will-change-[min-height] before:transition-[min-height] before:duration-200 before:ease-in-out`}
  ${tw`before:bg-gray-500 aria-disabled:opacity-60`}
`
