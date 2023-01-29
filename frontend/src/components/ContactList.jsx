import { useContext } from 'react';
import ContactCard from './ContactCard';
import { ContactContext } from '../context/ContactContext';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  if (contacts.length === 0) {
    return (
      <h1 className="font-bold text-2xl col-span-4">
        Agenda de contactos vacia! Agrega nuevas personas.
      </h1>
    );
  }

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard key={contact._id} element={contact} />
      ))}
    </>
  );
};

export default ContactList;