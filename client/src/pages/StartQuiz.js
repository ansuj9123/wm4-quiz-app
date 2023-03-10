import React from "react";
import "./startquiz.css";
import { useNavigate } from "react-router-dom";

function StartQuiz() {
	const navigate = useNavigate();

	const buttonClick = () => {
		navigate("/Gameboard");
	};

	return (
		<div className="startQuiz-container">
			<div className="quiz">
				<div className="btn-quiz">
					<button onClick={buttonClick} className="Quiz-button">
						<i>Start Quiz</i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default StartQuiz;
