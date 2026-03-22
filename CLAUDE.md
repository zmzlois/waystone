# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Waystone is a Turborepo monorepo with a Next.js 16 web app featuring an AI chat interface powered by Claude (Vercel AI SDK). Uses pnpm workspaces.

## Commands

```bash
pnpm install              # install dependencies
pnpm turbo dev            # start dev server (Next.js with Turbopack)
pnpm turbo build          # build all packages
pnpm turbo lint           # lint all packages
pnpm turbo format         # format all packages (prettier)
pnpm turbo typecheck      # typecheck all packages

# run commands for a specific app/package
pnpm --filter web dev
pnpm --filter web lint
pnpm --filter @workspace/ui typecheck

# database (postgres 17 on port 5433, user/pass/db: waystone)
docker compose up -d db   # start local postgres
docker compose down        # stop postgres
docker compose down -v     # destroy postgres and data

# add shadcn/ui components
pnpm dlx shadcn@latest add <component> -c apps/web
```

Node 22 and pnpm 9.15.9 are managed via mise (`.mise.toml`).

## Architecture

```
apps/web        → Next.js 16 app (React 19, Turbopack, App Router)
packages/ui     → shared shadcn/ui component library (@workspace/ui)
packages/eslint-config      → shared ESLint configs (base, next-js, react-internal)
packages/typescript-config  → shared tsconfig presets (base, nextjs, react-library)
```

### Import Conventions

- Cross-package: `@workspace/ui/components/button`, `@workspace/ui/lib/utils`
- Within web app: `@/*` (e.g., `@/components/chat/layout`)
- UI package exports are defined explicitly in `packages/ui/package.json` `exports` field

### Web App Structure

- `app/api/chat/route.ts` — streaming chat endpoint using Vercel AI SDK + Anthropic (Claude Sonnet 4, extended thinking enabled)
- `app/page.tsx` — main page rendering chat layout
- `components/chat/` — chat UI (layout, messages, panel, input, thinking-block)
- `components/canvas/` — canvas UI (editor with TipTap, panel, toolbar)
- `lib/ai.ts` — AI SDK client configuration

### Key Tech

- **UI**: shadcn/ui (radix-lyra style), Tailwind CSS 4, Phosphor Icons, react-resizable-panels
- **AI**: Vercel AI SDK (`ai` package) with `@ai-sdk/anthropic`
- **Editor**: TipTap rich text editor
- **Secrets**: Doppler (`doppler.yaml`)
- **Formatting**: Prettier with tailwind plugin — no semicolons, double quotes, trailing commas (es5), 2-space indent

### Styling

Global styles live in `packages/ui/src/styles/globals.css`. The `cn()` utility from `@workspace/ui/lib/utils` merges Tailwind classes (clsx + tailwind-merge). Prettier is configured with `tailwindFunctions: ["cn", "cva"]` for class sorting.
