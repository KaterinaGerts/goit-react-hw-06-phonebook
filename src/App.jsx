// import useLocalStorage from 'hooks/useLocalStorage';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

function App() {
  

  // const addContact = ({ name, number }) => {
  //   const data = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   const nameNormalize = name.toLowerCase();
  //   const checkedName = contacts.find(
  //     contact => nameNormalize === contact.name.toLowerCase(),
  //   );

  //   checkedName
  //     ? alert(`${name} is already in contacts!`)
  //     : setContacts(contacts => [...contacts, data]);
  // };

  
  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm  />
        <h2>Contacts</h2>
        <Filter  />        
        <ContactList/>
      </div>
    </Container>
  );
}

export default App;
