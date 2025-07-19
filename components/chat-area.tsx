"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Paperclip, Smile, MoreVertical } from "lucide-react"

const messages = [
  {
    id: 1,
    sender: "Sarah Chen",
    content: "Hey! I saw your post about React tutoring. Are you still available?",
    time: "10:30 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Me",
    content: "Hi Sarah! Yes, I'm still offering React tutoring. What specific topics do you need help with?",
    time: "10:32 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Sarah Chen",
    content:
      "I'm struggling with hooks, especially useEffect and custom hooks. Also state management with Context API.",
    time: "10:35 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "Me",
    content:
      "Perfect! Those are great topics to cover. I can definitely help you with those. When would be a good time for you?",
    time: "10:37 AM",
    isMe: true,
  },
  {
    id: 5,
    sender: "Sarah Chen",
    content: "Thanks for the help with React! The session was really helpful 😊",
    time: "2:15 PM",
    isMe: false,
  },
]

interface ChatAreaProps {
  chatId: number
}

export function ChatArea({ chatId }: ChatAreaProps) {
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("")
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Chen" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
          </div>
          <div>
            <h3 className="font-semibold">Sarah Chen</h3>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="h-4 text-xs">
                ✓ Verified
              </Badge>
              <span className="text-xs text-green-600">Online</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs lg:max-w-md ${message.isMe ? "order-2" : "order-1"}`}>
              <div
                className={`rounded-2xl px-4 py-2 ${
                  message.isMe ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              <p className={`text-xs text-muted-foreground mt-1 ${message.isMe ? "text-right" : "text-left"}`}>
                {message.time}
              </p>
            </div>
            {!message.isMe && (
              <Avatar className="h-8 w-8 order-1 mr-2">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt={message.sender} />
                <AvatarFallback className="text-xs">SC</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Chen" />
                <AvatarFallback className="text-xs">SC</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-2xl px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="pr-10"
            />
            <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <Smile className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
