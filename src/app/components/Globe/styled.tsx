import tw, { styled } from 'twin.macro'
import {
  innerShadowImage,
  innerShadowImageWebkit,
  mapImage,
  mapImageWebkit,
  outerShadowImage,
  outerShadowImageWebkit,
} from './images'

const maskImageStyling = tw`[-webkit-mask-repeat:no-repeat] [mask-repeat:no-repeat] [-webkit-mask-position:0 0] [mask-position:0 0]`
const maskImageCover = tw`[-webkit-mask-size:cover] [mask-size:cover]`
const maskImageContain = tw`[-webkit-mask-size:contain] [mask-size:contain]`
const fullAbsolute = tw`absolute left-0 right-0 top-0 bottom-0`

export const Globe = styled.div`
  ${tw`relative inline-block w-52 pb-[100%]`}
`

export const Sphere = styled.div`
  ${fullAbsolute}
`

export const OuterShadow = styled.div`
  ${outerShadowImageWebkit}
  ${outerShadowImage}
  ${maskImageStyling}
  ${maskImageCover}
  ${tw`absolute left-0 right-0 top-[93%] h-[15%]`}
  ${tw`bg-bgDark dark:bg-bgLight`}
`

export const WorldMap = styled.div`
  ${fullAbsolute}
  ${tw`rounded-full overflow-hidden`}
`

export const WorldMapFront = styled.div`
  ${mapImageWebkit}
  ${mapImage}
  ${maskImageStyling}
  ${maskImageCover}
  ${tw`absolute left-0 top-0 bottom-0 w-[500%] overflow-visible`}
  ${tw`bg-orange-500 animate-globe`}
`

export const WorldMapBack = styled.div`
  ${mapImageWebkit}
  ${mapImage}
  ${maskImageStyling}
  ${maskImageCover}
  ${tw`absolute left-0 top-0 bottom-0 w-[500%] overflow-visible opacity-70`}
  ${tw`[-webkit-mask-position:0 104%] [mask-position:0 104%] bg-orange-500 animate-globeBack`}
`

export const InnerShadow = styled.div`
  ${innerShadowImageWebkit}
  ${innerShadowImage}
  ${maskImageStyling}
  ${maskImageContain}
  ${fullAbsolute}
  ${tw`bg-bgDark dark:bg-bgLight`}
`
