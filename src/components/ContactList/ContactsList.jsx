import { useSelector, useDispatch } from 'react-redux';
import { Box } from '../utils/Box.styled';
import { Contact, DelButton } from './ContactsList.styled';
import { BsPhone } from 'react-icons/bs';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { MdClose } from 'react-icons/md';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase().trim();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Box as="ul" width="430px">
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <BsPhone size={20} />
          <h4>{name}</h4>
          <h4>{number}</h4>
          <DelButton onClick={() => dispatch(deleteContact({ id }))}>
            <MdClose size={24} />
          </DelButton>
        </Contact>
      ))}
    </Box>
  );
};
