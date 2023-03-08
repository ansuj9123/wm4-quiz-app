/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Gameboard.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CropDinIcon from "@mui/icons-material/CropDin";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

function Gameboard() {
	const [allQuestions, setAllQuestions] = useState([]);

	const [questionNumber, setQuestionNumber] = useState(0);

	const [isActive, setIsActive] = useState([false, false, false, false]);

	const [buttonClick, setButtonClick] = useState([false, false, false, false]);

	async function getQuestions() {
		let res = await fetch("http://localhost:3100/api/questions");
		let data = await res.json();
		console.log(data);
		setAllQuestions([...data]);
	}

	function handleAnswerClick(optionSelected, status) {
		console.log(optionSelected);
		if (buttonClick.includes(true) != true) {
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
		{allQuestions[questionNumber]?.question_text}
		</div>

		<div className="answers-container">
		<div onClick={() => handleAnswerClick(0, false)} className={isActive[0] ? "answer option-0" : "answer"}
		className={buttonClick[0] ? "answer option-incorrect" : "answer"}>

		<RadioButtonUncheckedIcon />
		<div>{allQuestions[questionNumber]?.option_1}</div>
		</div>

		<div onClick={() => handleAnswerClick(1, false)} className="answer"
		className={isActive[1] ? "answer option-1" : "answer"}
		className={buttonClick[1] ? "answer option-incorrect" : "answer"}>
		<CropDinIcon />
		<div>{allQuestions[questionNumber]?.option_2}</div>
		</div>

		<div onClick={() => handleAnswerClick(2, false)} className="answer"
		className={isActive[2] ? "answer option-2" : "answer"}
		className={buttonClick[2] ? "answer option-incorrect" : "answer"}>
		<ChangeHistoryIcon />
		<div>{allQuestions[questionNumber]?.option_3}</div>
		</div>

		<div
		onClick={() => handleAnswerClick(3, true)}
		className="answer"
		className={isActive[3] ? "answer option-3" : "answer"}>
						<div onClick={() => handleAnswerClick(1, false)}
						className="answer" className=
						{isActive[1] ? "answer option-1" : "answer"}
						className={buttonClick[1] ? "answer option-incorrect" : "answer"}>
						<StarBorderIcon />
						<div>{allQuestions[questionNumber]?.answer}</div>
					</div>
				</div>

				<Button
					className="bt"
					onClick={() => {
						setQuestionNumber(questionNumber + 1);

						setIsActive([false, false, false, false]);
						setButtonClick([false, false, false, false]);
					}}
					color="primary"
					variant="contained"
				>
					Next
				</Button>
			</div>
			</div>
	);
}

export default Gameboard;
