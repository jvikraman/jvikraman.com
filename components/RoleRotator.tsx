'use client'

import { useEffect, useState } from 'react'

const GLYPHS = '01{}[]<>/\\#$%&*+=~^'

interface Props {
  /** Phrases to cycle through. The first one is what renders on the server. */
  phrases: string[]
  /** How long a phrase stays readable before the next scramble, in ms. */
  hold?: number
  /** How long the scramble between two phrases takes, in ms. */
  scramble?: number
  className?: string
}

/**
 * Cycles through a list of phrases with a character scramble between each one.
 * Falls back to a plain swap when the visitor prefers reduced motion, and keeps
 * the full list in the accessibility tree so nothing depends on the animation.
 */
const RoleRotator = ({ phrases, hold = 2600, scramble = 700, className }: Props) => {
  const [text, setText] = useState(phrases[0])

  useEffect(() => {
    if (phrases.length < 2) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let index = 0
    let frame = 0
    let timer: ReturnType<typeof setTimeout>

    const run = () => {
      const previous = phrases[index]
      index = (index + 1) % phrases.length
      const target = phrases[index]

      if (reducedMotion.matches) {
        setText(target)
        timer = setTimeout(run, hold)
        return
      }

      const length = Math.max(target.length, previous.length)
      const start = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - start) / scramble, 1)
        let next = ''

        for (let i = 0; i < length; i++) {
          const char = target[i] ?? ''
          // Reveals are staggered left to right across the first 60% of the run.
          if (progress >= (i / length) * 0.6 + 0.4 || char === ' ') {
            next += char
          } else {
            next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          }
        }

        setText(next)

        if (progress < 1) {
          frame = requestAnimationFrame(tick)
        } else {
          setText(target)
          timer = setTimeout(run, hold)
        }
      }

      frame = requestAnimationFrame(tick)
    }

    timer = setTimeout(run, hold)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [phrases, hold, scramble])

  return (
    <>
      <span className="sr-only">{phrases.join(', ')}</span>
      <span className={className} aria-hidden="true">
        {text}
      </span>
    </>
  )
}

export default RoleRotator
