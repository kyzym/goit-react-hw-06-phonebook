import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Box } from '../utils/Box.styled';
import { ContactsListItem } from './ContactListItem/ContactsListItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase().trim();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Box as="ul" width="430px">
      <ContactsListItem filteredContacts={filteredContacts} />
    </Box>
  );
};
