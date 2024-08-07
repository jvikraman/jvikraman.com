import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo-bold.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo className="h-10 w-10 fill-blue-400 hover:opacity-70 dark:fill-sky-400 dark:hover:opacity-90 sm:h-16 sm:w-16 md:h-20 md:w-20" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hover:gradient-light dark:hover:gradient-dark hidden h-10 text-3xl font-bold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 text-lg leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="dark:hover:gradient-dark hover:gradient-light hidden font-medium text-gray-700 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
