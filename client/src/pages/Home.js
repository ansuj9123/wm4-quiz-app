import Cards from "./Cards";
import React from "react";
import Sidebar from "./Sidebar";
import "./Home.css";


function Home() {
	return (
		<div className="theHome">
			<h4 className="hTitle">
				Welcome to <span style={{ color: "red" }}>CodeYourFuture</span> Quiz App
			</h4>
			<Cards />
			<Sidebar />
		</div>
	);
}

export default Home;
