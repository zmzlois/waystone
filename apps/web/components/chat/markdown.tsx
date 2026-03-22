"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { CodeBlock } from "./code-block"

interface MarkdownProps {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none font-sans">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ children }) {
            // extract language and code from the nested <code> element
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const codeChild = children as any
            const className = codeChild?.props?.className ?? ""
            const language = className.replace("language-", "") || undefined

            return (
              <CodeBlock language={language}>
                {codeChild?.props?.children}
              </CodeBlock>
            )
          },
          code({ children, className }) {
            // inline code only — block code is handled by pre above
            if (className?.startsWith("language-")) {
              return <code className={className}>{children}</code>
            }
            return (
              <code className="bg-muted rounded px-1 py-0.5 text-xs">
                {children}
              </code>
            )
          },
        }}
      />
    </div>
  )
}
