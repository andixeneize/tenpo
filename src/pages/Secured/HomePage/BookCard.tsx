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
    <div className='w-full flex items-center gap-4 py-4 border-b border-gray-300 hover:bg-gray-50 transition'>
      <img
        src={coverUrl}
        alt={book.title}
        className='w-12 h-16 object-cover flex-shrink-0 rounded'
      />

      <div className='flex flex-col justify-center flex-1 min-w-0'>
        <div className='flex items-center gap-1 text-sm font-semibold text-gray-800 truncate'>
          <span className='truncate'>{book.title}</span>
          {book.first_publish_year !== 0 && book.first_publish_year != null && (
            <span className='text-xs text-gray-500 whitespace-nowrap'>
              ({book.first_publish_year})
            </span>
          )}
        </div>

        {book.author_name && (
          <p className='text-xs text-gray-600 truncate'>
            {book.author_name.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
};
