import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-3">
          <div>Iulia</div>
          <SocialIcon kind="github" href={siteMetadata.githubIulia} size="6" />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.emailIulia}`} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedinIulia} size="6" />
          <div>{` • `}</div>
          <div>Ion</div>
          <SocialIcon kind="github" href={siteMetadata.githubIon} size="6" />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.emailIon}`} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedinIon} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
