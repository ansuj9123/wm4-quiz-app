import React from "react";
import Sidebar from "./Sidebar";
import MenthorDashboard from "./MenthorDashboard";
import Student from "./Student";

function ContactUs() {
	return (
		<div>
			<Sidebar />
			<Student />
			<MenthorDashboard />
		</div>
	);
}

export default ContactUs;
