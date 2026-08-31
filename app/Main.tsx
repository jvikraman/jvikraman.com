import { ViewTransition } from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import HeroBackdrop from '@/components/HeroBackdrop'
import RoleRotator from '@/components/RoleRotator'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

const ROLES = [
  'Sr. Full Stack Engineer',
  'Cloud Architecture',
  'AI & Machine Learning',
  '17 years of shipping software',
]

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="hero space-y-3 pt-6 pb-8 md:space-y-4">
          <HeroBackdrop />
          <h1 className="gradient-animated w-fit py-2 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I'm Jegadeesh
          </h1>
          <p className="flex items-center gap-2 font-mono text-sm text-gray-600 sm:text-base dark:text-gray-300">
            <span className="text-primary-500" aria-hidden="true">
              &gt;
            </span>
            <RoleRotator phrases={ROLES} />
            <span className="caret text-primary-500" aria-hidden="true">
              &#9613;
            </span>
          </p>
          <p className="prose pt-2 text-lg leading-7 text-gray-600 dark:text-gray-300">
            Welcome to my personal site. I'm a Sr. Full Stack Engineer and I maintain this site to
            share my thoughts about technology and other interests. Checkout the{' '}
            <Link href={`/about`}>About</Link>
            {' section to read more about me.'}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article className="p-2">
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-600 dark:text-gray-300">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="gradient-light dark:gradient-dark text-2xl leading-8 font-bold tracking-tight hover:opacity-90 hover:dark:opacity-90">
                            {/* Pairs with the article header on the post page so the
                                title morphs into place instead of being replaced. */}
                            <ViewTransition
                              name={`post-title-${slug}`}
                              share="morph"
                              default="none"
                            >
                              <Link href={`/blog/${slug}`} transitionTypes={['nav-forward']}>
                                {title}
                              </Link>
                            </ViewTransition>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-600 dark:text-gray-300">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          transitionTypes={['nav-forward']}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            transitionTypes={['nav-forward']}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
