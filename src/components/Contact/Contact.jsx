import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import {
  ContactItemStyled,
  ButtonContactItem,
  ContactDesc,
} from './Contact.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <ContactItemStyled>
        <ButtonContactItem type="button" onClick={handleDelete}>
          Delete
        </ButtonContactItem>
        <ContactDesc>{contact.number}</ContactDesc>
        <ContactDesc>{contact.name} :</ContactDesc>
      </ContactItemStyled>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
