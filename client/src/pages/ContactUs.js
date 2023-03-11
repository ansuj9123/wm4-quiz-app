import React from "react";
import Sidebar from "./Sidebar";
import MenthorDashboard from "./MenthorDashboard";
import StartQuiz from "./StartQuiz";
import Student from "./Student";

function ContactUs() {
	return (
		<div>
			<Sidebar />
			<Student />
			<MenthorDashboard />
			<StartQuiz />
		</div>
	);
}

export default ContactUs;
