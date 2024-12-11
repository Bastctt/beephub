import { IgApiClient } from 'instagram-private-api'

export async function getInstagramMessages(username: string, password: string) {
  const ig = new IgApiClient()
  ig.state.generateDevice(username)
  
  try {
    await ig.simulate.preLoginFlow()
    await ig.account.login(username, password)
    
    const inbox = await ig.feed.directInbox().items()
    return inbox
  } catch (error) {
    console.error('Error fetching Instagram messages:', error)
    return []
  }
}