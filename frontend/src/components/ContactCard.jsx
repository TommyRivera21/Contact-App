import { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import { MdDelete } from 'react-icons/md';

function ContactCard({ element }) {
  const { deleteContact } = useContext(ContactContext);

  return (
    <div className="bg-teal-50 rounded-lg shadow-lg p-6">
      <label className="font-bold text-xl mb-2">Nombre del Contacto</label>
        <p className="break-all">{element.name}</p>
      <label className="font-semibold">Email</label>
        <p className="break-all">{element.email}</p>
      <label className="font-semibold">Numero telefonico</label>
        <p className="break-all">{element.phone}</p>
      <label className="font-semibold">Direccion</label>
        <p className="break-all">{element.address}</p>
        <br />
      <button
        className="bg-cyan-900 font-semibold text-white p-2 rounded inline-flex justify-center items-center"
        onClick={() => deleteContact(element._id)}
      >
        Eliminar Contact
        <MdDelete className="ml-1" />
      </button>
    </div>
  );
}

export default ContactCard;