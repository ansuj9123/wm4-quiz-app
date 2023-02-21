import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

const App = () => ({
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
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
