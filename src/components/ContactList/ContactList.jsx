import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts.js';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
            <button className={css.button} type="button" onClick={e => dispatch(deleteContact(id))}>
            -
            </button>
            <p>{name}: {number}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;