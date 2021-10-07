import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import NavBar from "./NavBar";
import Location from "./Location";
import Shop from "./Shop";
import Templates from "./Templates";
import Designer from "./Designer";
import Confirmation from "./Confirmation";


function App(){
  return(

    <div className="App">
      <div className="root">
          <Header/>
        <div className="page-content">

          <NavBar/><div>
          <Location/>
          <Shop/>
          <Templates/>
          <Designer/>

          </div>


        </div>
      </div>
    </div>
  )

}

export default App