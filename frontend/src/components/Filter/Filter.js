import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  selectTitleFilter,
} from '../../redux/slices/filterSlice';
import { resetFilters } from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  const handleChangeTitleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title"
            value={titleFilter}
            onChange={handleChangeTitleFilter}
          />
        </div>
        <button type='button' onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};
export default Filter;
