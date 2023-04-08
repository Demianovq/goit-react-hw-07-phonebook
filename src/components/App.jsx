import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './ContactsList/ContactsList';
import { FormContacts } from './form/form';
import { Filter } from './Filter/Filter';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Container } from './Container/Container.styled';
import { Section } from './Section/Section';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const theSameContact = contacts.filter(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (theSameContact.length) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Container>
      <Section title={'Phonebook'}>
        <FormContacts onFormSubmit={handleSubmit} />
      </Section>

      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};
