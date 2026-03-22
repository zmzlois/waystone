"use client"

import { useState } from "react"
import { useChat } from "@ai-sdk/react"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@workspace/ui/components/resizable"
import { ChatPanel } from "./chat-panel"
import { CanvasPanel } from "../canvas/canvas-panel"
import { CanvasProvider } from "../canvas/canvas-context"

export function ChatLayout() {
  const [input, setInput] = useState("")
  const chat = useChat()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    chat.sendMessage({ text })
    setInput("")
  }

  return (
    <CanvasProvider>
      <ResizablePanelGroup orientation="horizontal" className="h-svh">
        <ResizablePanel defaultSize={40} minSize={25}>
          <ChatPanel
            messages={chat.messages}
            input={input}
            status={chat.status}
            onInputChange={setInput}
            onSubmit={handleSubmit}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60} minSize={30}>
          <CanvasPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </CanvasProvider>
  )
}
