import { useState } from 'react';
import './BookForm.css';
const BookForm = () => {
  const [ title,setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');
  
  const handelSubmit = (e)=>{
    e.preventDefault();
    if(title && author){
        console.log(title, author)
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
