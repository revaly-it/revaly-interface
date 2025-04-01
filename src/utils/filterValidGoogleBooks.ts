import { GoogleBook } from "@/interfaces/GoogleBook";

export function filterBooksWithISBN(books: GoogleBook[]): GoogleBook[] {
    return books.filter(book =>
        book.volumeInfo?.industryIdentifiers?.some(id =>
        id.type === 'ISBN_13' || id.type === 'ISBN_10'
        )
    );
}
