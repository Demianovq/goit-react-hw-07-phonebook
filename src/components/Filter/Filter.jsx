import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import {
  FilterStyledLabel,
  FilterStyledInput,
  FilterLabel,
} from './Filter.styled';

export const Filter = ({ onFilter }) => {
  const dispatch = useDispatch();
  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <>
      <FilterStyledLabel>
        <FilterStyledInput
          type="text"
          name="filter"
          onChange={e => handleFilter(e)}
        />
        <FilterLabel>Filter by name</FilterLabel>
      </FilterStyledLabel>
    </>
  );
};
