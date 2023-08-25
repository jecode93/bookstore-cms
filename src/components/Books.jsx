import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookCard from './bookCard';
import AddBook from './addBook';
import { fetchBook } from '../redux/books/booksSlice';

export default function Book() {
  const { books, isLoading } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [books, dispatch]);

  if (isLoading) return <div className="isLoading">Loading...</div>;

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <BookCard
              id={book.item_id}
              category={book.category}
              title={book.title}
              author={book.author}
              chapter="Introduction"
              percentValue={0}
            />
          </li>
        ))}
      </ul>
      <hr />
      <AddBook />
    </>
  );
}
