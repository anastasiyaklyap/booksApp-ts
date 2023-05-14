import { FC } from 'react';
import { Book } from '../../interfaces/Book.interface';
import './BookList.css';
import { useAppSelector, useAppDispatch } from './../../utils/redux';
import { removeBook } from './../../redux/booksRedux';
import BookItem from '../BookItem/BookItem';

const BooksList: FC = () => {
  const books = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();

  return (
    <ul className='books-list'>
      {books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={(id: string) => dispatch(removeBook(id))}/>)}
    </ul>
  );
};

export default BooksList;