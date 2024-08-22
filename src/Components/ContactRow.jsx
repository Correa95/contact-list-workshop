function ContactRow({ contact, setSelectedContactID }) {
  return (
    <div>
      <tr
        onClick={() => {
          setSelectedContactID(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    </div>
  );
}

export default ContactRow;
