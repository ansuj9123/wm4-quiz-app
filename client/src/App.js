
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./pages/Cards";
import Gameboard from "./pages/Gameboard";
import Home from "./pages/Home";
import About from "./pages/About";




function App() {
	return (
		<Router>
			<Navbar />
			<Card />
		</Router>
	);

}



import About from "./pages/About";
import RegistrationForm from "./components/RegistrationForm";

const App = () => (
	<div>
		<About />
		<RegistrationForm />
	</div>
);


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
