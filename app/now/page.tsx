import Link from '@/components/Link'
import PageTransition from '@/components/PageTransition'
import now from '@/data/now'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Now',
  description: `What ${siteMetadata.author} is focused on at the moment.`,
})

export default function NowPage() {
  // Anchor to local midnight; a bare YYYY-MM-DD parses as UTC and can render a day early.
  const updated = new Date(`${now.updated}T00:00:00`).toLocaleDateString(siteMetadata.locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <PageTransition>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-4 pt-6 pb-8 md:space-y-5">
          <h1 className="gradient-animated w-fit text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Now
          </h1>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">{now.intro}</p>
          <p className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="border-primary-500/40 text-primary-500 rounded-full border px-3 py-1 font-medium">
              Updated {updated}
            </span>
            <span>
              This is a{' '}
              <Link
                href="https://nownownow.com/about"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                /now page
              </Link>
              .
            </span>
          </p>
        </div>

        <div className="grid gap-6 py-8 sm:grid-cols-2">
          {now.sections.map((section) => (
            <section
              key={section.title}
              className="hover:border-primary-500/50 rounded-xl border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <h2 className="gradient-brand w-fit text-xl font-bold tracking-tight">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item.text}
                    className="border-l-2 border-gray-200 pl-4 text-gray-600 dark:border-gray-700 dark:text-gray-300"
                  >
                    {'href' in item && item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
