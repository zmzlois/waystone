"use client"

import { createContext, useContext, useState } from "react"

interface CanvasContextValue {
  // content currently in the canvas
  content: string
  // push new content to the canvas
  setContent: (content: string) => void
  // append content to existing canvas
  appendContent: (content: string) => void
}

const CanvasContext = createContext<CanvasContextValue | null>(null)

export function CanvasProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState("")

  function appendContent(text: string) {
    setContent((prev) => (prev ? prev + "\n\n" + text : text))
  }

  return (
    <CanvasContext value={{ content, setContent, appendContent }}>
      {children}
    </CanvasContext>
  )
}

export function useCanvas() {
  const ctx = useContext(CanvasContext)
  if (!ctx) throw new Error("useCanvas must be used within CanvasProvider")
  return ctx
}
