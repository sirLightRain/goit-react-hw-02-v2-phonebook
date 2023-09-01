import { ErrorMessage, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { InputWrapper } from 'components/InputWrapper/InputWrapper';
import { StyledForm } from './ContactForm.styled';

const validation = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁґҐ\s'-]+$/, 'Please input correct name.')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^[0-9\s()+-]+$/,
      'Please input correct tel. Contain spaces, dashes, parentheses, and can start with +'
    )
    .required('Required'),
});

export const ContactForm = ({ addContact }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          console.log(values);
          addContact({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <StyledForm>
          <InputWrapper title="Name">
            <Field
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </InputWrapper>
          <InputWrapper title="Number">
            <Field
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
          </InputWrapper>
          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
    </div>
  );
};
