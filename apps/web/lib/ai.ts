import { createAnthropic } from "@ai-sdk/anthropic"
import type { LanguageModel } from "ai"

// anthropic provider — reads ANTHROPIC_API_KEY from env automatically
const anthropic = createAnthropic()

// default model for chat
export const model: LanguageModel = anthropic("claude-sonnet-4-20250514")
