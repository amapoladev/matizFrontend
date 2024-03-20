import React, { useEffect, useRef } from 'react';

const Modal = ({ closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.showModal();
  }, []);

  return (
    <dialog id="my_modal_5" ref={modalRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">¡Emoción guardada con éxito!</h3>
        <p className="py-4">Presiona la tecla ESC o haz clic en el botón de abajo para cerrar</p>
        <div className="modal-action">
          <button className="btn" onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
