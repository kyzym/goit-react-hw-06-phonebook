import { BsPhone } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Contact, DelButton } from './ContactsListItem.styled';

export const ContactsListItem = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  return filteredContacts.map(({ id, name, number }) => (
    <Contact key={id}>
      <BsPhone size={20} />
      <h4>{name}</h4>
      <h4>{number}</h4>
      <DelButton onClick={() => dispatch(deleteContact({ id }))}>
        <MdClose size={24} />
      </DelButton>
    </Contact>
  ));
};
