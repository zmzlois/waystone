"use client"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@workspace/ui/components/tooltip"
import { Copy, PencilSimple } from "@phosphor-icons/react"

export function CanvasToolbar() {
  return (
    <div className="flex items-center justify-between border-b px-4 py-3">
      <span className="text-sm font-medium">canvas</span>
      <div className="flex items-center gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <PencilSimple size={14} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>edit</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <Copy size={14} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>copy</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
