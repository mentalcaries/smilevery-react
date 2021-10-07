import React from 'react';
import {Link} from 'react-router-dom';

function Designer({onEditClick, selectedCard}) {

  return (
    <div >
      <h2 className="designer__title">Customise Your Card</h2>
      <div class="designer__preview">
        <div className="postcard"  style={{backgroundImage:`url('${selectedCard}')`}}>
          <div className="postcard__text">
            <p className="postcard__receiver">Dear John</p>
            <p className="postcard__body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque?{' '}
            </p>
            <p className="postcard__sender">Love Mary</p>
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
