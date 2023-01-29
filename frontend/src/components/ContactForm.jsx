import { useState, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import { BiUser } from "react-icons/bi";

const ContactForm = () => {
  const { createContact } = useContext(ContactContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === ''|| phone === ''|| address === '') {
      alert('Debe llenar todos los campos para hacer el registro');
      return;
    }

    createContact({ name, email, phone, address });
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <form
      className="bg-teal-50 shadow-md rounded p-3 flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-black font-bold">Agregar Contacto</h1>

      <input
        className="shadow appearance-none border rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoFocus
        required 
      />

      <input
        className="shadow appearance-none border rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        autoFocus
        required
      />

      <input
        className="shadow appearance-none border rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Celular"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        autoFocus
        required
      />

      <input
        className="shadow appearance-none border rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Dirección"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        autoFocus
        required
      />
  
      <button className="bg-cyan-900 font-semibold text-white p-2 rounded inline-flex justify-center items-center">
        Registrar Contacto
        <BiUser className="ml-2" />
      </button>
    </form>
  );
};

export default ContactForm;