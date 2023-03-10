import { Router } from "express";

const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
import logger from "./utils/logger";
import db from "./db";
import bcrypt from "bcrypt";

const secret = "mysecret";
const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.post(
	"/register",
	[
		check("email", "Please include a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { first_name, last_name, email, password, role } = req.body;
		try {
			let user = await db.query("SELECT * FROM users WHERE email = $1", [
				email,
			]);
			if (user.rows.length > 0) {
				return res
					.status(400)
					.json({ errors: [{ msg: "User already exists" }] });
			}
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);
			const newUser = await db.query(
				"INSERT INTO users (first_name,last_name,email,password,role) VALUES ($1,$2,$3,$4,$5) RETURNING *",
				[first_name, last_name, email, hashedPassword, role]
			);
			const payload = {
				user: {
					id: newUser.rows[0].id,
					role: newUser.rows[0].role, // add role to payload
				},
			};
			jwt.sign(payload, secret, { expiresIn: 360000 }, (err, token) => {
				if (err) {
					throw err;
				}
				res.json({ token });
			});
		} catch (err) {
			logger.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

router.post(
	"/login",
	[
		check("email", "Please include a valid email").isEmail(),
		check("password", "Password is required").exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { email, password } = req.body;
		try {
			let user = await db.query("SELECT * FROM users WHERE email = $1", [
				email,
			]);
			if (user.rows.length === 0) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials" }] });
			}
			const isMatch = await bcrypt.compare(password, user.rows[0].password);
			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials" }] });
			}
			const payload = {
				user: {
					id: user.rows[0].id,
					role: user.rows[0].role, // add role to payload
				},
			};
			jwt.sign(payload, secret, { expiresIn: 360000 }, (err, token) => {
				if (err) {
					throw err;
				}
				res.json({ token });
			});
		} catch (err) {
			logger.error(err.message);
			res.status(500).send("Server error");
		}
	}
);


export default router;
