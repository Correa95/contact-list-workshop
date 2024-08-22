import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
ContactRow;

function ContactList({ setSelectedContactID }) {
  const [error, setError] = useState(null);
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContactData(result);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {!error &&
            contactData.map((contact) => {
              return (
                <ContactRow
                  key={contact.id}
                  contact={contact}
                  setSelectedContactID={setSelectedContactID}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
