import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";

function TeacherCreateQuiz() {

	// const navigate = useNavigate();

  return (
		<Stack spacing={6} direction="column">
			<Button href="/Gameboard" className="contained-btn" variant="contained">
				Create Quiz
			</Button>
			<Button className="outlined-btn" variant="contained">
				Edit Quiz
			</Button>

		</Stack>
	);
}

export default TeacherCreateQuiz;
