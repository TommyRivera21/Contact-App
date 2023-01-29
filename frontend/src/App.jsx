import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Title from './components/Title';

const App = () => {
  return (
    <div className="bg-gray-300  min-h-screen">
      <div className="grid grid-cols-12 gap-4 p-8 ">
        <div className="col-span-12">
          <Title />
        </div>

        <div className="col-span-3 p-2 ">
          <ContactForm />
        </div>

        <div className="col-span-9 p-2 grid grid-cols-4 gap-4">
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;