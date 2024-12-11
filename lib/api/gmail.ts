import { google } from 'googleapis'
import { GmailMessage } from '@/types/gmail'

export async function getGmailMessages(accessToken: string): Promise<GmailMessage[]> {
  const auth = new google.auth.OAuth2()
  auth.setCredentials({ access_token: accessToken })

  const gmail = google.gmail({ version: 'v1', auth })
  
  try {
    const response = await gmail.users.messages.list({
      userId: 'me',
      maxResults: 10,
    })

    return response.data.messages || []
  } catch (error) {
    console.error('Error fetching Gmail messages:', error)
    return []
  }
}