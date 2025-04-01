import { GoogleBook } from '@/interfaces/GoogleBook';
import { NYTBook } from '@/interfaces/NYTBook';
import { UnifiedBook } from '@/interfaces/UnifiedBook';

export function mapGoogleBookToUnified(book: GoogleBook): UnifiedBook {
    const rawIsbn =
        book.volumeInfo.industryIdentifiers?.find(
            (identifier) => identifier.type === 'ISBN_13'
        )?.identifier || 'N/A';

    return {
        id: `google_${book.id}`,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors || [],
        description: book.volumeInfo.description || '',
        image: book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192',
        infoLink: book.volumeInfo.infoLink || '',
        isbn: `google_${rawIsbn}`,
    };
}

export function mapNYTBookToUnified(book: NYTBook): UnifiedBook {
    const rawIsbn = book.primary_isbn13 || book.primary_isbn10 || 'N/A';

    return {
        id: `nyt_${rawIsbn}`,
        title: book.title,
        authors: [book.author],
        description: book.description || '',
        image: book.book_image || 'https://via.placeholder.com/128x192',
        infoLink: book.amazon_product_url,
        isbn: `nyt_${rawIsbn}`,
    };
}
