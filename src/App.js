
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts');

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const data = {
      id: uuidv4(),
      name,
      number,
    };

    const nameNormalize = name.toLowerCase();
    const checkedName = contacts.find(
      contact => nameNormalize === contact.name.toLowerCase(),
    );

    checkedName
      ? alert(`${name} is already in contacts!`)
      : setContacts(contacts => [...contacts, data]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </Container>
  );
}

export default App;
