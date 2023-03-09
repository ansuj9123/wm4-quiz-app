

import React from "react";
import "./about.css";


function About() {
	return (
		<div>
			{/* <Sidebar />
		<TeacherCreateQuiz /> */}
			<h4>
				About <span style={{ color: "red" }}>CodeYourFuture</span> quiz app
			</h4>

			<p className="theTopic">
				We believe that learning should be fun, and that is why we have designed
				our app to be both informative and entertaining. Whether you are looking
				to brush up on the basics of JavaScript or master more advanced topics,
				our app has something for everyone.
			</p>
			<p className="theTopic">
				In addition to our quizzes, we also provide a range of resources and
				tools to help you improve your skills and advance your career. From
				tutorials and articles to community forums and job listings, we are
				committed to supporting you on your learning journey.
			</p>
			<p className="theTopic">
				So why not give our app a try and see how much you really know about
				JavaScript? Whether you are a student, a professional, or just someone
				who loves to learn, we are here to help you achieve your goals and reach
				your full potential.
			</p>
		</div>
	);
}

export default About;
