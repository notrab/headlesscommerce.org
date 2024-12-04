// @ts-check
import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import tailwind from "@astrojs/tailwind";
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind()],
  output: "server",
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true,
    },
  }),
});
