import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      {contact.text.name}: {contact.text.number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};
