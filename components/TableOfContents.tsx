'use client'

import { useEffect, useState } from 'react'

export interface TocItem {
  value: string
  url: string
  depth: number
}

interface Props {
  toc: TocItem[]
  /** Deepest heading level to list. */
  maxDepth?: number
}

/**
 * Sticky table of contents that highlights the section currently in view.
 * Renders nothing when a post has too few headings to be worth navigating.
 */
const TableOfContents = ({ toc, maxDepth = 3 }: Props) => {
  const [activeId, setActiveId] = useState('')
  const headings = toc.filter((heading) => heading.depth <= maxDepth)

  useEffect(() => {
    const ids = toc
      .filter((heading) => heading.depth <= maxDepth)
      .map((heading) => heading.url.replace('#', ''))

    if (ids.length < 2) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (!visible.length) return

        // Several headings can be on screen at once; the highest one wins.
        const topmost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest
        )
        setActiveId(topmost.target.id)
      },
      // Only count a heading as active once it clears the top of the viewport.
      { rootMargin: '-80px 0px -70% 0px' }
    )

    const observed = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    observed.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [toc, maxDepth])

  if (headings.length < 2) return null

  return (
    <nav aria-label="Table of contents" className="hidden xl:block">
      <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
        On this page
      </h2>
      <ul className="mt-3 space-y-1 text-sm">
        {headings.map((heading) => {
          const id = heading.url.replace('#', '')
          const isActive = id === activeId

          return (
            <li key={heading.url} style={{ paddingLeft: `${(heading.depth - 2) * 0.75}rem` }}>
              <a
                href={heading.url}
                className={`block border-l-2 py-1 pl-3 transition-colors ${
                  isActive
                    ? 'border-primary-500 text-primary-500 font-medium'
                    : 'border-gray-200 text-gray-500 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-100'
                }`}
                aria-current={isActive ? 'location' : undefined}
              >
                {heading.value}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TableOfContents
