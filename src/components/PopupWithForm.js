import React from 'react';

function PopupWithForm({isOpen, onOutsideClick, onClose, onSubmit}) {
  const [recipientName, setRecipientName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [senderName, setSenderName] = React.useState('');

  function handleRecipientNameChange(evt) {
    setRecipientName(evt.target.value);
  }

  function handleMessageChange(evt) {
    setMessage(evt.target.value);
  }

  function handleSenderNameChange(evt) {
    setSenderName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      recipient: recipientName,
      message,
      sender: senderName,
    });
  }

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
          <h2 className="popup__title">Add your message</h2>
          <form
            className="popup__form"
            name="Edit Card"
            noValidate
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="to"
              id="popup_to"
              onChange={handleRecipientNameChange}
              placeholder="Enter Receipient's Name"
              className={`popup__field `}
              minLength="2"
              maxLength="50"
              autoComplete="off"
              required
            />

            <textarea
              type="text"
              name="title"
              id="popup_title"
              onChange={handleMessageChange}
              placeholder="Write a note with love"
              className={`popup__field popup__field_body`}
              minLength="2"
              maxLength="200"
              required
            />

            <input
              type="text"
              name="title"
              id="popup_title"
              onChange={handleSenderNameChange}
              placeholder="Your Name"
              className={`popup__field `}
              minLength="2"
              maxLength="200"
              required
            />

            <button
              className={`popup__save-btn`}
              type="submit"
              name="Save"
              default="Save"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
