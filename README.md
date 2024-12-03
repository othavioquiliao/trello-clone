# Trello Clone

Uma aplicação de gerenciamento de tarefas inspirada no Trello, desenvolvida com Next.js 15 e TypeScript.

A Documentação mostra como rodar o projeto localmente, mas aqui esta ele apos o deploy no vercel.

[Trello Clone](https://trello-clone-git-main-lucas-santos-dev.vercel.app/)

## 🚀 Tecnologias Utilizadas

### Core

- Next.js 15
- TypeScript
- Prisma (ORM)
- Clerk (Autenticação)
- Tailwind CSS
- Zod (Validação)
- Postgres

### UI/UX

- Lucide React (Ícones)
- Sonner (Toasts)
- Shadcn/ui (Componentes)
- Hello Pangea DND (Drag and Drop)

### Utilitários

- Lodash
- usehooks-ts
- Zustand (Gerenciamento de Estado)
- Unsplash API (Imagens)

## 📋 Pré-requisitos

- Node.js 18+
- PNPM (recomendado) ou NPM
- Uma conta no [Clerk](https://clerk.com) para autenticação
- Uma conta no [Unsplash](https://unsplash.com/developers) para as imagens
- Docker instalado

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Clerk Auth

```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

Database - Postgres

```bash
DATABASE_URL=
```

Local com docker compose

```bash
DATABASE_URL=postgresql://postgres_db:trello_db@localhost:4444/trello_db
```

Unsplash

```bash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
```

### 4. Conecte ao banco de dados

```bash
docker compose up
```

### 5. Execute as migrações do Prisma

```bash
pnpm prisma generate
pnpm prisma db push
```

### 6. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```
