import { useState } from 'react';
import './BookForm.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';

const BookForm = () => {
  const [ title,setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');
  const dispatch = useDispatch();
  
  const handelSubmit = (e)=>{
    e.preventDefault();
    if(title && author){
        const book = {
            title, 
            author
        }
        dispatch(addBook(book))
        setAuthor('');
        setTitle('');
    }
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
      </form>
    </div>
  );
};
export default BookForm;
