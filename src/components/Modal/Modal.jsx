import React from "react";
import "./Modal.css";
import closeBtn from "../../icons/close.svg";

const Modal = ({ handleClose, ...item }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal card">
        <div className="modal__img">
          <img src={item.picture} alt="Аварат" />
        </div>
        <div className="card__info">
          <p>
            name: <span>{item.name}</span>
          </p>
          <p>
            age: <span>{item.age}</span>
          </p>
          <p>
            email: <span>
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </span>
          </p>
          <p>
            phone: <span>
              <a href={`tel:${item.phone}`}>{item.phone}</a>
            </span>
          </p>
          <p>
            about: <span>{item.about}</span>
          </p>
        </div>
        <button className="btn-close" onClick={handleClose}>
          <img src={closeBtn} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
