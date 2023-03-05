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