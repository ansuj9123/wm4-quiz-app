// import { Pool } from "pg";

// import config from "./utils/config";
// import logger from "./utils/logger";

// const pool = new Pool({
// 	connectionString: config.dbUrl,
// 	connectionTimeoutMillis: 5000,
// 	ssl: config.dbUrl.includes("localhost")
// 		? false
// 		: { rejectUnauthorized: false },
// });

// export const connectDb = async () => {
// 	let client;
// 	try {
// 		client = await pool.connect();
// 	} catch (err) {
// 		logger.error("%O", err);
// 		process.exit(1);
// 	}
// 	logger.info("Postgres connected to %s", client.database);
// 	client.release();
// };

// export const disconnectDb = () => pool.end();

// /**
//  * Access this with `import db from "path/to/db";` then use it with
//  * `await db.query("<SQL>", [...<variables>])`.
//  */
// export default {
// 	query: (...args) => {
// 		logger.debug("Postgres querying %O", args);
// 		return pool.query.apply(pool, args);
// 	},
// };

const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = async () => {
	try {
		const client = new Client({
			user: process.env."ansuj9123",
			host: process.env."localhost",
			database: process.env.PGDATABASE,
			password: process.env.PGPASSWORD,
			port: process.env.PGPORT,
		});
		await client.connect();
		const res = await client.query("SELECT * FROM some_table");
		console.log(res);
		await client.end();
	} catch (error) {
		console.log(error);
	}
};

connectDb();



