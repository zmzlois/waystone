"use client"

import { useState } from "react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@workspace/ui/components/collapsible"
import { CaretRight } from "@phosphor-icons/react"

interface ThinkingBlockProps {
  reasoning: string
}

export function ThinkingBlock({ reasoning }: ThinkingBlockProps) {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="mb-2">
      <CollapsibleTrigger className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-xs transition-colors">
        <CaretRight
          size={12}
          className={`transition-transform ${open ? "rotate-90" : ""}`}
        />
        thinking
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="text-muted-foreground mt-1 border-l-2 border-border pl-3 font-mono text-xs leading-relaxed whitespace-pre-wrap">
          {reasoning}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
