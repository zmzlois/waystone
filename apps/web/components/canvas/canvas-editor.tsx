"use client"

import { useEffect } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import { useCanvas } from "./canvas-context"

export function CanvasEditor() {
  const { content } = useCanvas()

  const editor = useEditor({
    immediatelyRender: false,
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

  // sync canvas context content into the editor
  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content)
    }
  }, [editor, content])

  return <EditorContent editor={editor} className="h-full" />
}
