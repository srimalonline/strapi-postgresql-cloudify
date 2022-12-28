import { BrowserRouter as Router, Route, } from "react-router-dom";

//page and layout imports
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <Router>
    <div className="App">
      <SiteHeader />
        <Route path="/">
          <Homepage/>
        </Route>
        <Route path="/details/:id">
          <ReviewDetails/>
        </Route>
        <Route path="/category/:id">
          <Category/>
        </Route>
    </div>
    </Router>
  );
}

export default App;
