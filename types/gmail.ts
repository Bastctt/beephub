export interface GmailMessage {
  id: string
  threadId: string
  labelIds?: string[]
  snippet?: string
}