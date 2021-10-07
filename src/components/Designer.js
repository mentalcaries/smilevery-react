import React from 'react';
import {Link} from 'react-router-dom';

function Designer({onEditClick, selectedCard, postcard}) {

  return (
    <div >
      <h2 className="designer__title">Customise Your Card</h2>
      <div class="designer__preview">
        <div className="postcard"  style={{backgroundImage:`url('${selectedCard}')`}}>
          <div className="postcard__text">
            <p className="postcard__receiver">{postcard.recipient}</p>
            <p className="postcard__body">
              {postcard.message}
            </p>
            <p className="postcard__sender">{postcard.sender}</p>
          </div>
        </div>
      </div>
      <div className="designer__buttons">
        <button className="designer__button" onClick={onEditClick}>Edit Text</button>
        <Link to="/templates">
          <button className="designer__button">Pick Another Template</button>
        </Link>
        <button className="designer__button">Finish</button>
      </div>
    </div>
  );
}

export default Designer;
