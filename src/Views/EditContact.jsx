import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Store/context";
import Card from "../components/Card";

const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    useEffect(() => {
        const response = async () => {
            await actions.getContactById(id);
            setContact({
                name: store.name || "",
                email: store.email || "",
                phone: store.phone || "",
                address: store.address || "",
            })
        };
        response();
    }, [store.name, store.email, store.phone, store.address]);

    return (
        <div>
            <Card
                contact={contact}
                setContact={setContact}
                handleSubmit={actions.handleSubmit}
                handleChange={actions.handleChange}
                handleReset={actions.resetContact}
                id={id}
            />
        </div>
    );
};

export default EditContact;