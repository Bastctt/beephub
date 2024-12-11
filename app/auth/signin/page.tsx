'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail } from 'lucide-react'

export default function SignIn() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Card className="p-8 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Welcome to Beeper</h1>
          <p className="text-muted-foreground">
            Sign in to connect your messaging platforms
          </p>
        </div>
        
        <Button
          className="w-full"
          onClick={() => signIn('google', { callbackUrl: '/' })}
        >
          <Mail className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
      </Card>
    </div>
  )
}