import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = ({ onFilter }) => {
  const dispatch = useDispatch();
  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" name="filter" onChange={e => handleFilter(e)} />
      </label>
    </>
  );
};
