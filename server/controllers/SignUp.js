const { Pool } = require("pg");

const pool = new Pool({
	user: process.env.USERNAME,
	host: process.env.DATABASE_URL,
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
	port: 5432,
});

export const SignUp = (req, res) => {
	// pool.query("YOUR SQL QUERY GOES HERE")
	//   .then((result) => res.json(result.rows))
	//   .catch((error) => {
	//     // eslint-disable-next-line no-console
	//     console.error(error);
	//     res.status(500).json(error);
	//   });
};
