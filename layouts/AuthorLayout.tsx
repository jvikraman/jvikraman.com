import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import ociGenAICertImage from '/public/static/images/oci-genai-clear.png'
import ociAIFoundCertImage from '/public/static/images/oci-ai-found-clear.png'
import awsAICert from '/public/static/images/aws-ai-cert-clear.png'
import awsAIAdopter from '/public/static/images/aws-ai-early-adopter-clear.png'
import CustomImage from 'next/image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="gradient-tr-light-clip dark:gradient-dark text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
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
            <h3 className="gradient-light dark:gradient-dark pb-2 pt-4 text-center text-2xl font-bold leading-8 tracking-tight">
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
          <div className="prose max-w-none pb-8 pt-8 text-lg dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
        <div className="py-8">
          <div className="gradient-light dark:gradient-dark text-center text-2xl font-semibold">
            Certifications
          </div>
          <div className="flex flex-col items-center justify-center gap-8 py-4 md:flex-row md:flex-wrap">
            <div className="flex items-center">
              <div className="overflow-hidden">
                <CustomImage
                  src={ociGenAICertImage}
                  alt="oci certified professional"
                  quality={100}
                  className="cursor:pointer w-[120px] object-cover"
                />
              </div>
              <div className="hidden">
                <a
                  className="gradient-tr-light-clip dark:gradient-dark text-center text-lg font-semibold transition hover:opacity-80 hover:dark:opacity-80 md:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=179260482E1DE470715A350A5907C72AF2B5E58E7581E466B17DFB9E3247B240"
                >
                  OCI Generative AI Professional - 1Z0-1127-24
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="overflow-hidden">
                <CustomImage
                  src={ociAIFoundCertImage}
                  alt="oci certified professional"
                  quality={100}
                  className="w-[120px] object-cover "
                />
              </div>
              <div className="hidden">
                <a
                  className="gradient-tr-light-clip dark:gradient-dark text-center text-lg font-semibold transition hover:opacity-80 hover:dark:opacity-80 md:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=4BA6211937C90400E1DAD34E2EA2E8A78329DC4A60C78D9B8F9917DA62689F17"
                >
                  OCI AI Foundations Associate - 1Z0-1122-24
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="overflow-hidden">
                <CustomImage
                  src={awsAICert}
                  alt="aws certified ai practitioner"
                  quality={100}
                  className="w-[120px] object-cover "
                />
              </div>
              <div className="hidden">
                <a
                  className="gradient-tr-light-clip dark:gradient-dark text-center text-lg font-semibold transition hover:opacity-80 hover:dark:opacity-80 md:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/17d2cfae-7b65-4729-8814-0bc9f5b04b66/public_url"
                >
                  AWS Certified AI Practitioner
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="overflow-hidden">
                <CustomImage
                  src={awsAIAdopter}
                  alt="aws certified ai practitioner"
                  quality={100}
                  className="w-[120px] object-cover "
                />
              </div>
              <div className="hidden">
                <a
                  className="gradient-tr-light-clip dark:gradient-dark text-center text-lg font-semibold transition hover:opacity-80 hover:dark:opacity-80 md:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/18c8edc1-198c-422b-8d5b-104ecee87a43/public_url"
                >
                  AWS Early AI Adopter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
