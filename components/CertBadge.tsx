'use client'

import Image, { type StaticImageData } from 'next/image'
import { PointerEvent } from 'react'

interface Props {
  image: StaticImageData
  alt: string
  title: string
  href: string
}

const MAX_TILT = 14

/**
 * Certification badge that tilts toward the pointer with a foil sheen tracking
 * the cursor. Tilt values are written straight to CSS custom properties so the
 * pointer stream never triggers a React render.
 */
const CertBadge = ({ image, alt, title, href }: Props) => {
  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const card = event.currentTarget
    const bounds = card.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height

    card.style.setProperty('--rx', `${(0.5 - y) * MAX_TILT}deg`)
    card.style.setProperty('--ry', `${(x - 0.5) * MAX_TILT}deg`)
    card.style.setProperty('--mx', `${x * 100}%`)
    card.style.setProperty('--my', `${y * 100}%`)
  }

  const handlePointerLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    const card = event.currentTarget
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
    card.style.setProperty('--mx', '50%')
    card.style.setProperty('--my', '50%')
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="holo-card group flex w-40 flex-col items-center gap-3 text-center"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <span className="holo-card-inner">
        <Image src={image} alt={alt} quality={100} className="w-[120px] object-cover" />
        <span className="holo-foil" />
      </span>
      <span className="group-hover:gradient-light dark:group-hover:gradient-dark text-xs leading-4 font-medium text-gray-500 dark:text-gray-400">
        {title}
      </span>
    </a>
  )
}

export default CertBadge
