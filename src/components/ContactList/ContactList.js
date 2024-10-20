import Contact from "../Contact/Contact"
import classes from "./ContactList.module.css"

const ContactList = ({contacts, onFetchContact}) => {

    const fetchContactClicked = (contactClicked) => {
        onFetchContact(contactClicked)
    }

    return (
        <ul className={classes["contacts-list"]}>
            {
                contacts.map(contact => <li key={contact.id}><Contact contact={contact} onFetchContact={fetchContactClicked}/></li>)
            }
        </ul>
    )
}

export default ContactList