const getState = ({ getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			name: "",
			email: "",
			phone: "",
			address: ""
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Iroman/contacts", {
						method: "GET",
					});
					const data = await response.json();
					setStore({
						contacts: data.contacts,
					})
				} catch (error) {
					console.log(error);
				}
			},
			removeContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Iroman/contacts/${id}`, {
						method: "DELETE",

					});
					getActions().getContacts();
				} catch (error) {
					console.log(error);
				}
			},
			getContactById: async (id) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Iroman/contacts", {
						method: "GET",
					});
					const data = await response.json();
					const contact = data.contacts.find(contact => contact.id === Number(id));
					setStore({
						name: contact.name,
						email: contact.email,
						phone: contact.phone,
						address: contact.address
					});
				} catch (error) {
					console.log(error);
				}
			},
			updateContact: async (id, contact) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Iroman/contacts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							name: contact.name,
							phone: contact.phone,
							email: contact.email,
							address: contact.address
						}),
					});
					getActions().getContacts();
				} catch (error) {
					console.log(error);
				}
			},
			addNewContact: async (contact) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Iroman/contacts", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							name: contact.name,
							phone: contact.phone,
							email: contact.email,
							address: contact.address
						}),
					});
					getActions().getContacts();
				} catch (error) {
					console.log(error);
				}
			},
			handleSubmit: async (e, contact, navigate, EditorAdd, id) => {
				e.preventDefault();
				if (EditorAdd) {
					await getActions().updateContact(id, contact);
				} else {
					await getActions().addNewContact(contact);
				}
				navigate("/");
			},
			handleReset: () => {
				setStore({
					name: "",
					email: "",
					phone: "",
					address: ""
				});
			},
		},
	}
};

export default getState;