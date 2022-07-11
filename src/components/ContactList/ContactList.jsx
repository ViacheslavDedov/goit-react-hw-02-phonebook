import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({contacts, onDelContact}) => (
  <ul className={css.contacts}>
    {contacts.map(({id, name, number}) => (
      <li key={id} className={css.contacts__item}>
        <p>
          {name}:&nbsp; 
          <span>
            {number}
          </span>
        </p>
        <button
          className={css.contacts__btn}
          type="button"
          onClick={() => onDelContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelContact: PropTypes.func.isRequired,
}

export default ContactList;