import classes from "./ContactCard.module.css"

const ContactCard = ({contact}) => {
    return (
        <div className={classes["contact-card"]}>
            <div className={classes["contact-card-left"]}>
            <img src={contact.image} alt={contact.name} className={classes["contact-image"]}/>
            </div>
            <div className={classes["contact-card-right"]}>
            <p className={classes["contact-name"]}>{contact.name}</p>
            <p><strong>Email :</strong> {contact.email}</p>
            <p><strong>Téléphone :</strong> {contact.phone}</p>
            <p><strong>Adresse :</strong> {contact.address}</p>
            </div>
        </div>
    )
}

export default ContactCard