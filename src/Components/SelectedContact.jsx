import { useState, useEffect } from "react";

function SelectedContact({ selectedContactID, setSelectedContactID }) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    async function fetchSingleContact() {
      try {
        const res = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`
        );
        const data = await res.json();

        setContact(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleContact();
  }, [selectedContactID]);
  return (
    <div>
      {Object.keys(contact).length && (
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <td>{contact.address.street}</td>
          <td>{contact.company.name}</td>
        </tr>
      )}
      <button onClick={() => setSelectedContactID(null)}>Back</button>
    </div>
  );
}

export default SelectedContact;
