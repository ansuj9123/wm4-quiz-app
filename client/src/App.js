import React from "react";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./pages/Cards";
import Gameboard from "./pages/Gameboard";
import Home from "./pages/Home";
import About from "./pages/About";


// import Card
// import Home from "./components/pages/Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./components/pages/About";
// import ContactUs from "./components/pages/ContactUs";
// import Navbar from "./components/navbar/Navbar";
// import "./App.css";
// import Signup from "./components/Signup";

function App() {
	return (
		<Router>
			<Navbar />
			<Card />
		</Router>
	);

}

export default App;

			{/* <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/about" component={About} exact>
          <About />
        </Route>

        <Route path="/contact" component={ContactUs} exact>
          <ContactUs />
        </Route>

        <Route path="/signUp" component={Signup} exact>
          <Signup />
        </Route>

        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/" component={Home} exact>
          <Home />
        </Route>
      </Switch> */}
