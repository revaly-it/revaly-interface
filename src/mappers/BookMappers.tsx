import { GoogleBook } from '@/interfaces/GoogleBook';
import { UnifiedBook } from '@/interfaces/UnifiedBook';

export function mapGoogleBookToUnified(book: GoogleBook): UnifiedBook {

    const rawIsbn =
        book.volumeInfo.industryIdentifiers?.find(
            (identifier) => identifier.type === 'ISBN_13' || identifier.type === 'ISBN_10'
        )?.identifier || 'N/A';


    return {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors || [],
        description: book.volumeInfo.description || '',
        image: book.volumeInfo.imageLinks?.thumbnail || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?fit=crop&w=128&q=80",
        infoLink: book.volumeInfo.infoLink || '',
        isbn: rawIsbn,
    };
}

