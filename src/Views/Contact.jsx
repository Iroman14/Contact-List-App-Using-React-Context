import React, { useEffect, useContext } from "react";
import { Context } from "../Store/context";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip, faLocationDot, faEnvelope, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const information = useContext(Context);

  useEffect(() => {
    information.actions.getContacts();
  }, []);

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end mb-3">
        <Link className="btn btn-success mb-3" to="/AddContact"> Añadir un nuevo contacto</Link>
      </div>
      <div>
        {information.store.contacts.length === 0 ? (
          <h3>No hay contactos disponibles en esta agenda</h3>
        ) : (
          information.store.contacts.map((contact) => (
            <div className="card mb-3 p-3 shadow-sm" key={contact.id}>
              <div className="row g-0 align-items-center">
                <div className="col-md-3 d-flex justify-content-center">
                  <img src="https://st4.depositphotos.com/11574170/25191/v/450/depositphotos_251916955-stock-illustration-user-glyph-color-icon.jpg" className="rounded-circle border m-auto" width="160" height="140" alt="profile" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h3 className="card-title mb-3 fw-bold">{contact.name}</h3>
                    <p className="card-text mb-2"> <FontAwesomeIcon icon={faLocationDot} className="me-2 fa-lg" />{contact.address}</p>
                    <p className="card-text mb-2"> <FontAwesomeIcon icon={faPhoneFlip} className="me-2 fa-lg" />{contact.phone}</p>
                    <p className="card-text mb-2"> <FontAwesomeIcon icon={faEnvelope} className="me-2 fa-lg" />{contact.email}</p>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                  <Link to={`/EditContact/${contact.id}`} className="btn btn-outline-primary me-2"><FontAwesomeIcon icon={faPenToSquare} /></Link>
                  <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target={`#delete-${contact.id}`} onClick={(focus) => focus.target.blur()}><FontAwesomeIcon icon={faTrash} /></button>
                  <div className="modal fade" id={`delete-${contact.id}`} aria-labelledby="DeleteModal" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="DeleteModal"> ¿Estás seguro de eliminar este contacto? </h4>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>Si eliminas este contacto no podrá ser recuperado!</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                          <button type="button" className="btn btn-secondary" onClick={() => information.actions.removeContact(contact.id)} data-bs-dismiss="modal">Borrar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Contact;