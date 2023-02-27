import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import Home from "../../pages/Home";
// import About from "../../pages/About";
// import ContactUs from "../../pages/ContactUs";
// import Login from "../../pages/Login";

function NavBar() {
	return (
		<nav className="nav-bar">
			<h3 className="logo">Logo</h3>
			<ul className="nav-links">
				<Link to="/" className="home">
					<li>Home</li>
				</Link>

				<Link to="/About" className="about">
					<li>About</li>
				</Link>

				<Link to="/ContactUs" className="contact">
					<li>Contact Us</li>
				</Link>

				<Link to="/Login" className="Login">
					<li>Log in</li>
				</Link>
				<Link to="/SignUp" className="signup">
					<li>Sign Up</li>
				</Link>
			</ul>
		</nav>
	);
}

export default NavBar;
