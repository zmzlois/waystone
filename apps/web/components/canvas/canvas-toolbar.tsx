"use client"

import { useState, useRef } from "react"
import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@workspace/ui/components/tooltip"
import { Copy, Check, Trash } from "@phosphor-icons/react"
import { useCanvas } from "./canvas-context"

export function CanvasToolbar() {
  const { content, setContent } = useCanvas()
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  function handleCopy() {
    navigator.clipboard.writeText(content)
    setCopied(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 1500)
  }

  function handleClear() {
    setContent("")
  }

  return (
    <div className="flex items-center justify-between border-b px-4 py-3">
      <span className="text-sm font-medium">canvas</span>
      <div className="flex items-center gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" onClick={handleCopy}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>copy</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" onClick={handleClear}>
                <Trash size={14} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>clear</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
