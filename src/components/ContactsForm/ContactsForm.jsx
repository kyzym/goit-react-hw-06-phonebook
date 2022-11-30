import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import { Button, FormTag, Input, Label } from './ContactForm.styled';

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
      form.reset();
      return toast("Can't add already existing contact", {
        icon: '😭',
      });
    }

    const newContact = { id: nanoid(), name: nameValue, number: numberValue };

    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <FormTag onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Only letters, apostrophe, dash and spaces."
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
