import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleChangeTitleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleChangeAuthorFilter = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  const handleChangeOnlyFavoriteFilter = () => {
    dispatch(setOnlyFavoriteFilter());
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
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author"
            value={authorFilter}
            onChange={handleChangeAuthorFilter}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkBox"
              checked={onlyFavoriteFilter}
              onChange={handleChangeOnlyFavoriteFilter}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
