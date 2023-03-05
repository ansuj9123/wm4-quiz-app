import Cards from "./Cards";
import React from "react";
import Sidebar from "./Sidebar";
import Question from "./question/Question";


function Home() {
	return (
		<div className="home">
			<Cards />

			<Sidebar />
		</div>
	);
}

export default Home;
