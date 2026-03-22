"use client"

import { CanvasEditor } from "./canvas-editor"
import { CanvasToolbar } from "./canvas-toolbar"

export function CanvasPanel() {
  return (
    <div className="flex h-full flex-col border-l">
      <CanvasToolbar />
      <div className="flex-1 overflow-y-auto">
        <CanvasEditor />
      </div>
    </div>
  )
}
