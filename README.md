# Waystone

Autonomous open-source Fivetran alternative. The sync engine works like your principal data engineer, because integrating with legacy softwares is hard.

## Prerequisites

- [Node.js](https://nodejs.org/) 22+
- [pnpm](https://pnpm.io/) 9+
- [Doppler CLI](https://docs.doppler.com/docs/install-cli) (for secrets management)
- [Docker](https://www.docker.com/) (for local database)
- [mise](https://mise.jdx.dev/) (task runner)

## Getting started

```bash
# install dependencies
mise run install

# start local postgres database
mise run db:up

# run database migrations
mise run db:migrate

# start dev server
mise run dev
```

## Available tasks

| Task | Description |
| --- | --- |
| `mise run install` | Install dependencies |
| `mise run dev` | Start dev server |
| `mise run build` | Build all packages |
| `mise run lint` | Lint all packages |
| `mise run format` | Format all packages |
| `mise run typecheck` | Typecheck all packages |
| `mise run db:up` | Start local Postgres |
| `mise run db:down` | Stop local Postgres |
| `mise run db:logs` | Tail database logs |
| `mise run db:reset` | Destroy database and data |
| `mise run db:generate` | Generate Drizzle migrations |
| `mise run db:migrate` | Run Drizzle migrations |
| `mise run db:studio` | Open Drizzle Studio |

## Project structure

```
apps/
  web/          Next.js app (landing page, chat interface)
packages/
  ui/           Shared UI components (shadcn/ui)
  eslint-config/
  typescript-config/
```

## Adding UI components

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Components are placed in `packages/ui/src/components` and imported as:

```tsx
import { Button } from "@workspace/ui/components/button"
```
