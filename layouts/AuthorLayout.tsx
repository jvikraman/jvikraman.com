import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import CertBadge from '@/components/CertBadge'
import certifications from '@/data/certifications'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="gradient-tr-light-clip dark:gradient-dark text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:pb-8">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <div className="gradient-tr-light dark:gradient-tr-dark rounded-full p-2">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={192}
                  height={192}
                  className="h-48 w-48 rounded-full bg-white p-1"
                />
              </div>
            )}
            <h3 className="gradient-light dark:gradient-dark pt-4 pb-2 text-center text-2xl leading-8 font-bold tracking-tight">
              {name}
            </h3>
            <div className="font-semibold text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 text-lg xl:col-span-2">
            {children}
          </div>
        </div>
        <div className="py-8">
          <div className="gradient-light dark:gradient-dark text-center text-2xl font-semibold">
            Certifications
          </div>
          <div className="flex flex-col items-center justify-center gap-8 py-4 md:flex-row md:flex-wrap md:items-start">
            {certifications.map((certification) => (
              <CertBadge key={certification.title} {...certification} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
