import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  getContactsItems,
  getContactsFilter,
} from 'Store/contactsSlice';
import { Button, Span, List } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getContactsFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <List key={id}>
          <Span>
            {name}: {number}
          </Span>
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </List>
      ))}
    </ul>
  );
}

