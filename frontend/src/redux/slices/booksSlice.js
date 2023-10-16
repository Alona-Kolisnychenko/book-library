import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createBookWidthId } from '../../utils/createBookWidthId';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    dellBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
      // return state.map((book)=>
      //     book.id === action.payload
      //     ? {...book, isFavorite: !book.isFavorite}     //можна так
      //     : book
      // )
    },
  },
});

export const { addBook, dellBook, toggleFavorite } = booksSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:4000/random-book');
    if (res?.data?.title && res?.data?.author) {
      dispatch(addBook(createBookWidthId(res.data, 'API')));
    }
  } catch (error) {
    console.log(error);
  }
};
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
