import React from "react";
// import Button from "@mui/material/Button";
import "./student.css";
// import UserType from "../pages/UserType"
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function BasicButtons() {
	return (
		<div className="stud" spacing={2} direction="row">
			<span className="theText">
				<p className="jsTag"><strong>Java Script</strong><br />Description: This will test your knowledge of JavaScript!</p>
				<ul className="links">
					<li className="basic-item">
						<Link to="/StartQuiz" className="basic">
            <strong>Difficulty: </strong>Basic
            <KeyboardArrowDownIcon style={{ marginBottom: "-11px", marginLeft: "8rem", fontSize: "2rem" }} />
						</Link>
					</li>
				</ul>
				<ul className="links">
					<li className="medium-item">
						<Link to="/StartQuiz" className="medium" >
            <strong>Difficulty: </strong>Medium
            <KeyboardArrowDownIcon style={{ marginBottom: "-11px", marginLeft: "107px", fontSize: "2rem" }} />
						</Link>
					</li>
				</ul>
				<ul className="links">
					<li className="challenging-item">
						<Link to="/StartQuiz" className="challenging">
            <strong>Difficulty: </strong>Challenging
            <KeyboardArrowDownIcon style={{ marginBottom: "-11px", marginLeft: "5rem", fontSize: "2rem" }} />
						</Link>
					</li>
				</ul>
			</span>
		</div>
	);
}
