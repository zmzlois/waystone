"use client"

import type { UIMessage } from "ai"
import { ThinkingBlock } from "./thinking-block"
import { Markdown } from "./markdown"

interface ChatMessageProps {
  message: UIMessage
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={`flex flex-col gap-1.5 ${isUser ? "items-end" : ""}`}>
      <span className="text-muted-foreground text-[10px] uppercase tracking-wide">
        {isUser ? "you" : "assistant"}
      </span>
      <div
        className={`max-w-[90%] text-sm leading-relaxed ${
          isUser
            ? "bg-primary text-primary-foreground rounded-lg px-3 py-2"
            : ""
        }`}
      >
        {message.parts.map((part, i) => {
          if (part.type === "reasoning") {
            return <ThinkingBlock key={i} reasoning={part.text} />
          }
          if (part.type === "text") {
            if (isUser) {
              return (
                <span key={i} className="whitespace-pre-wrap">
                  {part.text}
                </span>
              )
            }
            return <Markdown key={i} content={part.text} />
          }
          return null
        })}
      </div>
    </div>
  )
}
