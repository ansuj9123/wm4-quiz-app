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
				<p className="jsTag"><strong>&lt; Java Script &gt; <br /> &lt; NodeJS &gt;<br />&lt; SQL &gt;</strong><br />Description: This will test your knowledge!</p>
				<ul className="links">
					<li className="basic-item">
						<Link to="/StartQuiz" className="basic">
            <strong>Category: </strong>JacaScript
            <KeyboardArrowDownIcon style={{ marginBottom: "-11px", marginLeft: "8rem", fontSize: "2rem" }} />
						</Link>
					</li>
				</ul>
				<ul className="links">
					<li className="medium-item">
						<Link to="/StartQuiz" className="medium" >
            <strong>Category: </strong>Node JS
            <KeyboardArrowDownIcon style={{ marginBottom: "-11px", marginLeft: "8rem", fontSize: "2rem" }} />
						</Link>
					</li>
				</ul>
				<ul className="links">
					<li className="challenging-item">
						<Link to="/StartQuiz" className="challenging">
            <strong>Category: </strong>SQL
            <KeyboardArrowDownIcon style={{ marginBottom: "-11px", marginLeft: "9rem", fontSize: "2rem" }} />
						</Link>
					</li>
				</ul>
			</span>
		</div>
	);
}