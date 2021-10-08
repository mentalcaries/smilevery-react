import React from 'react';
import {Route, Switch} from 'react-router';
import Header from './Header';
import NavBar from './NavBar';
import Location from './Location';
import Shop from './Shop';
import Templates from './Templates';
import Designer from './Designer';
import Confirmation from './Confirmation';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';
import PopupConfirm from './PopupConfirm';

function App() {
  const [selectedCard, setSelectedCard] = React.useState('');
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setisConfirmPopupOpen] = React.useState(false);
  const [postcardText, setPostcardText] = React.useState('');
  const [postcardCanvas, setPostcardCanvas] = React.useState('');

  function handleCardSelect(clickedCard) {
    setSelectedCard(clickedCard);
  }

  function handleEditTextClick() {
    setIsEditPopupOpen(true);
  }

  function handleConfirmclick() {
    setisConfirmPopupOpen(true);
  }

  function closePopups() {
    setIsEditPopupOpen(false);
    setisConfirmPopupOpen(false)
    document.removeEventListener('keydown', handleEscape);
  }

  function handleTextSubmit(postcard) {
    setPostcardText(postcard);
    closePopups();
  }

  if (isEditPopupOpen) {
    document.addEventListener('keydown', handleEscape);
  }

  function handleEscape(evt) {
    if (evt.key === 'Escape') {
      closePopups();
    }
  }

  function handleOutsideClick(evt) {
    if (evt.target.className === 'popup__overlay') {
      closePopups();
    }
  }

  function handleGeneratedCanvas(canvas) {
    setPostcardCanvas(canvas.toDataURL());
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
                <Templates
                  onCardSelect={handleCardSelect}
                  card={selectedCard}
                />
              </Route>
              <Route path="/designer">
                <Designer
                  selectedCard={selectedCard.image}
                  onEditClick={handleEditTextClick}
                  postcard={postcardText}
                  onGenerateCanvas={handleGeneratedCanvas}
                />
              </Route>
              <Route path="/confirm">
                <Confirmation postcardCanvas={postcardCanvas} onConfirmClick={handleConfirmclick}/>
              </Route>
            </Switch>
            <PopupWithForm
              onSubmit={handleTextSubmit}
              isOpen={isEditPopupOpen}
              onClose={closePopups}
              onOutsideClick={handleOutsideClick}
            />
            <PopupConfirm
              isOpen={isConfirmPopupOpen}
              onClose={closePopups}
              onOutsideClick={handleOutsideClick}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
