/* eslint-disable no-unused-vars */
// const pool = require("./db");

const express = require("express");
const app = express();
app.use(express.json());
const { Pool } = require("pg");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const cors = require("cors");
const bcrypt = require("bcrypt");
const secret = "mysecret";

app.use(
	cors({
		origin: "*",
		methods: "GET, POST, PUT, DELETE, OPTIONS",
		headers: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
		credentials: true,
	})
);

const pool = new Pool({
	user: "",
	host: "",
	database: "",
	password: "",
	port: 5432,
});

app.post(
	"/register",
	[
		check("email", "Please include a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
		check("firstName", "Please enter a first name").isLength({ min: 1 }),
		check("lastName", "Please enter a last name").isLength({ min: 1 }),
	],
	async (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		);
		res.setHeader(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Authorization"
		);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password, firstName, lastName } = req.body;

		try {
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);
			const result = await pool.query(
				"SELECT * FROM trainees WHERE email = $1",
				[email]
			);
			if (result.rows.length > 0) {
				return res
					.status(400)
					.json({ errors: [{ msg: "User already exists" }] });
			}

			const query =
				"INSERT INTO users (email, password, firstName, lastName) VALUES ($1, $2, $3, $4)";
			const values = [email, hashedPassword, firstName, lastName];
			await pool.query(query, values);
			res.status(201).json({ msg: "User created" });
		} catch (err) {
			//eslint-disable-next-line
			console.error(err);
			res.status(500).json({ errors: [{ msg: "Server error" }] });
		}
	}
);

// Provide allows registered users to log in by providing their email and password.
// If the credentials are valid,

//the server returns a JWT that can be used to authenticate subsequent requests.
app.post("/login", async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, OPTIONS"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { email, password } = req.body;

	try {
		const result = await pool.query("SELECT * FROM user WHERE email = $1", [
			email,
		]);
		if (result.rows.length === 0) {
			return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
		}

		const user = result.rows[0];
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
		} else {
			const payload = {
				user: {
					id: user.id,
				},
			};
			jwt.sign(payload, secret, { expiresIn: 360000 }, (err, token) => {
				if (err) {
					throw err;
				} else {
				res.json({
					id: user.id,
					name: user.name,
					email: user.email,
					token: token,
				});
			}
			});
		}
	} catch (err) {
		res.status(500).json({ errors: [{ msg: "Server error" }] });
	}
});




app.listen(3001, () => {
	//eslint-disable-next-line
	console.log("Server has started on port 3001");
});