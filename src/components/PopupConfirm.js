import {Link} from 'react-router-dom';

function PopupConfirm({isOpen, onClose, onOutsideClick}) {
  return (
    <div
      className={`popup popup_type_confirm popup_opened ${isOpen ? 'popup_opened' : ''} 
  `}
    >
      <div className="popup__overlay" onClick={onOutsideClick}>
        <div className="popup__container">
          <button
            className="popup__close-btn"
            type="button"
            onClick={onClose}
          ></button>
          <div className="popup__items">
            <h2 className="popup__title">Success!</h2>
            <p className="popup__text">
              Your postcard was received by the shop and will be delivered
              shortly!
            </p>
            <p className="popup__text">Great work!</p>
              </div>
            <Link style={{maxWidth:"maxContent"}}to="/">
              <button
                className={`popup__save-btn popup__save-btn_type-confirm`}
                type="submit"
                name="Save"
                default="Save"
                onClick={onClose}
              >
                Deliver One More Smile
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
export default PopupConfirm;
