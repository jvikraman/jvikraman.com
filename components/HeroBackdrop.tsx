/**
 * Decorative aurora + grid layer that sits behind the landing headline.
 * All motion is CSS driven (see `css/tailwind.css`) so this stays a server
 * component, and it is hidden from assistive tech.
 */
const HeroBackdrop = () => {
  return (
    <div className="hero-aurora" aria-hidden="true">
      <span className="hero-blob hero-blob-1" />
      <span className="hero-blob hero-blob-2" />
      <span className="hero-blob hero-blob-3" />
      <span className="hero-grid" />
    </div>
  )
}

export default HeroBackdrop
