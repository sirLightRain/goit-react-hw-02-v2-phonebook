import { Formik, Field, Form } from 'formik';
import { InputWrapper } from 'components/InputWrapper/InputWrapper';

export const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', contacts: [] }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form>
          <InputWrapper title="Name">
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputWrapper>
          <InputWrapper title="Number">
            <Field
              type="tel"
              name="contacts"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputWrapper>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
