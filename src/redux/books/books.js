import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '0',
    title: 'THE HOUSE OF MIRTH',
    author: 'EDITH WHARTON',
    progress: 80,
  },
  {
    id: '1',
    title: ' A TIME TO KILL',
    author: ' WILLIAM FAULKNER',
    progress: 67,
  },
  {
    id: '2',
    title: 'EAST OF EDEN ',
    author: 'JOHN STEINBECK',
    progress: 34,
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [
      ...state,
      {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        progress: 50,
      },
    ],
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

const { actions, reducer } = booksSlice;
export const { addBook, removeBook } = actions;
export default reducer;
