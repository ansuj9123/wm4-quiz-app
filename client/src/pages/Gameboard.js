import "./Gameboard.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CropDinIcon from "@mui/icons-material/CropDin";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const apiUrl = "http://localhost:8000/api/students/quizData";

function Gameboard() {
	const [questions, setQuestions] = useState([]);

	const [questionNumber, setQuestionNumber] = useState(0);

	const [isActive, setIsActive] = useState([false,false,false,false]);

	const [buttonClick, setButtonClick] = useState([false,false,false,false]);

	async function getQuestions() {
		let res = await fetch(apiUrl);
		let data = await res.json();
		console.log(data);
		setQuestions(data.results);
	}

	function handleAnswerClick(optionSelected,status){
		console.log(optionSelected);
		if(buttonClick.includes(true) == true){

		} else{
			if (status) {
				isActive[optionSelected] = true;
				setIsActive([...isActive]);
				buttonClick[optionSelected] = true;
				setButtonClick([...buttonClick]);
			} else {
				buttonClick[optionSelected] = true;
				setButtonClick([...buttonClick]);
			}
		}


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
				<div
					onClick={() => handleAnswerClick(0, false)}
					className={isActive[0] ? "option-0" : "answer"}
					className={buttonClick[0] ? "option-incorrect" : "answer"}
				>
					<RadioButtonUncheckedIcon />
					<div>{questions[questionNumber]?.incorrect_answers[0]}</div>
				</div>

				<div
					onClick={() => handleAnswerClick(1, false)}
					className="answer"
					className={isActive[1] ? "option-1" : "answer"}
					className={buttonClick[1] ? "option-incorrect" : "answer"}
				>
					<CropDinIcon />
					<div>{questions[questionNumber]?.incorrect_answers[1]}</div>
				</div>

				<div
					onClick={() => handleAnswerClick(2, false)}
					className="answer"
					className={isActive[2] ? "option-2" : "answer"}
					className={buttonClick[2] ? "option-incorrect" : "answer"}
				>
					<ChangeHistoryIcon />
					<div>{questions[questionNumber]?.incorrect_answers[2]}</div>
				</div>

				<div
					onClick={() => handleAnswerClick(3, true)}
					className="answer"
					className={isActive[3] ? "option-3" : "answer"}

				>
					<StarBorderIcon />
					<div>{questions[questionNumber]?.correct_answer}</div>
				</div>
			</div>

			<Button
				className="bt"
				onClick={() => {
 setQuestionNumber(questionNumber + 1);

				setIsActive([false,false,false,false]);
				setButtonClick([false,false,false,false]);
				}}
				color="primary"
				variant="contained"
			>
				Next
			</Button>
		</div>
	);
}

export default Gameboard;
