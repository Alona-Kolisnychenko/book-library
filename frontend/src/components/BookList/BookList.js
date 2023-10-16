import { useDispatch, useSelector } from 'react-redux';
import { BiTrashAlt } from 'react-icons/bi';
import { BsBookmarkHeartFill, BsBookmarkHeart } from 'react-icons/bs'
import { dellBook, toggleFavorite } from '../../redux/books/actionCreators';
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter } from '../../redux/slices/filterSlice';
import './BookList.css';


const BookList = () => {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter); 
  const dispatch = useDispatch();
 
  const filteredBooks = books.filter((book)=> {
      const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());
      const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase());
      const matchesFavorite = onlyFavoriteFilter? book.isFavorite : true;
     
    return matchesTitle && matchesAuthor && matchesFavorite
  }) 

  const handleDeleteBook = (id) => {
    dispatch(dellBook(id));
  };

  const handleToggleFavorite = (id)=>{
    dispatch(toggleFavorite(id))
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {filteredBooks.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i} {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span onClick={()=>handleToggleFavorite(book.id)}>
                {book.isFavorite
                  ? <BsBookmarkHeartFill className='star-icon' />
                  : <BsBookmarkHeart className='star-icon'/>
                }
                </span>
                
                <button onClick={() => handleDeleteBook(book.id)}>
                  <BiTrashAlt />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default BookList;
