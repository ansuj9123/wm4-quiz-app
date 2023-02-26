import { Router } from "express";

import logger from "./utils/logger";
import { handleSignUp } from "./controllers/SignUp";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

/**
 * this is for signup
 */
router.post("/signup", handleSignUp);

router.post("/login", (req, res) => {
	res.json({ status: "success" });
});

router.post("/quiz/create", (req, res) => {
	res.json({ status: "success" });
});

router.post("/quiz/edit", (req, res) => {
	res.json({ status: "success" });
});

router.delete("/quiz/delete/:id", (req, res) => {
	res.json({ status: "success" });
});

router.get("/quiz/:id", (req, res) => {
	res.json({ status: "success" });
});

router.get("/student/quiz", (req, res) => {
	res.json({ status: "success" });
});

router.post("/student/:id/quiz/:quizId/save", (req, res) => {
	res.json({ status: "success" });
});

router.get("/student/qu", (req, res) => {
	res.json({ status: "success" });
});



export default router;
