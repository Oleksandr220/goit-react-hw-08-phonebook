import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as options from "../../redux/phonebook/phonebook-option";
import * as action from "../../redux/phonebook/phonebook-action";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function Phonebook() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    dispatch(options.fetchContacts());
  }, [dispatch]);

  const handleSubmit = function (e) {
    e.preventDefault();
    setName("");
    setNumber("");

    if (contacts.some((contact) => contact?.name.includes(name))) {
      NotificationManager.error(`${name} is alredy in contacts`, "Error", 3000);
      return;
    }

    dispatch(options.postContacts({ name, number }));
  };

  const handleFilter = () => {
    return contacts.filter((contact) =>
      contact?.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleChange = (e) => {
    if (e.target.name === "filter") {
      dispatch(action.filterContacts(e.target.value));
      return;
    }
    if (e.target.name === "name") {
      setName(e.target.value);
      return;
    }
    if (e.target.name === "number") {
      setNumber(e.target.value);
      return;
    }
  };

  const deleteItem = async (e) => {
    const { id } = e.target;

    await dispatch(options.deleteContact(id));
    dispatch(options.fetchContacts());
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList contacts={handleFilter()} deleteItem={deleteItem} />

      <NotificationContainer />
    </div>
  );
}
