'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface PlatformCardProps {
  title: string
  description: string
  icon: LucideIcon
  onConnect: () => void
  isConnected?: boolean
}

export function PlatformCard({
  title,
  description,
  icon: Icon,
  onConnect,
  isConnected = false
}: PlatformCardProps) {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center space-x-2">
        <Icon className="h-6 w-6" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <Button 
        className="w-full" 
        variant={isConnected ? "outline" : "default"}
        onClick={onConnect}
      >
        {isConnected ? 'Connected' : 'Connect'}
      </Button>
    </Card>
  )
}