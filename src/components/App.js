import React from "react";
import {Route, Switch} from "react-router";
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
  const [selectedCard, setSelectedCard] = React.useState("");
  const [isEditPopupOpen, setIsEditPopupOpen]= React.useState(false)
  const [cardText, setCardText]= React.useState("")  


  function handleCardSelect(clickedCard) {
    setSelectedCard(clickedCard);
  }
  console.log(selectedCard)

  function handleEditTextClick(){
    console.log("click")
    setIsEditPopupOpen(true)
  }

  function closePopups(){
    setIsEditPopupOpen(false)
  }

  return (
    <div className="App">
      <div className="root">
        <Header />
        <div className="page">
          <NavBar className="navbar" />
          <div className="page-content">
            <Switch>
              <Route exact path="/">
                <Location />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <Route path="/templates">
                <Templates onCardSelect={handleCardSelect} card={selectedCard}/>
              </Route>
              <Route path="/designer">
                <Designer selectedCard={selectedCard.image} onEditClick={handleEditTextClick}/>
              </Route>
              <Route path="/confirm">
              <Confirmation />
              </Route>
            </Switch>
            <PopupWithForm isOpen={isEditPopupOpen}/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
