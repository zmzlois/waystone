"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"

export function CanvasEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "start writing...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm dark:prose-invert max-w-none px-8 py-6 font-sans text-sm leading-relaxed outline-none min-h-full",
      },
    },
  })

  return <EditorContent editor={editor} className="h-full" />
}
