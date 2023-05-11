import { FC } from 'react';
import { Book } from '../../interfaces/Book.interface';
import './BookList.css';
import BookItem from '../BookItem/BookItem';

type Props = {
  books: Book[];
  removeBook: (id: string) => void;
}

const BooksList: FC<Props> = ({books, removeBook}) => {
  return (
    <ul className='books-list'>
      {books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={removeBook}/>)}
    </ul>
  );
};

export default BooksList;