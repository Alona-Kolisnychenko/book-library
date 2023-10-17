import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createBookWidthId } from '../../utils/createBookWidthId';
import { setError } from './errorSlices';

const initialState = {
  books: [],
  isLoadingViaAPI: false
};

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      //option 1
      return thunkAPI.rejectWithValue(error)
      //option 2
      // throw error
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    dellBook: (state, action) => {
      return {
        ...state, books: state.books.filter((book) => book.id !== action.payload)
      }
      
    },
    toggleFavorite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },
  extraReducers: {
    [ fetchBook.pending ]: (state)=>{
      state.isLoadingViaAPI = true
    },
    [ fetchBook.fulfilled ]: (state, action) => {
      state.isLoadingViaAPI = false
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWidthId(action.payload, 'API'));
      }
    },
    [ fetchBook.rejected ]: (state)=>{
      state.isLoadingViaAPI = false
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBook.fulfilled, (state, action) => {
  //     if (action.payload.title && action.payload.author) {
  //       state.books.push(createBookWidthId(action.payload, 'API'));
  //     }
  //   });
  // },
});

export const { addBook, dellBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectIsLoadingViaAPI = (state)=> state.books.isLoadingViaAPI;

export default booksSlice.reducer;
