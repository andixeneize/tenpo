import axios, { AxiosError } from 'axios';
import type { Book } from '@/types/book';

export const fetchBooks = async (
  page: number,
  results: number = 20,
  retries: number = 3
): Promise<Book[]> => {
  try {
    const response = await axios.get('https://openlibrary.org/search.json', {
      params: {
        q: 'the',
        page,
        limit: results,
      },
    });
    return response.data.docs;
  } catch (err) {
    const error = err as AxiosError;
    if (retries > 0 && error.response?.status === 500) {
      console.warn(`Retrying fetchBooks (page ${page})...`);
      return fetchBooks(page, results, retries - 1);
    } else {
      console.error('Error fetching books:', error.message);
      return [];
    }
  }
};
