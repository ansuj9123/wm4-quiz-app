import Cards from "./Cards";
import React from "react";
import Sidebar from "./Sidebar";
import Gameboard from "./Gameboard";







function Home() {
	return (
		<div className="home">
			<h4>
				Welcome to <span style={{ color: "red" }}>CodeYourFuture</span> Quiz App
			</h4>
			<Cards />
			<Sidebar />
			<Gameboard />





		</div>
	);
}

export default Home;
