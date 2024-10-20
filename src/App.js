import classes from './App.module.css';
import ContactList from './components/ContactList/ContactList';
import ContactCard from "./components/ContactCard/ContactCard";
import { useState } from 'react';

function App() {

  const contacts = [
    {
      id: 1,
      name: "Maxime Faubert",
      job: "Développeur Front-end",
      email: "maxime.faubert@example.com",
      phone: "+33 6 12 34 56 78",
      address: "123 Rue de Paris, 75001 Paris, France",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 2,
      name: "Emilie Goudreau",
      job: "Designer UX/UI",
      email: "emilie.goudreau@example.com",
      phone: "+33 6 98 76 54 32",
      address: "456 Avenue de Lyon, 69002 Lyon, France",
      image: "https://i.pravatar.cc/150?img=10"
    },
    {
      id: 3,
      name: "Alice Lafond",
      job: "Chef de projet",
      email: "alice.lafond@example.com",
      phone: "+33 6 87 65 43 21",
      address: "789 Boulevard de Nice, 06000 Nice, France",
      image: "https://i.pravatar.cc/150?img=32"
    },
    {
      id: 4,
      name: "Paul Guédry",
      job: "Développeur Full-stack",
      email: "paul.guedry@example.com",
      phone: "+33 6 23 45 67 89",
      address: "321 Rue des Alpes, 74000 Annecy, France",
      image: "https://i.pravatar.cc/150?img=7"
    }
  ];

  const [contact, setContact] = useState(null);

  const fetchContactClicked = (contactClicked) => {
      setContact(contactClicked)
  }
  

  return (
    <div className={classes.app}>
      <aside className={classes["contacts-list"]}>
        <h2>Liste des contacts</h2>

        {
          // Affichez la liste des contacts ici
          <ContactList contacts={contacts} onFetchContact={fetchContactClicked}/>
        }

      </aside>

      <section className={classes["contact-details"]}>
        <h2>Détails du contact</h2>

        {
          // Affichez les détails du contact ici
          contact && <ContactCard contact={contact}/>
        }

      </section>
    </div>
  );
}

export default App;
