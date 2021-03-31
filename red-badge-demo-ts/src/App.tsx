import React from "react";
import Contact from "./components/Contact.jsx";
import MainPage from "./components/MainPage";
import SiteBar from "./components/Navbar.jsx";
import Store from "./components/Store.jsx";
import {Route, Switch} from "react-router-dom"
function App() {
  return (
    <div>
      <SiteBar />
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/store" component={Store} />
      </Switch>
    </div>
  );
}

export default App;
