"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { MessagesSidebar } from "./messages-sidebar"
import { ChatArea } from "./chat-area"

export function MessagesLayout() {
  const [selectedChat, setSelectedChat] = useState(1)

  return (
    <Card className="h-full flex overflow-hidden">
      <div className="w-80 border-r">
        <MessagesSidebar selectedChat={selectedChat} onSelectChat={setSelectedChat} />
      </div>
      <div className="flex-1">
        <ChatArea chatId={selectedChat} />
      </div>
    </Card>
  )
}
