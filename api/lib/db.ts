import { createClient } from "@libsql/client/web";
const client = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.DB_TOKEN!,
});
export const db = client;
