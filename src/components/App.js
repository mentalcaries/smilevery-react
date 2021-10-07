import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import NavBar from "./NavBar";
import Location from "./Location";
import Shop from "./Shop";
import Templates from "./Templates";
import Designer from "./Designer";
import Confirmation from "./Confirmation";
import PopupWithForm from "./PopupWithForm";
import Footer from "./Footer";


function App() {
  return (

    <div className="App">
      <div className="root">
        <Header />
        <div className="page">

          <NavBar className="navbar"/>
          <div className="page-content">
            <Switch>
              <Route exact path="/">
              <Location />
              </Route>
              <Route path="/shop">
              <Shop />
              </Route>
              <Route path="/templates">
              <Templates />
              </Route>
              <Route path="/designer">
              <Designer />
              </Route>
            </Switch>
            <PopupWithForm />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )

}

export default App