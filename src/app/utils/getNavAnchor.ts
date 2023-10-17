import { nav } from '@/app/constants'
import { NavItem, NavKeys } from '@/app/types'

interface GetNavAnchorArgs {
  key: NavKeys
  navMap?: Map<NavKeys, NavItem>
  isWithHash?: boolean
}

const getNavAnchor = ({
  key,
  navMap = nav,
  isWithHash = false,
}: GetNavAnchorArgs) =>
  navMap.get(key)?.link.split(isWithHash ? ' ' : '#')[isWithHash ? 0 : 1]

export default getNavAnchor
