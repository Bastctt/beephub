'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function UserMenu() {
  const { data: session } = useSession()

  if (!session) {
    return <Button onClick={() => signIn()}>Sign In</Button>
  }

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-muted-foreground">
        {session.user?.email}
      </span>
      <Button variant="outline" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  )
}