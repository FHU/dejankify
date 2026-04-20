import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

// Keep Next.js and Prisma aligned on the same local env file.
loadEnv({ path: ".env.local" });
loadEnv();

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
