import { useState, useContext } from "react";
import { Context } from "../Store/context";
import Card from "../components/Card";

const AddContact = () => {
    const { actions } = useContext(Context);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    return (
        <div>
            <Card 
                contact={contact}
                setContact={setContact} 
                handleSubmit={actions.handleSubmit} 
                handleChange={actions.handleChange}
                handleReset={actions.resetContact} 
                id={null}
            />
        </div>
    );
};

export default AddContact;