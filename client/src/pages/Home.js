import Cards from "./Cards";
import React from "react";
// import Sidebar from "./Sidebar";
import "./Home.css";
import Layout from "./Layout";
import Footer from "./Footer";





function Home() {
	return (
		<div className="theHome">
			<h4 className="hTitle">
				Welcome to <span style={{ color: "red" }}>CodeYourFuture</span> Quiz App
			</h4>
			<Cards />
// 			<Sidebar />
			<Layout />
			<Footer />
		</div>
	);
}

export default Home;
