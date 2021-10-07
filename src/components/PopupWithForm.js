import React from "react";

function PopupWithForm({isOpen, onOutsideClick, onClose, onSubmit}) {


  return (
    <div className={`popup popup_type_edit-card popup_opened${isOpen ? 'popup_opened' : ''} 
    `}>
      <div className="popup__overlay" onClick={onOutsideClick}>
        <div className="popup__container">
          <button className="popup__close-btn" type="button" onClick={onClose}></button>
          <h2 className="popup__title">Add your message</h2>
          <form className="popup__form" name="Edit Card" noValidate onSubmit={onSubmit} >
         
            <input
              type="text"
              name="to"
              id="popup_to"
              // onChange={handleNameChange}
              placeholder="Enter Receipient's Name"
              className={`popup__field `}
              minLength="2" maxLength="50"
              // ref={nameRef} 
              autoComplete="off"
              required />

            <input
              type="text"
              name="title"
              id="popup_title"
              // value={description || ''}
              // onChange={handleDescriptionChange}
              placeholder="Write a note with love"
              className={`popup__field popup__field_body`}
              minLength="2" maxLength="200"
              // ref={descriptionRef} autoComplete="off"
              required />

            <input
              type="text"
              name="title"
              id="popup_title"
              // value={description || ''}
              // onChange={handleDescriptionChange}
              placeholder="Your Name"
              className={`popup__field `}
              minLength="2" maxLength="200"
              // ref={descriptionRef} autoComplete="off"
              required />


            <button className={`popup__save-btn`} type="submit" name="Save" default="Save">Save</button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default PopupWithForm