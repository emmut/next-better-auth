import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { z } from "zod";

if (process.env.NODE_ENV !== "production") {
  config({ path: ".env.local" });
} else {
  config({ path: ".env" });
}

export const env = createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string().min(1),
    DATABASE_URL: z.string().min(1),
  },
  client: {},

  runtimeEnv: {
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
  },
});
