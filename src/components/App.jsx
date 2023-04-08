import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './Contacts/Contacts';
import { FormContacts } from './form/form';
import { Filter } from './Filter/Filter';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const theSameContact = contacts.filter(
      contact => contact.text.name.toLowerCase() === values.name.toLowerCase()
    );
    if (theSameContact.length) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <FormContacts onFormSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
