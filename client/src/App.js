import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Cards from "./pages/Cards";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";

import Gameboard from "./pages/Gameboard";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<NavBar />

			<Routes>
				<Route exact path="/" element={<Home />}></Route>

				<Route exact path="/About" element={<About />}></Route>

				<Route exact path="/ContactUs" element={<ContactUs />}></Route>

				<Route exact path="/Login" element={<Login />}></Route>

				<Route exact path="/SignUp" element={<SignUp />}></Route>
			</Routes>
		</>
	);
}

export default App;
