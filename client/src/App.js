import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Gameboard from "./pages/Gameboard";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Student from "./pages/Student";
import StartQuiz from "./pages/StartQuiz";

function App() {
	return (
		<>
			<NavBar />

			<Routes>
				<Route exact path="/" element={<Home />}></Route>

				<Route exact path="/About" element={<About />}></Route>

				<Route exact path="/ContactUs" element={<ContactUs />}></Route>

				<Route exact path="/Login" element={<Login />}></Route>

				{/* <Route exact path="/Quizzes" element={<Quizzes />}></Route> */}

				<Route exact path="/Gameboard" element={<Gameboard />}></Route>
				<Route exact path="/Student" element={<Student />}></Route>
				<Route exact path="/success" element={<Success />}></Route>
				<Route exact path="/SignUp" element={<SignUp />}></Route>
				<Route exact path="/StartQuiz" element={<StartQuiz />}></Route>
			</Routes>
		</>
	);
}

export default App;
