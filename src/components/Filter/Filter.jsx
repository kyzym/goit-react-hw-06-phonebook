import { useDispatch } from 'react-redux';
import { filterList } from 'redux/filtersSlice';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const inputValue = e.target.value;

    dispatch(filterList(inputValue));
  };

  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={handleChange}
      ></FilterInput>
    </FilterLabel>
  );
};
