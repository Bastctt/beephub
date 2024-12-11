'use client'

import { Logo } from './layout/logo'
import { UserMenu } from './layout/user-menu'

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <UserMenu />
      </div>
    </nav>
  )
}