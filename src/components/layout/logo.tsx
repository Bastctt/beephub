import { MessageCircle } from 'lucide-react'

export function Logo() {
    return (
        <div className="flex items-center space-x-2">
            <MessageCircle className="h-4 w-4" />
            <span className="text-m font-bold">BeepHub</span>
        </div>
    )
}