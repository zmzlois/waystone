"use client"

import type { UIMessage } from "ai"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"

interface ChatPanelProps {
  messages: UIMessage[]
  input: string
  status: string
  onInputChange: (value: string) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function ChatPanel({
  messages,
  input,
  status,
  onInputChange,
  onSubmit,
}: ChatPanelProps) {
  const isLoading = status === "streaming" || status === "submitted"

  return (
    <div className="flex h-full flex-col border-r">
      <ChatMessages messages={messages} isLoading={isLoading} />
      <ChatInput
        input={input}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </div>
  )
}
