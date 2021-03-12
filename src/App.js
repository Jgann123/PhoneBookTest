import "./App.css";
import Phonebook from "./components/Phonebook";
import { useEffect, useState } from "react";
import db from "./components/Firebase";

function App() {
  const [contacts, setcontacts] = useState([]);

  const getContacts = () => {
    db.collection("contacts").onSnapshot((snapshot) => {
      setcontacts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            phone: doc.data().phone,
          };
        })
      );
    });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="App">
      <Phonebook contacts={contacts} />
    </div>
  );
}

export default App;
