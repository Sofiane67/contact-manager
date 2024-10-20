import classes from "./Contact.module.css"

const Contact = ({contact, onFetchContact}) => {

    const contactClickHandler = () => {
        onFetchContact(contact)
    }

    return (
        <div className={classes.contact} onClick={contactClickHandler}>
            <img src={contact.image} alt={contact.name}/>
            <div>
            <span className={classes["contact-name"]}>{contact.name}</span>
            <span className={classes["contact-job"]}>{contact.job}</span>
            </div>
        </div>
    )
}

export default Contact