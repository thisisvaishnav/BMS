# BMS

BMS is a Turborepo-based monorepo with:

- a Next.js web app (`apps/web`)
- an Express HTTP API (`apps/http-server`)
- a WebSocket server (`apps/websocket`)
- a shared Prisma package (`packages/prisma`)
- shared UI, ESLint, and TypeScript config packages

## Tech Stack

- **Monorepo:** Turborepo + pnpm workspaces
- **Frontend:** Next.js + React + TypeScript
- **Backend:** Express + WebSocket (`ws`)
- **Database:** PostgreSQL + Prisma

## Repository Structure

```text
apps/
  web/           # Next.js app (port 3000)
  http-server/   # Express API server (port 3001)
  websocket/     # WebSocket server (port 4001)
packages/
  prisma/        # Shared Prisma client + schema
  ui/            # Shared React UI components
  eslint-config/ # Shared lint configuration
  typescript-config/ # Shared TypeScript configuration
```

## Prerequisites

- Node.js `>= 18`
- pnpm `9`
- PostgreSQL database

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Set the database URL:

```bash
export DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>"
```

3. Run database migrations:

```bash
cd packages/prisma
npx prisma migrate deploy
cd ../..
```

## Development

Run everything with Turborepo:

```bash
pnpm dev
```

Or run individual apps:

```bash
pnpm --filter web dev
pnpm --filter @repo/http-server dev
pnpm --filter @repo/websocket dev
```

## Useful Commands

```bash
pnpm lint
pnpm check-types
pnpm build
pnpm format
```

> Note: `pnpm build` requires `DATABASE_URL` to be set because the web app queries Prisma during build-time rendering.
