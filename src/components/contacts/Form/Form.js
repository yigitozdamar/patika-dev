import React, { useState } from "react";

const Form = ({ addContact, contacts }) => {
  const initialFormValues = { fullname: "", phone_number: "" };
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
    setForm(initialFormValues);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Full Name"
            onChange={onChangeInput}
            value={form.fullname}
          />
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phone_number}
          />
        </div>
        <div className="btn">
          <button >Add Contact</button>
        </div>
      </form>
    </>
  );
};

export default Form;
