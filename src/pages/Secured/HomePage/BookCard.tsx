import type { Book } from '@/types/user';
import React from 'react';

interface Props {
  book: Book;
}

export const BookCard: React.FC<Props> = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
    : 'https://via.placeholder.com/50x75?text=No+Cover';

  return (
    <div className='w-full flex items-center gap-4 p-4 border-b hover:bg-gray-50 transition'>
      <img
        src={coverUrl}
        alt={book.title}
        className='w-12 h-16 object-cover flex-shrink-0 rounded'
      />

      <div className='flex flex-col justify-center flex-1 min-w-0'>
        <h3 className='text-sm font-semibold truncate'>{book.title}</h3>
        {book.author_name && (
          <p className='text-xs text-gray-600 truncate'>
            {book.author_name.join(', ')}
          </p>
        )}
      </div>

      {book.first_publish_year !== 0 && book.first_publish_year != null && (
        <span className='text-xs text-gray-500 hidden sm:block w-16 text-right'>
          {book.first_publish_year}
        </span>
      )}
    </div>
  );
};
