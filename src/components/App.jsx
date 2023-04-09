import { ContactList } from './ContactsList/ContactsList';
import { FormContacts } from './form/form';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container.styled';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Container>
      <Section title={'Phonebook'}>
        <FormContacts />
      </Section>

      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};
