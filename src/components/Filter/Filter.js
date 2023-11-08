import FilterStyled from './Filter.styled';

export const Filter = ({ filter, updateState }) => {
  const handleChange = e => {
    const { value, name } = e.target;
    updateState(name, value);
  };

  return (
    <FilterStyled>
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
    </FilterStyled>
  );
};
