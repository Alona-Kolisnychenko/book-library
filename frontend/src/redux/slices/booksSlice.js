import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createBookWidthId } from '../../utils/createBookWidthId';
import { setError } from './errorSlices';

const initialState = [];

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      throw error
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWidthId(action.payload, 'API'));
      }
    });
  },
});

export const { addBook, dellBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
