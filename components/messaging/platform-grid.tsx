'use client'

import { Mail, Instagram, MessageCircle } from 'lucide-react'
import { PlatformCard } from './platform-card'
import { GmailMessageList } from './gmail/message-list'
import { useSession } from 'next-auth/react'

export function PlatformGrid() {
  const { data: session } = useSession()
  
  const platforms = [
    {
      title: 'Gmail',
      description: 'Connect your Gmail account to view and manage your emails.',
      icon: Mail,
      isConnected: !!session?.accessToken,
      content: session?.accessToken ? <GmailMessageList /> : null
    },
    {
      title: 'Instagram',
      description: 'Link your Instagram account to view messages and posts.',
      icon: Instagram,
      isConnected: false
    },
    {
      title: 'WhatsApp',
      description: 'Connect WhatsApp to send and receive messages.',
      icon: MessageCircle,
      isConnected: false
    }
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {platforms.map((platform) => (
        <div key={platform.title} className="space-y-4">
          <PlatformCard
            title={platform.title}
            description={platform.description}
            icon={platform.icon}
            isConnected={platform.isConnected}
            onConnect={() => {}}
          />
          {platform.content}
        </div>
      ))}
    </div>
  )
}