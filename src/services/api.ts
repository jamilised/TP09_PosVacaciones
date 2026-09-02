import axios from 'axios';
import type { Book } from '../types/book';

const BASE_URL = 'https://openlibrary.org';

interface OpenLibraryDoc {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
  first_sentence?: string[] | { value?: string };
  publisher?: string[];
  subject?: string[];
  number_of_pages_median?: number;
}

interface OpenLibraryResponse {
  docs: OpenLibraryDoc[];
}

export const fetchBooksFromApi = async (query: string = 'react'): Promise<Book[]> => {
  const fields = 'key,title,author_name,cover_i,first_publish_year,first_sentence,publisher,subject,number_of_pages_median';
  const response = await axios.get<OpenLibraryResponse>(
    `${BASE_URL}/search.json?q=${encodeURIComponent(query)}&fields=${fields}&limit=20`
  );

  return response.data.docs.map((doc: OpenLibraryDoc) => {
    const coverUrl = doc.cover_i
      ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
      : 'https://media.istockphoto.com/id/1980276924/es/vector/sin-elemento-gr%C3%A1fico-en-miniatura-de-la-foto-no-se-ha-encontrado-ninguna-imagen-o-est%C3%A1.jpg?s=612x612&w=0&k=20&c=artWlQoi5R1edWQBv9LfzeLXupOcH_alZnMgvXdYkF4=';

    let sentence: string | undefined = undefined;

    if (Array.isArray(doc.first_sentence) && doc.first_sentence.length > 0) {
      sentence = doc.first_sentence[0];
    } else if (doc.first_sentence && 'value' in doc.first_sentence) {
      sentence = doc.first_sentence.value;
    }

    return {
      id: doc.key,
      title: doc.title,
      authors: doc.author_name ?? ['Autor desconocido'],
      coverUrl,
      publishYear: doc.first_publish_year,
      firstSentence: sentence,
      publishers: doc.publisher ? doc.publisher.slice(0, 3) : undefined,
      subjects: doc.subject ? doc.subject.slice(0, 5) : undefined,
      numberOfPages: doc.number_of_pages_median,
    };
  });
};