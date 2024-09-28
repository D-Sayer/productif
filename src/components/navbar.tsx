'use client'

import Link from 'next/link'
import MaxWidthWrapper from './max-width-wrapper'
import { ThemeToggle } from './theme-toggle'

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-muted bg-background/90 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="z-40 flex font-semibold">
            <span className="flex items-center font-normal">ProDuctiF</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <ThemeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
