import { combineReducers } from 'redux';
import BooksReducer from './books';
import ActiveBookReducer from './active-book';

const rootReducer = combineReducers({
    activeBook: ActiveBookReducer,
    books: BooksReducer,
});

export default rootReducer;
