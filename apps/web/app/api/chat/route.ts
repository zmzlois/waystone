import { streamText } from "ai"
import { model } from "@/lib/ai"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model,
    messages,
    // enable extended thinking so we can show reasoning in the ui
    providerOptions: {
      anthropic: {
        thinking: { type: "enabled", budgetTokens: 10000 },
      },
    },
  })

  return result.toUIMessageStreamResponse()
}
