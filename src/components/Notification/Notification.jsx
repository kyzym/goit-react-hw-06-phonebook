import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactsNotification = () => {
  const savedContacts = useSelector(getContacts);
  return (
    <div>
      <span>Total number of contacts: {savedContacts.length}</span>
    </div>
  );
};
