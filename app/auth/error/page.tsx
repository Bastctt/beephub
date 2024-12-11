'use client'

import { useSearchParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Card className="p-8 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <AlertCircle className="mx-auto h-12 w-12 text-destructive" />
          <h1 className="text-2xl font-bold">Authentication Error</h1>
          <p className="text-muted-foreground">
            {error || 'An error occurred during authentication'}
          </p>
        </div>
        
        <Button asChild className="w-full">
          <Link href="/">Return Home</Link>
        </Button>
      </Card>
    </div>
  )
}