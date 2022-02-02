import React, { useEffect, useState } from "react";
import Form from "./Form/Form";
import List from "./Lists/List";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Yigit",
      phone_number: 123456,
    },
    {
      fullname: "Duygu",
      phone_number: 6543221,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} setContacts={setContacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
