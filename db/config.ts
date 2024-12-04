import { column, defineDb, defineTable } from "astro:db";

const Product = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    logo: column.text(),
    category: column.text(),
    website: column.text(),
    launchYear: column.number(),
    hasFreeTier: column.boolean({ default: false }),
  },
});

export default defineDb({
  tables: { Product },
});
