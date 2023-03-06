import { Router } from "express";

import logger from "./utils/logger";
// import { handleSignUp } from "./controllers/SignUp";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/quiz", (req, res) => {
	db.query("SELECT * FROM quiz")
		.then((result) => {
			res.json(result.rows);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

router.post("/signup", async(req, res) => {
	const {firstname, lastname, email, password, role} = req.body;
	try{
		const oldUser = await db.query(
			"SELECT * FROM users WHERE username = $1", [username]
		);
				if (oldUser.rowCount > 0) {
			return res.status(200).send("Username already exists");
			}
		
			const result = await db.query(
			"INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5)", [firstname, lastname, email, password, role]);
			res.status(200).send("User created successfully");
			return;
	 } catch(error) {
		res.status(500).send("something went wrong");
	 }
});


router.get("/questions", (req, res) => {
	db.query("SELECT * FROM questions")
		.then((result) => {
			res.json(result.rows);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});
export default router;
