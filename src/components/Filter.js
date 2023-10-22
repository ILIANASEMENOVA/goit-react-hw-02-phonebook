export const Filter = ({ filter, updateState }) => {
  const handleChange = e => {
    const { value, name } = e.target;
    updateState(name, value);
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        required
        onChange={handleChange}
      />
    </label>
  );
};
