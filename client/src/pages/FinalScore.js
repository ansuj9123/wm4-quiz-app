import React from "react";
import { Link } from "react-router-dom";
import "./finalscore.css";

function FinalScore() {
  return (
		<div className="final-scores">
			<div className="score-container">
				<div className="score">
					<p>Score</p>
					<p>
                        score total
					</p>
				</div>
				<div className="return-to-quiz">
					<Link>
						<h6>Return to Quiz List</h6>
					</Link>
					<br></br>
					<Link>
						<h6>Return HomePage</h6>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FinalScore;
