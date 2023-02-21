import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Cards from "./pages/Cards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Navbar from "./components/navbar/NavBar";
import Gameboard from "./pages/Gameboard";
import Login from "./pages/Login";

function App() {
	return (
		<Router>
			<Navbar />


			<Switch>
				<Route path="/" components={Home} exact>
					<Home />
				</Route>

				<Route path="/About" components={About} exact>
					<About />
				</Route>

				<Route path="/ContactUs" components={ContactUs} exact>
					<ContactUs />
				</Route>

				<Route path="/Login" components={Login} exact>
					<Login />
				</Route>

				<Route path="/SignUp" components={SignUp} exact>
					<SignUp />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
