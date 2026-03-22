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
import { UserMenu } from "../user-menu"
import { ThemeToggle } from "../theme-provider"

interface ChatLayoutProps {
  user: {
    firstName: string | null
    lastName: string | null
    email: string
    profilePictureUrl: string | null
  }
  signOut: () => Promise<void>
}

export function ChatLayout({ user, signOut }: ChatLayoutProps) {
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
      <div className="flex h-svh flex-col">
        {/* top bar with branding, theme toggle, and user menu */}
        <div className="flex items-center justify-between border-b px-4 py-2">
          <h1 className="text-sm font-semibold">waystone</h1>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <UserMenu user={user} signOut={signOut} />
          </div>
        </div>

        {/* resizable panels fill remaining height */}
        <ResizablePanelGroup orientation="horizontal" className="flex-1">
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
      </div>
    </CanvasProvider>
  )
}
