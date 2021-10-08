
import React from 'react';
import {Link} from 'react-router-dom';
import html2canvas from 'html2canvas';



function Designer({onEditClick, selectedCard, postcard, onGenerateCanvas}) {
  const postcardRef = React.useRef();

  function generateCanvas() {
    html2canvas(postcardRef.current).then((canvas) => {
      onGenerateCanvas(canvas)
    });
  }

  return (
    <div>
      <h2 className="designer__title">Customise Your Card</h2>
      <div className="designer__preview">
        <div
          className="postcard"
          style={{backgroundImage: `url('${selectedCard}')`}}
          ref={postcardRef}
        >
          <div className="postcard__text">
            <p className="postcard__receiver">{postcard.recipient}</p>
            <p className="postcard__body">{postcard.message}</p>
            <p className="postcard__sender">{postcard.sender}</p>
          </div>
        </div>
      </div>
      <div className="designer__buttons">
        <button className="designer__button" onClick={onEditClick}>
          Edit Text
        </button>
        <Link to="/smilevery-react/templates">
          <button className="designer__button">Pick Another Template</button>
        </Link>
        <Link to="/smilevery-react/confirm">
          <button className="designer__button" onClick={generateCanvas}>
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Designer;
