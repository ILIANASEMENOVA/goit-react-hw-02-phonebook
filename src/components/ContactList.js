export const ContactList = ({ contacts, deleteContact }) => {
  const contactsList = contacts.map(({ name, id, number }) => (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));

  return <ul>{contactsList}</ul>;
};
