import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  StyledForm,
  Label,
  StyledErrorMessage,
  StyledField,
  Button,
  StyledLabel,
} from './form.styled';

export const FormContacts = ({ onFormSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
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
        onFormSubmit(values, actions);
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
