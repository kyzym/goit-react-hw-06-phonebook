import { FcContacts, FcList } from 'react-icons/fc';
import { Toaster } from 'react-hot-toast';
import {
  ContactsList,
  ContactsNotification,
  Filter,
  Form,
  SubTitle,
  Title,
} from '.';
import { Box } from './utils/Box.styled';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={10}
      px={10}
    >
      <Title>
        Phonebook
        <FcContacts />
      </Title>
      <Form />

      <SubTitle>
        Contacts
        <FcList />
      </SubTitle>
      <Filter />
      <ContactsList />
      <ContactsNotification />
      <Toaster position="top-center" reverseOrder={false} />
    </Box>
  );
};
