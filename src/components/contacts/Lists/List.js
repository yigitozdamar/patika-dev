import React, { useState } from "react";

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key] // bunu item.fullName gibi düşünebiliriz.
        .toString()
        .toLowerCase() // Arama yaparken küçük büyük harf problemi yaşamamk adına hepsini küçük harfe çevirdik.
        .includes(filterText.toLocaleLowerCase()); // FilterText aradğımız değerin içinde var mı yok mu anlamak için.
    });
  });

  return (
    <div>
      <div>Contact List</div>
      <input
        type="text"
        placeholder="Filter Contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, key) => (
          <li key={key}>
            {" "}
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <h3 className="number">
        Total Contact : {filterText ? filterText.length : filtered.length}
      </h3>
    </div>
  );
};

export default List;
