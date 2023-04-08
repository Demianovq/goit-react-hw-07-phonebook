import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const OnFilteredContacts = () => {
    if (filterValue) {
      return contacts.filter(contact =>
        contact.text.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return;
  };

  const renderAMarkUpList = array => {
    return array.map(contact => {
      return (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      );
    });
  };

  return (
    <ul>
      {filterValue
        ? renderAMarkUpList(OnFilteredContacts())
        : renderAMarkUpList(contacts)}
    </ul>
  );
};
