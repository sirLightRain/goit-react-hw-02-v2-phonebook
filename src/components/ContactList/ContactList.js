export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          {item.name}: {item.number}
          <button type="button" onClick={() => onDeleteContact(item.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};
