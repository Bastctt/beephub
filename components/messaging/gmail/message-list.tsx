'use client'

import { useGmailMessages } from '@/hooks/use-gmail-messages'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function GmailMessageList() {
  const { messages, isLoading, isError } = useGmailMessages()

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="p-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </Card>
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <Card className="p-4 text-center text-muted-foreground">
        Failed to load messages
      </Card>
    )
  }

  if (!messages?.length) {
    return (
      <Card className="p-4 text-center text-muted-foreground">
        No messages found
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card key={message.id} className="p-4">
          <p className="font-medium">{message.snippet}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Thread ID: {message.threadId}
          </p>
        </Card>
      ))}
    </div>
  )
}