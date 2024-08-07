import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex flex-col space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="text-center">{`© 2020 - present, Jegadeesh Vikramanthampi.`}</div>
          <div className="text-center">{`All rights reserved.`}</div>
        </div>
      </div>
    </footer>
  )
}
