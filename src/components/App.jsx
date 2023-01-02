import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { CommonWrapper, PhonebookWrapper, ContactsWrapper } from './App.styled';

export const App = () => {

  return (
    <CommonWrapper>
      <PhonebookWrapper>
        <h1>Phonebook</h1>
        <ContactForm />
      </PhonebookWrapper>

      <ContactsWrapper>
        <h2>Contacts</h2>
        <Filter />
        <ContactList/>
      </ContactsWrapper>
    </CommonWrapper>
  );
};
