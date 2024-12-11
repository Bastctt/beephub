import { MessagingDashboard } from '@/components/messaging-dashboard'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Beeper</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect your messaging platforms and manage all your communications in one place.
        </p>
      </section>
      <MessagingDashboard />
    </div>
  )
}