import { useState } from "react";

import "./App.css";
import ContactList from "./Components/ContactList";
import SelectedContact from "./Components/SelectedContact";

function App() {
  const [selectedContactID, setSelectedContactID] = useState(null);

  return (
    <>
      {selectedContactID ? (
        <SelectedContact
          selectedContactID={selectedContactID}
          setSelectedContactID={setSelectedContactID}
        />
      ) : (
        <ContactList setSelectedContactID={setSelectedContactID} />
      )}
    </>
  );
}

export default App;
