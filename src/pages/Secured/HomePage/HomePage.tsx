import { fetchBooks } from '@/services/BookService';
import type { Book } from '@/types/book';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BookCard } from './BookCard';
import { Loader } from 'lucide-react';

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreBooks = async () => {
    const newBooks = await fetchBooks(page);
    setBooks((prev) => [...prev, ...newBooks]);
    setPage((prev) => prev + 1);

    // Simulamos corte en 2000 libros
    if (books.length + newBooks.length >= 2000) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    loadMoreBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='max-w-3xl mx-auto px-4 py-6'>
      <h1 className='text-xl mb-4'>Libros encontrados en openlibrary.org</h1>
      <InfiniteScroll
        dataLength={books.length}
        next={loadMoreBooks}
        hasMore={hasMore}
        loader={
          <div className='flex justify-center my-6'>
            <Loader className='w-6 h-6 text-gray-500 animate-spin' />
          </div>
        }
        endMessage={<p className='text-center mt-4'>Fin del listado.</p>}
      >
        {books.map((book, index) => (
          <BookCard key={`${book.key}-${index}`} book={book} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
