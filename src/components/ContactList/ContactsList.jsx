import { useSelector, useDispatch } from 'react-redux';
import { Box } from '../utils/Box.styled';
import { Contact, DelButton } from './ContactsList.styled';
import { BsPhone } from 'react-icons/bs';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase().trim();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  let id = 0;

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Box as="ul" width="430px">
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <BsPhone />
          <p>{name}</p>
          <p>{number}</p>
          <DelButton onClick={handleDelete}>Delete</DelButton>
        </Contact>
      ))}
    </Box>
  );
};
