import { ReactNode, ViewTransition } from 'react'

/**
 * Wraps a route's content so forward/back navigations slide in the matching
 * direction. Links opt in by passing `transitionTypes` (see `nav-forward` and
 * `nav-back` in `css/tailwind.css`); anything untyped — browser back, refresh,
 * Suspense reveals — falls through to `default: 'none'` and swaps instantly.
 *
 * This has to live in each `page.tsx` rather than a layout: layouts persist
 * across navigation, so their enter/exit animations never fire.
 */
const navigation = {
  'nav-forward': 'nav-forward',
  'nav-back': 'nav-back',
  default: 'none',
}

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <ViewTransition enter={navigation} exit={navigation} default="none">
      {children}
    </ViewTransition>
  )
}

export default PageTransition
