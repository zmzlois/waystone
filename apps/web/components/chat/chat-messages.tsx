"use client"

import { useEffect, useRef } from "react"
import type { UIMessage } from "ai"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { ChatMessage } from "./chat-message"

interface ChatMessagesProps {
  messages: UIMessage[]
  isLoading: boolean
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  // auto-scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <ScrollArea className="flex-1 px-4">
      <div className="flex flex-col gap-4 py-4">
        {messages.length === 0 && (
          <p className="text-muted-foreground text-center text-sm">
            start a conversation
          </p>
        )}
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && messages.at(-1)?.role !== "assistant" && (
          <div className="text-muted-foreground text-xs animate-pulse">
            thinking...
          </div>
        )}
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  )
}
