function Confirmation({postcardCanvas}) {
  
  
  return (
    <div>
      <h2 className="designer__title">Confirmation</h2>
      <div class="designer__preview">
        <img src={postcardCanvas} alt="" />
      </div>
      <div className="designer__buttons">
        <button className="designer__button" >
          Confirm
        </button>

        <button className="designer__button">Back to Editing</button>
      </div>
    </div>
  );
}

export default Confirmation;
