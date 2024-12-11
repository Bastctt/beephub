'use client'

import useSWR from 'swr'
import { GmailMessage } from '@/types/gmail'

interface GmailResponse {
  messages: GmailMessage[]
  error?: string
}

const fetcher = async (url: string): Promise<GmailMessage[]> => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch messages')
  }
  const data: GmailResponse = await res.json()
  if (data.error) {
    throw new Error(data.error)
  }
  return data.messages
}

export function useGmailMessages() {
  const { data, error, isLoading } = useSWR<GmailMessage[]>(
    '/api/messages/gmail',
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false
    }
  )

  return {
    messages: data,
    isLoading,
    isError: error
  }
}