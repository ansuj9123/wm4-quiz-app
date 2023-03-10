/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Gameboard.css";
import FinalScore from "./FinalScore";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CropDinIcon from "@mui/icons-material/CropDin";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";

function Gameboard() {
	const [allQuestions, setAllQuestions] = useState([]);

	const [questionNumber, setQuestionNumber] = useState(0);

	const [selectedIndex, setSelectedIndex] = useState(-1);

	const [noOfCorrectQuestion, setNoOfCorrectQuestion] = useState(0);

	const [totalNoOfQuestion, setTotalNoOfQuestion] = useState();

	const [answerOrder, setAnswerOrder] = useState([
		"answer",
		"option_1",
		"option_2",
		"option_3",
	]);

	async function getQuestions() {
		let res = await fetch("http://localhost:3100/api/questions");
		let data = await res.json();
		console.log(data);
		setAllQuestions([...data]);

		setTotalNoOfQuestion(data.length);
	}

	function handleAnswerClick(index) {
		console.log(index);
		if (selectedIndex === -1) {
			if (answerOrder[index] === "answer") {
				setNoOfCorrectQuestion(noOfCorrectQuestion + 1);
			}
			setSelectedIndex(index);
		}
	}

	
	const shuffleAnswers = useCallback(() => {
		let newArray = answerOrder;

		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = newArray[i];
			newArray[i] = newArray[j];
			newArray[j] = temp;
		}

		setAnswerOrder(newArray);
	}, [answerOrder]);

	useEffect(() => {
		getQuestions();
		shuffleAnswers();
	}, [shuffleAnswers]);

	const setClassName = (index) => {
		let className = "";

		if (selectedIndex !== -1) {
			className +=
				answerOrder[index] === "answer"
					? " option-correct"
					: " option-incorrect";
		}

		if (selectedIndex === index) {
			className += " selected-answer";
		}

		return className;
	};

	if (questionNumber === totalNoOfQuestion) {
		return (
			<div>
				<FinalScore
					totalQuestion={totalNoOfQuestion}
					correctQuestion={noOfCorrectQuestion}
				/>
			</div>
		);
	} else {
		return (
			<>
				{allQuestions[questionNumber] ? (
					<div className="quiz-container">
						<div className="question-container">
							{allQuestions[questionNumber]["question_text"]}
						</div>

						<div className="answers-container">
							<div
								onClick={() => handleAnswerClick(0)}
								className={`answer ${setClassName(0)}`}
							>
								<RadioButtonUncheckedIcon />
								<div>{allQuestions[questionNumber][answerOrder["0"]]}</div>
							</div>

							<div
								onClick={() => handleAnswerClick(1)}
								className={`answer ${setClassName(1)}`}
							>
								<CropDinIcon />
								<div>{allQuestions[questionNumber][answerOrder["1"]]}</div>
							</div>

							<div
								onClick={() => handleAnswerClick(2)}
								className={`answer ${setClassName(2)}`}
							>
								<ChangeHistoryIcon />
								<div>{allQuestions[questionNumber][answerOrder["2"]]}</div>
							</div>

							<div
								onClick={() => handleAnswerClick(3)}
								className={`answer ${setClassName(3)}`}
							>
								<StarBorderIcon />
								<div>{allQuestions[questionNumber][answerOrder["3"]]}</div>
							</div>

							<Button
								className="bt"
								onClick={() => {
									setQuestionNumber(questionNumber + 1);
									setSelectedIndex(-1);
									shuffleAnswers();
								}}
								color="primary"
								variant="contained"
							>
								Next
							</Button>
						</div>
					</div>
				) : null}
			</>
		);
	}
}

export default Gameboard;
