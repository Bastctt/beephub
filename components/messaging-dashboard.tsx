'use client'

import { useSession } from 'next-auth/react'
import { PlatformGrid } from './messaging/platform-grid'

export function MessagingDashboard() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Please sign in to access your messages</p>
      </div>
    )
  }

  return <PlatformGrid />
}