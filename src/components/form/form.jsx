import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledForm,
  Label,
  StyledErrorMessage,
  StyledField,
  Button,
  StyledLabel,
} from './form.styled';

export const FormContacts = () => {
  const initialValues = {
    name: '',
    number: '',
  };

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

  const FormScheme = object({
    name: string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        excludeEmptyString: true,
      })
      .required('Required'),
    number: string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        {
          message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          excludeEmptyString: true,
        }
      )
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormScheme}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <StyledForm>
        <Label>
          <StyledField type="text" name="name" />
          <StyledLabel>Name</StyledLabel>
          <ErrorMessage component={StyledErrorMessage} name="name" />
        </Label>

        <Label>
          <StyledField type="tel" name="number" />
          <StyledLabel>Number</StyledLabel>
          <ErrorMessage component={StyledErrorMessage} name="number" />
        </Label>

        <Button type="submit">Add Contact</Button>
      </StyledForm>
    </Formik>
  );
};
