"use client"

import { useRef } from "react"
import { Textarea } from "@workspace/ui/components/textarea"
import { Button } from "@workspace/ui/components/button"
import { PaperPlaneRight } from "@phosphor-icons/react"

interface ChatInputProps {
  input: string
  onInputChange: (value: string) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
}

export function ChatInput({
  input,
  onInputChange,
  onSubmit,
  isLoading,
}: ChatInputProps) {
  const formRef = useRef<HTMLFormElement>(null)

  // submit on enter, shift+enter for newlines
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      formRef.current?.requestSubmit()
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="border-t p-4">
      <div className="flex items-end gap-2">
        <Textarea
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="say something..."
          disabled={isLoading}
          rows={1}
          className="min-h-[40px] max-h-[160px] flex-1 resize-none"
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          disabled={isLoading || !input.trim()}
        >
          <PaperPlaneRight size={16} />
        </Button>
      </div>
    </form>
  )
}
