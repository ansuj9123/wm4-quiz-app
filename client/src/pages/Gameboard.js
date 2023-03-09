/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Gameboard.css";
import FinalScore from "./FinalScore";
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

	const [noOfCorrectQuestion, setNoOfCorrectQuestion] = useState(0);

	const [totalNoOfQuestion, setTotalNoOfQuestion] = useState();

	let randomIndexes = {
		0: "option_1",
		1: "option_2",
		2: "option_3",
		3: "answer",

		// classes
		classes: {
			option_1: "answer",
			option_2: "answer",
			option_3: "answer",
			answer: "answer option-3",
		},
		clickClasses: {
			option_1: "answer option-incorrect",
			option_2: "answer option-incorrect",
			option_3: "answer option-incorrect",
			answer: "answer option-3",
		},
	};

	async function getQuestions() {
		let res = await fetch("http://localhost:3100/api/questions");
		let data = await res.json();
		console.log(data);
		setAllQuestions([...data]);

		setTotalNoOfQuestion(data.length);



	}

	function generateRandomIndexes (){

		let cri = randomIndexes;

		for(let i = 0; i < 4; i++){
			let rand1 = Math.floor(Math.random() * 4);

			let temp = cri[`${rand1}`];

			cri[`${rand1}`] = cri[`${i}`];
			cri[`${i}`] = temp;
		}

		randomIndexes = cri;
	}

	generateRandomIndexes();


	function handleAnswerClick(optionSelected, status) {
		console.log(optionSelected);
		if (buttonClick.includes(true) !== true) {
			if (status) {
				isActive[optionSelected] = true;
				setIsActive([...isActive]);
				buttonClick[optionSelected] = true;

				setNoOfCorrectQuestion(noOfCorrectQuestion + 1);

				setButtonClick([...buttonClick]);
			} else {
				buttonClick[optionSelected] = true;
				setButtonClick([...buttonClick]);
			}
		}
	}


	useEffect(() => {
		getQuestions();

	},[]);



	{
		if(questionNumber == totalNoOfQuestion){
			return (
				<div>
					<FinalScore totalQuestion={totalNoOfQuestion} correctQuestion={noOfCorrectQuestion} />
				</div>
			);
		} else {
			return (
				<div className="quiz-container">
					<div className="question-container">
						{allQuestions[questionNumber]?.question_text}
					</div>

					<div className="answers-container">
						<div
							onClick={() => handleAnswerClick(0, false)}
							className={
								isActive[0]
									? randomIndexes.classes[randomIndexes["0"]]
									: "answer"
							}
							className={
								buttonClick[0]
									? randomIndexes.clickClasses[randomIndexes["0"]]
									: "answer"
							}
						>
							<RadioButtonUncheckedIcon />
							<div>{allQuestions[questionNumber]?.[randomIndexes["0"]]}</div>
						</div>

						<div
							onClick={() => handleAnswerClick(1, false)}
							className="answer"
							className={
								isActive[1]
									? randomIndexes.classes[randomIndexes["1"]]
									: "answer"
							}
							className={
								buttonClick[1]
									? randomIndexes.clickClasses[randomIndexes["1"]]
									: "answer"
							}
						>
							<CropDinIcon />
							<div>{allQuestions[questionNumber]?.[randomIndexes["1"]]}</div>
						</div>

						<div
							onClick={() => handleAnswerClick(2, false)}
							className="answer"
							className={
								isActive[2]
									? randomIndexes.classes[randomIndexes["2"]]
									: "answer"
							}
							className={
								buttonClick[2]
									? randomIndexes.clickClasses[randomIndexes["2"]]
									: "answer"
							}
						>
							<ChangeHistoryIcon />
							<div>{allQuestions[questionNumber]?.[randomIndexes["2"]]}</div>
						</div>

						<div
							onClick={() => handleAnswerClick(3, true)}
							className="answer"
							className={
								isActive[3]
									? randomIndexes.classes[randomIndexes["3"]]
									: "answer"
							}
							className={
								buttonClick[3]
									? randomIndexes.clickClasses[randomIndexes["3"]]
									: "answer"
							}
						>
							<StarBorderIcon />
							<div>{allQuestions[questionNumber]?.[randomIndexes["3"]]}</div>
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
	}






}

export default Gameboard;
