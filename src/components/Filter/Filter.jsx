import { useDispatch, useSelector } from 'react-redux';
import { filterList } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);

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
        value={filter}
        onChange={handleChange}
      ></FilterInput>
    </FilterLabel>
  );
};
