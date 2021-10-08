import {Link} from 'react-router-dom';

function PopupConfirm({isOpen, onClose, onOutsideClick}) {
  return (
    <div
      className={`popup popup_type_edit-card ${isOpen ? 'popup_opened' : ''} 
    `}
    >
      <div className="popup__overlay" onClick={onOutsideClick}>
        <div className="popup__container">
          <button
            className="popup__close-btn"
            type="button"
            onClick={onClose}
          ></button>
          <h2 className="popup__title">Your Smilevery Code</h2>
          <form
            className="popup__form"
            name="Edit Card"
            noValidate
            // onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="to"
              id="popup_to"
              placeholder="Your Smilevery Code"
              className={`popup__field `}
              minLength="2"
              maxLength="50"
              autoComplete="off"
              required
            />
            <p className="popup__text">
              The code was automatically copied to your clipboard.
            </p>
            <p className="popup__text">
              Don’t close this window until we inform you the postcard is
              received by our partner online-shop
            </p>

            <button
              className={`popup__save-btn`}
              onClick={onClose}
              name="Save"
              default="Save"
            >
              Go Shopping
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PopupConfirm;
