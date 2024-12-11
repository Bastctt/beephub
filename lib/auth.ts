import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'

export async function getRequiredSession() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/auth/signin')
  }
  
  return session
}

export async function getAccessToken() {
  const session = await getRequiredSession()
  return session.accessToken
}