import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "students",
  password: "12qwaszx",
  port: 5432,
});

export default pool;
