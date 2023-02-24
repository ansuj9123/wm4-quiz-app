import "./Gameboard.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CropDinIcon from "@mui/icons-material/CropDin";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const apiUrl =
	"https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

function Gameboard() {
	const [questions, setQuestions] = useState([]);

	const [questionNumber, setQuestionNumber] = useState(0);

	async function getQuestions() {
		let res = await fetch(apiUrl);
		let data = await res.json();
		console.log(data);
		setQuestions(data.results);
	}

	useEffect(() => {
		getQuestions();
	}, []);

	return (
		<div className="quiz-container">
			<div className="question-container">
				{questions[questionNumber]?.question}
			</div>

			<div className="answers-container">
				<div className="answer">
					<RadioButtonUncheckedIcon />
					<div>{questions[questionNumber]?.incorrect_answers[0]}</div>
				</div>

				<div className="answer">
					<CropDinIcon />
					<div>{questions[questionNumber]?.incorrect_answers[1]}</div>
				</div>

				<div className="answer">
					<ChangeHistoryIcon />
					<div>{questions[questionNumber]?.incorrect_answers[2]}</div>
				</div>

				<div className="answer">
					<StarBorderIcon />
					<div>{questions[questionNumber]?.correct_answer}</div>
				</div>
			</div>

			<Button
				className="bt"
				onClick={() => setQuestionNumber(questionNumber + 1)}
				color="primary"
				variant="success"
			>
				Next
			</Button>
		</div>
	);
}

export default Gameboard;
