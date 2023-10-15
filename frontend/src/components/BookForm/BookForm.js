import { useState } from 'react';
import './BookForm.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/actionCreators';
import booksData from '../../data/books.json';

const BookForm = () => {
  const [ title,setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');
  const dispatch = useDispatch();

  const handelSubmit = (e)=>{
    e.preventDefault();
    if(title && author){
        const book = {
            title, 
            author,
            id: uuidv4()
        }
        dispatch(addBook(book))
        setAuthor('');
        setTitle('');
    }
  }

  const handleAddRandomBook = ()=>{
    const randomIndex = Math.floor(Math.random()*booksData.length);
    const randomBook = booksData[randomIndex];
    const randomBookWidthId = {
      ...randomBook,
      id: uuidv4()
    }
    dispatch(addBook(randomBookWidthId))
  }

  return (
    <div className="app-block book-form">
      <h2>Add new book</h2>
      <form onSubmit={handelSubmit}>
        <label htmlFor='title'>TItle:</label>
        <input type='text' id='title' value={title} onChange={(e)=>setTitle(e.target.value)}/> 
        <label htmlFor='author'>Author:</label>
        <input type='text' id='author' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <button type='submit'>Add book</button>
        <button type='button' onClick={handleAddRandomBook}>Add Random</button>
      </form>
    </div>
  );
};
export default BookForm;
