"use client"

import { useCanvas } from "../canvas/canvas-context"
import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@workspace/ui/components/tooltip"
import { ArrowSquareOut, Copy, Check } from "@phosphor-icons/react"
import { useState, useRef } from "react"

interface CodeBlockProps {
  language?: string
  children: React.ReactNode
}

// extracts text content from react children
function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node
  if (typeof node === "number") return String(node)
  if (!node) return ""
  if (Array.isArray(node)) return node.map(extractText).join("")
  if (typeof node === "object" && node !== null && "props" in node) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return extractText((node as any).props.children)
  }
  return ""
}

export function CodeBlock({ language, children }: CodeBlockProps) {
  const { setContent } = useCanvas()
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  const code = extractText(children)

  function handleCopy() {
    navigator.clipboard.writeText(code)
    setCopied(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 1500)
  }

  function handleSendToCanvas() {
    setContent(code)
  }

  return (
    <div className="group relative">
      {language && (
        <div className="text-muted-foreground bg-muted rounded-t-md border-b px-3 py-1 text-[10px]">
          {language}
        </div>
      )}
      <pre
        className={`bg-muted overflow-x-auto p-3 text-xs ${
          language ? "rounded-b-md" : "rounded-md"
        }`}
      >
        {children}
      </pre>
      <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={handleCopy}
                className="bg-background/80 backdrop-blur-sm"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>copy</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={handleSendToCanvas}
                className="bg-background/80 backdrop-blur-sm"
              >
                <ArrowSquareOut size={12} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>send to canvas</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
