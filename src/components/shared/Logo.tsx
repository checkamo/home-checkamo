import Image from 'next/image'
import Link from 'next/link'

export type LogoVariant = 'full' | 'icon'
export type LogoType = 'checkamo' | 'verifier' | 'user'

interface LogoProps {
  variant?: LogoVariant
  type?: LogoType
  href?: string
  className?: string
  ariaLabel?: string
}

export function Logo({
  variant = 'full',
  type = 'checkamo',
  href = '/',
  className = '',
  ariaLabel = 'Checkamo — Home',
}: LogoProps) {
  const getLogoPath = () => {
    const basePath = '/logos'
    return `${basePath}/${type}-${variant}.png`
  }

  const logoSrc = getLogoPath()
  const isExternal = href.startsWith('http')

  const content = (
    <Image
      src={logoSrc}
      alt={ariaLabel}
      width={variant === 'icon' ? 40 : 140}
      height={variant === 'icon' ? 40 : 48}
      className={`flex-shrink-0 ${className}`}
      priority
    />
  )

  if (isExternal || !href) {
    return content
  }

  return (
    <Link href={href} aria-label={ariaLabel} className="flex-shrink-0 flex items-center">
      {content}
    </Link>
  )
}