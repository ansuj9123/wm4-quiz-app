import Cards from "./Cards";
import React from "react";
import Sidebar from "./Sidebar";








function Home() {
	return (
		<div className="home">
			<h4>
				Welcome to <span style={{ color: "red" }}>CodeYourFuture</span> Quiz App
			</h4>
			<Cards />
			<Sidebar />





		</div>
	);
}

export default Home;
