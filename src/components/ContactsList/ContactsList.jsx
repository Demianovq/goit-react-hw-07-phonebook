import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/Contact/Contact';
import { ListStyled } from './ContactsList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const OnFilteredContacts = () => {
    if (filterValue) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return;
  };

  const renderAMarkUpList = array => {
    return array.map(contact => {
      return <ContactItem key={contact.id} contact={contact} />;
    });
  };

  return (
    <ListStyled>
      {filterValue
        ? renderAMarkUpList(OnFilteredContacts())
        : renderAMarkUpList(contacts)}
    </ListStyled>
  );
};
