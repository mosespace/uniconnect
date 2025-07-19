"use client"

import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for the help with React!",
    time: "2m",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Are you still selling the MacBook?",
    time: "1h",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Great job on the project presentation!",
    time: "3h",
    unread: 1,
    online: true,
  },
  {
    id: 4,
    name: "Alex Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you help me with calculus homework?",
    time: "1d",
    unread: 0,
    online: false,
  },
]

interface MessagesSidebarProps {
  selectedChat: number
  onSelectChat: (chatId: number) => void
}

export function MessagesSidebar({ selectedChat, onSelectChat }: MessagesSidebarProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold mb-4">💬 Messages</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search conversations..." className="pl-10" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onSelectChat(conversation.id)}
            className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
              selectedChat === conversation.id ? "bg-muted" : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                  <AvatarFallback>
                    {conversation.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {conversation.online && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold truncate">{conversation.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    {conversation.unread > 0 && (
                      <Badge className="h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
