# Next.js Better Auth

This is a Next.js project that demonstrates authentication using the `better-auth` library with Prisma ORM for database operations. It provides a clean, modern authentication system for Next.js applications.

## Features

- Authentication using the `better-auth` library
- Email and password authentication
- Protected routes
- Dashboard area
- SQLite database with Prisma ORM
- TypeScript support
- Tailwind CSS for styling
- Modern React (v19) features

## Requirements

- Node.js 18.17.0 or later
- pnpm (recommended package manager)

## Getting Started

1. Use [degit](https://github.com/Rich-Harris/degit) to scaffold the project:

```bash
pnpm dlx degit --mode=git git@github.com/compileit-ab/compileit-start-web.git my-app
```

Change `my-app` to the desired folder name.

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

Copy the `.env.example` file to `.env.local` and fill in the required values:

```bash
cp .env.example .env.local
```

Required environment variables:
- `BETTER_AUTH_SECRET`: Random value used by the library for encryption and generating hashes. Use `openssl rand -base64 32` to generate a new value.
- `DATABASE_URL`: Path to the SQLite database file (default: `file:./local.db`)

4. Generate the Prisma client:

```bash
pnpm db:generate
```

5. Push the database schema:

```bash
pnpm db:push
```

6. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup

This project uses Prisma ORM with SQLite. Database operations are managed with Prisma CLI.

### Available Database Commands

- `pnpm db` - Run Prisma CLI directly (use with additional flags)
- `pnpm db:generate` - Generate the Prisma client
- `pnpm db:push` - Push schema changes to the database
- `pnpm db:migrate` - Create and run migrations
- `pnpm db:studio` - Open Prisma Studio (database browser)
- `pnpm db:reset` - Reset the database and run all migrations
- `pnpm db:seed` - Run database seeding (if configured)

### Database Schema

The application includes the following models:

- **User**: User accounts with authentication details
- **Session**: User sessions for authentication
- **Account**: OAuth and authentication provider accounts
- **Verification**: Email verification and password reset tokens

### Making Schema Changes

1. Edit the schema in `prisma/schema.prisma`
2. Generate the client: `pnpm db:generate`
3. For development, push changes: `pnpm db:push`
4. For production, create a migration: `pnpm db:migrate`

### Using Prisma CLI Directly

```bash
pnpm db --help
pnpm db validate
pnpm db format
pnpm db introspect
```

## Scripts

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check for issues
- `pnpm format` - Format the code with Prettier
- `pnpm format:check` - Check code formatting without making changes

### Database Scripts

- `pnpm db` - Run Prisma CLI with custom commands
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema to database
- `pnpm db:migrate` - Create and run migrations
- `pnpm db:studio` - Open Prisma Studio
- `pnpm db:reset` - Reset database
- `pnpm db:seed` - Seed database

## Project Structure

```
/
├── src/
│   ├── actions/          # Server actions
│   ├── app/              # Next.js app router
│   ├── components/       # Reusable UI components
│   ├── generated/prisma/ # Generated Prisma client
│   ├── lib/              # Utility functions and configurations
│   └── env.ts            # Environment variable validation
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
└── ...configuration files
```

## Environment Variables

The project uses environment variable validation with Zod. All required variables are defined in `src/env.ts`:

- `BETTER_AUTH_SECRET` - Secret key for authentication
- `DATABASE_URL` - Database connection string

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

## License

MIT
