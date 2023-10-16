import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/slices/booksSlice';
import { createBookWidthId } from '../../utils/createBookWidthId';
import booksData from '../../data/books.json';
import { thunkFunction } from '../../redux/slices/booksSlice';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWidthId({ title, author }, 'manual')));
      setAuthor('');
      setTitle('');
    }
  };

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWidthId(randomBook, 'random')));
  };

  

  const handleAddRandomBookViaAPI = async () => {
    dispatch(thunkFunction)
  };

  return (
    <div className="app-block book-form">
      <h2>Add new book</h2>
      <form onSubmit={handelSubmit}>
        <label htmlFor="title">TItle:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomBookViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};
export default BookForm;
