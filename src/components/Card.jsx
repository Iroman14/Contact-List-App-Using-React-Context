import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ contact, setContact, handleSubmit, handleReset, id }) => {
    const navigate = useNavigate();
    const EditorAdd = !!id; 

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1 className="text-center mb-4">{EditorAdd ? "Editar Contacto" : "Añadir un nuevo contacto"}</h1>
            <form className="w-50 p-4" onSubmit={(e) => handleSubmit(e, contact, navigate, EditorAdd, id)}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Nombre Completo:</label>
                    <input type="text" name="name" className="form-control" placeholder="Por favor ingresar su nombre completo" value={contact.name} onChange={(e) => setContact({ ...contact, [e.target.name]: e.target.value })} required />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Correo Electrónico:</label>
                    <input type="email" name="email" className="form-control" placeholder="Por favor ingresar su Correo Electrónico" value={contact.email} onChange={(e) => setContact({ ...contact, [e.target.name]: e.target.value })} required />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Teléfono:</label>
                    <input type="tel" name="phone" className="form-control" placeholder="Por favor ingresar su número de teléfono" value={contact.phone} onChange={(e) => setContact({ ...contact, [e.target.name]: e.target.value })} required />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Dirección:</label>
                    <input type="text" name="address" className="form-control" placeholder="Por favor ingresar su dirección de domicilio" value={contact.address} onChange={(e) => setContact({ ...contact, [e.target.name]: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn-primary w-100"> {EditorAdd ? "Actualizar" : "Guardar"} </button>
            </form>
            <Link className="mt-3 text-decoration-none" to="/" onClick={handleReset}> O regresar a la lista de contactos </Link>
        </div>
    );
}

export default Card;