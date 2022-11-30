// import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import { Button, FormTag, Input, Label } from './ContactForm.styled';

// import { useState } from 'react';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === nameValue.toLowerCase()
      )
    ) {
      return alert("Can't add already existing contact");
    }

    dispatch(addContact(nameValue, numberValue));
    form.reset();
  };
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChange = e => {
  //   if (e.target.name === 'name') setName(e.target.value);

  //   if (e.target.name === 'number') setNumber(e.target.value);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   onSubmit({ name, number });

  //   e.currentTarget.reset();
  // };

  return (
    <FormTag onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
        />
      </Label>

      <Button type="submit">add contact</Button>
    </FormTag>
  );
};

// Form.propTypes = {
//   name: PropTypes.string,
//   value: PropTypes.string,
//   handleSubmit: PropTypes.func,
//   handleChange: PropTypes.func,
// };
