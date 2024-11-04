import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import {migrate} from "drizzle-orm/neon-http/migrator";

// this loads environment variable from .env.local file
config({ path: ".env.local" });

// this creates a connection to ur Neon database using URL specified, i.e, DATABASE_URL
const sql = neon(process.env.DATABASE_URL!);
// this initializes the drizzle ORM using neon database connection
const db = drizzle(sql);

const main = async () => {
    try {
        await migrate(db,{migrationsFolder: "drizzle"});
    } catch(err) {
        console.error("Error during migration: ", err);
        process.exit(1);
    }
}

main();