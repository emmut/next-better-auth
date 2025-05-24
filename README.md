# Next.js Better Auth

This is a Next.js project that demonstrates authentication using the `better-auth` library with Drizzle ORM for database operations. It provides a clean, modern authentication system for Next.js applications.

## Features

- Authentication using the `better-auth` library
- Email and password authentication
- Protected routes
- Dashboard area
- SQLite database with Drizzle ORM
- TypeScript support
- Tailwind CSS for styling
- Modern React (v19) features

## Requirements

- Node.js 18.17.0 or later
- pnpm (recommended package manager)

## Getting Started

1. Use [degit](https://github.com/Rich-Harris/degit) to scaffold the project:

```bash
pnpm dlx degit --mode=git git@github.com:compileit-ab/compileit-start-web.git my-app
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
- `DB_FILE_NAME`: Path to the SQLite database file (default: `file:local.db`)

4. Run the migrations:

```bash
pnpm db:migrate
```

5. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup

This project uses Drizzle ORM with SQLite. Database migrations are managed with Drizzle Kit.

### Available Database Commands

- `pnpm db` - Run drizzle-kit CLI directly (use with additional flags)
- `pnpm db:generate` - Generate migration files from schema changes
- `pnpm db:migrate` - Apply migrations to the database
- `pnpm db:push` - Push schema changes directly to database (development)
- `pnpm db:studio` - Open Drizzle Studio (database browser)
- `pnpm db:check` - Check migration consistency

### Workflow for Schema Changes

1. **Development workflow** (recommended for local development):
   ```bash
   # Make changes to your schema in src/db/schema.ts
   pnpm db:push  # Push changes directly to database
   ```

2. **Migration workflow** (recommended for production):
   ```bash
   # Make changes to your schema in src/db/schema.ts
   pnpm db:generate  # Generate migration files
   pnpm db:migrate   # Apply migrations to database
   ```

### Database Schema

The application includes the following models:

- **User**: User accounts with authentication details
- **Session**: User sessions for authentication
- **Account**: OAuth and authentication provider accounts
- **Verification**: Email verification and password reset tokens

To use drizzle studio:

```bash
pnpm db:studio
```

To use drizzle-kit with custom commands:

```bash
pnpm db --help
pnpm db introspect
pnpm db drop
```

## Scripts

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check for issues
- `pnpm format` - Format the code with Prettier
- `pnpm format:check` - Check code formatting without making changes

### Database Scripts

- `pnpm db` - Run drizzle-kit CLI with custom commands
- `pnpm db:generate` - Generate migration files from schema changes
- `pnpm db:migrate` - Apply migrations to database
- `pnpm db:push` - Push schema changes directly (development)
- `pnpm db:studio` - Open Drizzle Studio
- `pnpm db:check` - Check migration consistency

## Project Structure

```
/
├── src/
│   ├── actions/      # Server actions
│   ├── app/          # Next.js app router
│   ├── components/   # Reusable UI components
│   ├── db/           # Database setup and schema
│   └── lib/          # Utility functions and configurations
├── drizzle/          # Database migrations
├── public/           # Static assets
└── ...configuration files
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [better-auth Documentation](https://github.com/your-package/better-auth)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)

## License

MIT
