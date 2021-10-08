function Confirmation({postcardCanvas, onConfirmClick}) {

  
  return (
    <div>
      <h2 className="designer__title">Confirmation</h2>
      <p className="designer__text">Click “Confirm” if you’re happy with the final result and “Back” if you’d like to make changes. </p>
      <div className="designer__preview">
        <img className="designer__postcard" src={postcardCanvas} alt="" />
      </div>
      <div className="designer__buttons">
        <button className="designer__button" onClick={onConfirmClick} >
          Confirm
        </button>

        <button className="designer__button">Back to Editing</button>
      </div>
    </div>
  );
}

export default Confirmation;
